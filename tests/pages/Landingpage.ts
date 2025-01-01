import { Page } from "@playwright/test";

export class Landingpage {
  constructor(private page: Page) {}

  async launchApplication() {
     await this.page.goto("https://www.douglas.de/de", {waitUntil: 'load'});
   };

  async acceptCookies() {
      if(await this.page.getByTestId('uc-accept-all-button').isVisible()){
         await this.page.getByTestId('uc-accept-all-button').click();
      }
   };

  async navigateToProducts() {
     await this.page.waitForLoadState('load');
     await this.page.getByRole('link', { name: 'PARFUM' }).first().click();
     await this.page.getByRole('link', { name: 'PARFUM', exact: true }).click();
     // await this.page.locator(`//span[@data-testid='header-component-item--search']`).hover();
   };
}