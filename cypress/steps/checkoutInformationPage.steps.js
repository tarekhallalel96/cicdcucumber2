/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CheckoutInformationPage from "../pages/checkoutinformationpage.page"; 
import loginPage from "../pages/login.page";
import ProductsPage from "../pages/product.page"; 

Given('L utilisateur a des produits dans son panier', () => {
  cy.visit("https://www.saucedemo.com/");
  loginPage.login("standard_user", "secret_sauce");

  ProductsPage.ajouterProduitAuPanier("sauce-labs-backpack");
  ProductsPage.allerAuPanier();

})

When('Il clique sur {string}', (s) => {
  cy.contains(s).click();
})


When('Il saisit son prenom {string}, nom {string} et code postal {string} et clique sur continue', (firstName, lastName, postalCode) => {
  CheckoutInformationPage.completeCheckoutInformation(firstName, lastName, postalCode);
})


Then('Il passe a l etape suivante', () => {
  cy.url().should('include', '/checkout-step-two.html');
})




