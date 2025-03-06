import { Given, When } from "cypress-cucumber-preprocessor/steps";
import productPage from "../pages/product.page";
import loginPage from "../pages/login.page";


Given   ("L'utilisateur est connecté", () => {
  cy.visit("https://www.saucedemo.com/");
  loginPage.login("standard_user", "secret_sauce");


})

Then("Chaque produit possède une image, un nom, une description et un prix", () => {
    cy.get("[data-test='inventory-item']").each(($el) => {
        cy.wrap($el).within(() => {
        productPage.verifiercontenudesproduit();
      });
    });
  });

When('Il accède à la page d accueil', () => {
    cy.get(".inventory_item").should('have.length.greaterThan', 1);
})

Then('La liste des produits s affiche', () => {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
})





