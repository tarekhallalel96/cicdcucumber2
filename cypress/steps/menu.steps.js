import { And, Given, When } from "cypress-cucumber-preprocessor/steps";

import productPage from "../pages/product.page";
import menuPage from "../pages/menu.page";

When('je clique sur le menu', () => {
    menuPage.clickSurMenuButton();
})

Then('le menu est affiche', () => {
    menuPage.elements.logOut().should("exist");
})

When('je clique sur le bouton All Items', () => {
    menuPage.clickAllItem();
})

When('je clique sur le bouton Reset App State', () => {
    menuPage.clickResstAppState();
})

When('je clique sur le bouton Logout', () => {
    menuPage.clickLogOut();
})

When('je clique sur le bouton About', () => {
    menuPage.clickAboutBouton();
})

Then('la page produits est affichee', () => {
    productPage.elements.pageTitle().should("exist");
})

Then('la page about est affichee', () => {
    cy.get("button").contains("Test it all. Free").should("be.visible");
})


Then('le nombre des produits dans le panier est reinitialise', () => {
    productPage.elements.cartNumbre().should('not.exist');
})

Then('les boutons Remove sont reinitialises', () => {
    productPage.elements.removeButtons().should("have.length", 0);
})

