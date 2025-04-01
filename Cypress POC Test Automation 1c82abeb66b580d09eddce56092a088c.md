# Cypress POC Test Automation

# **Test Plan**

## **Objective**

The objective of this test plan is to perform test automation simulating a user flow into e-commerce platform.

The test plan will cover the scope:

- Visit website
- Select product
- Add product to cart
- Register user and perform login
- Account creation
- Place order
- Process payment
- Perform logout
- Submit form

## **Environment**

Browser: Chrome v134

Device: Desktop Windows 11

## **Tools**

- Test Automation Framework: Cypress v13.7.3
- Programming language: JavaScript
- Report: Latest version of Mochawesome
- Node v22.13.1
- Npm 10.9.2

## **Test Steps**

1. Enter the website and scroll down about halfway down the page.
2. Chose a product and click on “View product” under the picture of the product.
3. In the Quantity box enter 30
4. Click “Add to cart”
5. Click on “Proceed to Checkout”
6. Fill in an email address and click on “Register / Login”
7. Enter name and email under “New User Signup” and click on “Signup” button
8. Fill in all account information form and click on “Create Account” button
9. Click on “Continue” under “ACCOUNT CREATED!” title
10. Click on the Cart in the header
11. Click on “Proceed to checkout”
12. Add a comment and click on “Place Order”
13. Fill in fake Credit Card information and click on “Pay and Confirm Order”
14. Click on “Continue” button
15. Click on “Logout” on top header
16. On the “Login to your account” access, enter with previously created user
17. Click on “Contact us” on the header
18. Fill required data and Click on “Submit”
19. Press “OK” in the pop up
20. Click on the “Logout” button on the header.

## **Test Data**

In order to increase security and protect sensitive data, the following data is

mocked on the .json file into fixtures folder:

- User credentials
- User address
- Credit card information

## **Instructions**

**Clone the project and perform first run**

- Open the Command Prompt terminal, select the folder that will host the project and run the command to clone the project:

```jsx
**git clone [https://github.com/leofidelis11/cypress_ecommerce_E2E_test.git](https://github.com/leofidelis11/cypress_ecommerce_E2E_test.git%20#)**
```

- Run this command to navigate into the project directory:

```jsx
**cd.\cypress_ecommerce_E2E_test**
```

- Run this command to install Cypress:

```jsx
**npm install -D [cypress@13.7.3](mailto:cypress@13.7.3)**
```

- When installation finishes, run this command to open Cypress app:

```jsx
**npx cypress open**
```

- A Cypress window will open. Select E2E Testing option:

![image.png](image.png)

- Select the Chrome Browser and then click on ‘Start E2E Testing in Chrome’:

![image.png](image%201.png)

- A new window will open and click on ‘ecommerce.cy.js’:

![image.png](image%202.png)

- The E2E e-commerce user flow will run and pass:

![image.png](image%203.png)

**Optional:**

- To run Cypress in headless mode, run the command:

npx cypress run

## **Reporting**

- The report will be available on your project folder in html format. to open it on your browser you need to go to the source folder of your project and open the folder mochawesome-report:

![image.png](image%204.png)

- Then, you open the html file and the report will open on your browser:

![image.png](image%205.png)

![image.png](image%206.png)