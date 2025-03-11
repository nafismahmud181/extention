chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startRecording") {
      chrome.storage.local.set({ testCases: [] });
  }
  if (message.action === "generateSeleniumScript") {
      chrome.storage.local.get("testCases", (data) => {
          let script = generateSeleniumScript(data.testCases);
          sendResponse({ script });
      });
      return true;
  }
});

function generateSeleniumScript(interactions) {
  let script = `from selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.common.keys import Keys\nimport time\n\n`;
  script += `driver = webdriver.Chrome()\ndriver.get('YOUR_TEST_URL')\n\n`;

  interactions.forEach((action) => {
      if (action.type === "click") {
          script += `driver.find_element(By.CSS_SELECTOR, '${action.selector}').click()\n`;
      } else if (action.type === 'input') {
          script += `driver.find_element(By.CSS_SELECTOR, '${action.selector}').send_keys('${action.value}')\n`;
      } else if (action.type === 'hover') {
          script += `from selenium.webdriver.common.action_chains import ActionChains\n`;
          script += `actions = ActionChains(driver)\nactions.move_to_element(driver.find_element(By.CSS_SELECTOR, '${action.selector}')).perform()\n`;
      }
      script += 'time.sleep(1)\n'; // Add a delay for realism
  });

  script += `\ndriver.quit()\n`;
  return script;
}
