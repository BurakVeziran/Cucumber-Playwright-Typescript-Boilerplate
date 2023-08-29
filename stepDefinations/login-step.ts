const { Given, When , Then } = require('@cucumber/cucumber');
import { LoginPage } from '../pageObjects/login-page';

let page;

Given('I am on the login screen', async function() {
  this.page = page;
  const loginsPage = new LoginPage();
  await loginsPage.navigateToLoginScreen();
  await loginsPage.verifyLoginPageIsDisplayed();
});

When('I fill the login form with valid credentials', async function() {
  this.page = page;
  const loginsPage = new LoginPage();
  await loginsPage.submitLoginForm();
});

Then('I should be able to see the home screen', async function() {
  this.page = page;
  const loginsPage = new LoginPage();
  await loginsPage.verifyAfterLoginPage();
});