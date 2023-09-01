"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const homePage_1 = require("../pageObjects/homePage");
let page;
Given('I am on the home screen', async function () {
    this.page = page;
    const homePage = new homePage_1.HomePage();
    await homePage.navigateToHomePage();
});
Then('I should be able to see the home screen buttons', async function () {
    this.page = page;
    const homePage = new homePage_1.HomePage();
    await homePage.verifyButtonsAreVisible();
});
