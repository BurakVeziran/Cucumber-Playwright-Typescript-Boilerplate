"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const chai_1 = require("chai");
const locators = {
    "username_input": "#user-name",
    "password_input": "#password",
    "login_button": "#login-button",
    "inventory_container": "#inventory_container"
};
class LoginPage {
    navigateToLoginScreen = async () => {
        return await global.page.goto(global.BASE_URL);
    };
    async verifyLoginPageIsDisplayed() {
        return (0, chai_1.expect)(await global.page.title()).to.equal('Swag Labs');
    }
    async submitLoginForm() {
        const element = await global.page.waitForSelector(locators.username_input);
        await global.page.fill(locators.username_input, 'standard_user');
        await global.page.fill(locators.password_input, 'secret_sauce');
        await global.page.click(locators.login_button);
    }
    async verifyAfterLoginPage() {
        await global.page.waitForSelector(locators.inventory_container);
        const visible = await global.page.isVisible(locators.inventory_container);
        return (0, chai_1.expect)(visible).to.equal(true);
    }
}
exports.LoginPage = LoginPage;
module.exports = { LoginPage };
