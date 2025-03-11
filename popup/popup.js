document.getElementById("start").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "startRecording" });
});

document.getElementById("stop").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stopRecording" });
});

document.getElementById("redo").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "clearRecording" });
  document.getElementById("scriptOutput").innerText = "";
});

document.getElementById("generate").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "generateSeleniumScript" }, (response) => {
      document.getElementById("scriptOutput").innerText = response.script;
  });
});
