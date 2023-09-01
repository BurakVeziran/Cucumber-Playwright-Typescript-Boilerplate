import { expect } from "@playwright/test";
export class HomePage {
  constructor() {
    global.logo = global.page.locator('img[alt="Google"]');
    global.searchButton = global.page.getByRole('button', { name: 'Google Search' });
    global.luckyButton = global.page.getByRole('button', { name: 'I\'m Feeling Lucky' });
  }
  public navigateToHomePage = async () => {
    await global.page.goto(global.BASE_URL);
    await global.page.waitForLoadState('networkidle')

  }

  public verifyButtonsAreVisible = async () => {
    await expect(global.logo).toBeVisible()
    await expect(global.searchButton).toBeVisible()
    await expect(global.luckyButton).toBeVisible()
  }
}

module.exports = { HomePage };