# ultranauts test 

Instruction:
===============================================================
*TESTING* Run test framework:
Local machine ensure python 3 is installed:
https://www.python.org/downloads/

Install Selenium
https://pythonspot.com/selenium-install/

Download chrome driver and unzip locally
https://sites.google.com/a/chromium.org/chromedriver/downloads

Within file ultrtest.py find line with and replace path in paranthese to local machine location from chrome driver
self.driver = webdriver.Chrome('/your/local/path/chromedriver')

*TERMINAL RUN*
cd into ultranautstest folder run python file
$ python3 Ultratest.py 
=============================================================== 

*APPLICATION WEB ADDRESS* This is the hosted web based version of app
https://ultranautstest.netlify.app/

===============================================================

Instructions for running app locally:
*GIT HUB Clone main branch*
 https://github.com/cbw29512/ultratest.git

Open in Visual Studio Basics

install Extension Live server 

Bottom right of tool bar click "Go Live"
===============================================================

Each interaction is saved on the main GitHub branch under these branches:
iteration1
iteration2
iteration3
iteration4
===============================================================

Instructions | Password Coding Simulation
Instructions
Create a tool that verifies the strength of a password (see Details below).
You may use whatever programming language you are comfortable with, but Java is the
preferred language if possible. Additionally, use Git (https://git-scm.com/) for source control for this exercise.

Deliverables
The Git repository containing all other deliverables for the project.

The source code for the project. Depending on which language you choose and how you design the tool, there may be compiled executables or other kinds of software artifacts but we must be able to see and assess the source code that created it.

A test framework for the project. In addition to helping you ensure that your tool meets the specifications provided, a test framework will allow us to see your code in action more easily than manually executing and inspecting every bit of it.

A README or other document containing instructions on building/running your application/tests.Your hypothetical co-workers (who may be the ones reviewing this exercise) may not be as familiar with the language or frameworks that you have chosen to use for this project. Any needed setup instructions for running your code (e.g. any additional code libraries to install, commands to execute, etc.) should be included in this document, along with any other significant information you would like to include.

Also, please document any significant design decisions or assumptions made during the exercise, either in the relevant spot in the code itself or as a separate document in the repository.


Details
The tool does not need to be any more complicated than a few classes or methods but it will
need to be tested and the requirements will change several times over the course of the
exercise (be sure to commit your code at least once per iteration so that the evolution of the
code can be seen).

Iteration 1
The tool should verify if a password meets the requirements for a strong password
• The password must be at least 8 characters in length
• The password must contain at least 1 letter
• The password must contain at least 1 number

Data provided: “password123”
Expected behavior: The password is accepted

Data provided: “12345”
Expected behavior: The password is not accepted

Iteration 2
Instead of just rejecting a password, the tool needs to indicate why the password is not acceptable.

Data provided: “12345”
Expected behavior: The tool indicates that the password is not long enough and that the password does not include a letter.

Iteration 3
The tool must now take into account the type of user that a password is for. Admin users require a stronger password than regular users.

Passwords for Admin users must be at least 13 characters in length

Passwords for Admin users must contain a special character ('!', '@', '#', '$', '%', '^', '&', or '*')

The password requirements for regular users are unchanged

Data provided: “password123” and “normal”
Expected behavior: The password is accepted

Data provided: “password123” and “admin”
Expected behavior: The password is not accepted

Data provided: “password1234!” and “admin”
Expected behavior: The password is accepted

Iteration 4
The password requirements for all users have become more strict:

Passwords for regular users must now be at least 10 characters in length

Passwords for Admin users must now include at least 3 special characters
