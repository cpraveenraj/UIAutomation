import { test, expect, Page } from "@playwright/test";
import { Landingpage } from "../pages/Landingpage";
import { Perfumepage } from "../pages/Perfumepage";
import { filterData } from "../utils/data";

filterData.forEach((data) => {
  test(`Perfume filter test - Criteria: ${data.criteria}, Brand: ${data.marke}`, async ({ page }) => {
     const landingPage = new Landingpage(page);
     const perfumePage = new Perfumepage(page);

     // Step 1: Navigate to https://www.douglas.de/de
     await landingPage.launchApplication();

     // Step 2: Handle the cookie consent
      await landingPage.acceptCookies();

     // Step 3: Click on "Parfum"
     await landingPage.navigateToProducts();

     // Step 4: Apply filters based on data
     await perfumePage.selectCriteria(data.criteria);
     await perfumePage.selectBrand(data.marke);
    
     // vaidate brand details
     await perfumePage.getFilteredProductsByBrand(data.marke);

     // Apply filters based on data
     await perfumePage.selectOccasion(data.Geschenkfür);
     await perfumePage.selectGender(data.furWen);


     // filter by classification
     await perfumePage.selectclassification(data.produktart);

     // vaidate classification details
     await perfumePage.getFilteredProductsByClassification(data.produktart);

     
     // validate all matched products
     await perfumePage.verifyProductDisplay(data.product);

    });
});