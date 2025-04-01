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
git clone https://github.com/leofidelis11/cypress_ecommerce_E2E_test.git
```

- Run this command to navigate into the project directory:

```jsx
cd.\cypress_ecommerce_E2E_test
```

- Run this command to install Cypress:

```jsx
npm install -D cypress@13.7.3
```

- When installation finishes, run this command to open Cypress app:

```jsx
npx cypress open
```

- A Cypress window will open. Select E2E Testing option:

![image](https://github.com/user-attachments/assets/cd285c07-2534-4d1c-bee6-2294d8c86e60)


- Select the Chrome Browser and then click on ‘Start E2E Testing in Chrome’:

![image 1](https://github.com/user-attachments/assets/f998a630-0268-4d37-a96a-a35981475d4f)

- A new window will open and click on ‘ecommerce.cy.js’:

![image 2](https://github.com/user-attachments/assets/a6981e97-ec12-4e18-a7fe-36a7bb0f0ce6)

- The E2E e-commerce user flow will run and pass:

![image 3](https://github.com/user-attachments/assets/ef82a5d5-b612-44c6-ba82-d2392cf65fb3)

**Optional:**

- To run Cypress in headless mode, run the command:

npx cypress run

## **Reporting**

- The report will be available on your project folder in html format. to open it on your browser you need to go to the source folder of your project and open the folder mochawesome-report:

![image 4](https://github.com/user-attachments/assets/92d211a7-82f0-403a-bcde-595aab64c51c)

- Then, you open the html file and the report will open on your browser:

![image 5](https://github.com/user-attachments/assets/ae49e40a-47ee-4345-9613-9a454d7daf1d)

![image 6](https://github.com/user-attachments/assets/e78583df-2340-497e-a9d5-9fd9a0eff257)
