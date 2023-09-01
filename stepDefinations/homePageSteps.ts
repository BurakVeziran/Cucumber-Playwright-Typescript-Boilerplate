const { Given, When , Then } = require('@cucumber/cucumber');
import { HomePage } from '../pageObjects/homePage';

let page;
Given('I am on the home screen', async function() {
  this.page = page;
  const homePage = new HomePage();
  await homePage.navigateToHomePage();
});

Then('I should be able to see the home screen buttons', async function() {
  this.page = page;
  const homePage = new HomePage();
  await homePage.verifyButtonsAreVisible();
});