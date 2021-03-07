# Location of my local file for chromedriver
# ('/home/chriswilson/Downloads/chromedriver_linux64/chromedriver')
import unittest
import logging, time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class ChromeSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome('/home/chriswilson/Downloads/chromedriver_linux64/chromedriver')

    def test_search(self):
        driver = self.driver
        # Website to test   
        driver.get("https://ultranautstest.netlify.app/")
        # Maximise the window 
        driver.maximize_window
        # Checks that Ultranauts Coding Challenge is in the title
        self.assertIn("Ultranauts Coding Challenge", driver.title)
        # Checks admin password if meet criteria
        username = driver.find_element_by_id("username")
        username.send_keys("admin")
        password = driver.find_element_by_id("password")
        password.send_keys("password1234!!!")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks admin password if too short 
        username = driver.find_element_by_id("username")
        username.send_keys("admin")
        password = driver.find_element_by_id("password")
        password.send_keys("passrd123!!!")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks admin password if no letters
        username = driver.find_element_by_id("username")
        username.send_keys("admin")
        password = driver.find_element_by_id("password")
        password.send_keys("1231231231!!!")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks admin password if no numbers
        username = driver.find_element_by_id("username")
        username.send_keys("admin")
        password = driver.find_element_by_id("password")
        password.send_keys("qwertasdfg!!!")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks admin password if no special characters
        username = driver.find_element_by_id("username")
        username.send_keys("admin")
        password = driver.find_element_by_id("password")
        password.send_keys("qwertasdfg123")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checkes a normal user with correct password
        username = driver.find_element_by_id("username")
        username.send_keys("normal")
        password = driver.find_element_by_id("password")
        password.send_keys("password12")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks normal user password if no numbers and too short
        username = driver.find_element_by_id("username")
        username.send_keys("normal")
        password = driver.find_element_by_id("password")
        password.send_keys("passw")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks normal password if no numbers
        username = driver.find_element_by_id("username")
        username.send_keys("normal")
        password = driver.find_element_by_id("password")
        password.send_keys("passworder")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks normal password if no letters
        username = driver.find_element_by_id("username")
        username.send_keys("normal")
        password = driver.find_element_by_id("password")
        password.send_keys("1234567890")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        # Checks normal username is close to admin
        username = driver.find_element_by_id("username")
        username.send_keys("adminn")
        password = driver.find_element_by_id("password")
        password.send_keys("password1234!!!")
        submitbutton = driver.find_element_by_id("submitButton")
        submitbutton.send_keys(Keys.RETURN)
        time.sleep(3)
        
        # Checks URL to ensure its correct
        assert "https://ultranautstest.netlify.app/?" == driver.current_url
        
        logs = driver.get_log("browser")
        print(logs)

        #Closes teesting
    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()



