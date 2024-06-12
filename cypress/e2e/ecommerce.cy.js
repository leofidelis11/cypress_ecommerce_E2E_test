const { faker } = require('@faker-js/faker');

describe('Clothing Store User Flow', () => {

  let data;

  before(() => {
    cy.fixture('example').then((tData) => {
      data = tData;
    });
  });

  it('Perform clothing store user flow', () => {
    const email = faker.internet.email();
    
    //visit website
    cy.visit('https://automationexercise.com/');
    cy.get('a > img').should('be.visible');

    //scroll to center
    cy.scrollTo('center');

    //click on product
    cy.get('a[href="/product_details/24"]').click();

    //increase product quantity and add to cart
    cy.get('#quantity').clear().type('30');
    cy.get('#quantity').should('have.value','30');
    cy.get('button[type="button"]').click();
    cy.get('u').click();
 
    //proceed to checkout
    cy.get('.check_out').click();

    //register/login
    cy.get('u').contains('Register').click();
 
    //user sign up
    cy.get('[data-qa="signup-name"]').type('User Tester');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
 
    //account and address information
    cy.get('#id_gender2').click();
    cy.get('[data-qa="password"]').type(data.password);
    cy.get('[data-qa="days"]').select('5');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('2000');
 
    cy.get('#newsletter').click();
    cy.get('#optin').click();
 
    cy.get('#first_name').type(data.user_first_name);
    cy.get('#last_name').type(data.user_last_name);
    cy.get('#company').type(data.user_company);
    cy.get('#address1').type(data.user_address);
    cy.get('#country').select(data.user_country);
    cy.get('#state').type(data.user_state);
    cy.get('#city').type(data.user_city);
    cy.get('#zipcode').type(data.user_zipcode);
    cy.get('#mobile_number').type(data.user_phone);

    //click on create account button
    cy.get('[data-qa="create-account"]').click();
    cy.get('b').should('be.visible');
 
    //click on continue button
    cy.get('[data-qa="continue-button"]').click();
 
    //go to cart
    cy.get('li a[href*="view_cart"]').click();

    //click on checkout link
    cy.get('a').contains('Proceed To Checkout').click();
 
    //write a comment
    cy.get('.form-control').type('I am writing a comment');

    //click on payment button
    cy.get('div a[href*="payment"]').click();
 
    //fill card information, pay and confirm order
    cy.get('[data-qa="name-on-card"]').type(data.card_name);
    cy.get('[data-qa="card-number"]').type(data.card_number);
    cy.get('[data-qa="cvc"]').type(data.card_cvc);
    cy.get('[data-qa="expiry-month"]').type(data.card_exp_month);
    cy.get('[data-qa="expiry-year"]').type(data.card_exp_year);
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"] > b').should('be.visible');

    //click on continue button and go to home
    cy.get('[data-qa="continue-button"]').click();
    cy.get('a > img').should('be.visible');
 
    //click on logout link
    cy.get('[href="/logout"]').click();
 
    //perform login
    cy.get('[data-qa="login-email"]').type(data.email);
    cy.get('[data-qa="login-password"]').type(data.password);
    cy.get('[data-qa="login-button"]').click();
    cy.get('[href="/logout"]').should('be.visible');
    
    //click on contact us link
    cy.get('[href="/contact_us"]').click();
    cy.get('h2').contains('Contact').should('be.visible');
 
    //fill contact form and submit it
    cy.get('[data-qa="name"]').type(data.username);
    cy.get('[data-qa="email"]').type(data.email);
    cy.get('[data-qa="subject"]').type('My order');
    cy.get('[data-qa="message"]').type('This is my message to submit the form');
    cy.fixture('example.json').as('attachment')
    cy.get('input[name="upload_file"]')
      .selectFile('@attachment')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
      })
    cy.get('[data-qa="submit-button"]').click();
    cy.get('.status').should('be.visible')
 
    //click on logout link
    cy.get('[href="/logout"]').click();

    cy.get('[href="/login"]').should('be.visible');
  })
})