"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const login_page_1 = require("../pageObjects/login-page");
let page;
Given('I am on the login screen', async function () {
    this.page = page;
    const loginsPage = new login_page_1.LoginPage();
    await loginsPage.navigateToLoginScreen();
    await loginsPage.verifyLoginPageIsDisplayed();
});
When('I fill the login form with valid credentials', async function () {
    this.page = page;
    const loginsPage = new login_page_1.LoginPage();
    await loginsPage.submitLoginForm();
});
Then('I should be able to see the home screen', async function () {
    this.page = page;
    const loginsPage = new login_page_1.LoginPage();
    await loginsPage.verifyAfterLoginPage();
});
