/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/login.page";
import aboutPage from "../pages/about.page"; // Nouvelle page About

Given('L utilisateur est sur la page d accueil', () => {
  cy.visit("https://www.saucedemo.com/");
  loginPage.saisirUsername("standard_user");
  loginPage.saisirPassword("secret_sauce");
  loginPage.cliqueSurLoginButton();
});

When('Il clique sur le lien {string}', (linkText) => {
  cy.get("#react-burger-menu-btn").click(); // Ouvre le menu
  cy.contains(linkText).click(); // Clique sur le lien "About"
});

Then('Il est redirigé vers la page About', () => {
  cy.url().should("include", "/about"); // Vérifie l'URL
});

Then('Le contenu de la page About est affiché correctement', () => {
  aboutPage.verifierContenuAffiche();
});
