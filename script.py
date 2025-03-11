from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://www.testpreptraining.com/software-quality-assurance-free-practice-test")

driver.find_element(By.CSS_SELECTOR, '[name="question[0][answer][]"]').click()
time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '[name="question[1][answer][]"]').click()
time.sleep(2)

time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '[name="question[2][answer][]"]').click()
time.sleep(2)

time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '[name="question[3][answer][]"]').click()
time.sleep(2)

time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '[name="question[4][answer][]"]').click()
time.sleep(2)

time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '[name="question[5][answer][]"]').click()
time.sleep(2)

time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '[name="question[6][answer][]"]').click()
time.sleep(2)

time.sleep(2)
driver.find_element(By.CSS_SELECTOR, '[name="question[7][answer][]"]').click()
time.sleep(2)

driver.quit()
