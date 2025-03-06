/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import productPage from "../pages/product.page";
import detaillePage from "../pages/detaille.page";
Then('je retrouve le produit avec sa description son prix son image dans le detaille prodiot', () => {

    let expectedPrice = Cypress.env("addedProductPrice");
    let expectedDesc = Cypress.env("addedProductDesc");
    let expectedImage = Cypress.env("addedProductimage");

    detaillePage.elements.detailleproductdesc()
        .invoke("text")
        .then((descText) => {
            cy.wrap(descText.trim()).should("equal", expectedDesc);
        });

    detaillePage.elements.detailleproductprice()
        .invoke("text")
        .then((priceText) => {
            cy.wrap(priceText.trim()).should("equal", expectedPrice);
        });

    detaillePage.elements.detailleproductimg()
        .invoke("attr", "src")
        .then((imageSrc) => {
            cy.wrap(imageSrc).should("equal", expectedImage);
        });
})
When('je clique sur un produit {string}', (produit) => {

    productPage.getProductDescription(produit).then((desc) => {
        Cypress.env("addedProductDesc", desc);
    });
    productPage.getProductPrice(produit).then((price) => {
        Cypress.env("addedProductPrice", price);
    });
    productPage.getProductImage(produit).then((image) => {
        Cypress.env("addedProductimage", image);
    }
    );
    productPage.cliquerSurProduit(produit);
})

Given('je suis sur la page produits&#39;', () => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.login("standard_user", "secret_sauce");
})

Then('je clique sur add to cart', () => {
    detaillePage.ajouterToCartButton()
})

Then('le button add cart  devient remove', () => {
    detaillePage.elements.retirerDuPanierBouton().should('be.visible')
})
let initialCartCount = 0;
Then('je recupere la valeur actuel de cart badge', () => {

    productPage.elements.cartIcon().invoke('text').then((text) => {
        initialCartCount = text ? parseInt(text, 10) : 0;
        cy.log(`Nouveau nombre dans le cart badge: ${initialCartCount}`);
    })
})

Then('le nombre du cart badge increment', () => {
    productPage.elements.cartIcon().invoke('text').then((newText) => {
        const newCartCount = parseInt(newText, 10);
        cy.wrap(newCartCount).should('equal', initialCartCount + 1);
    })
})

Then('je clique sur back to product', () => {
    detaillePage.allerAuInventaire()
})

Then('la page daccueil saffiche', () => {
    cy.url().should("include", "inventory")

})

Then('je clique sur le button remove', () => {
    detaillePage.retirerProduitDuPanier()
})
Then('le button remove  devient add ton cart', () => {
    detaillePage.elements.addToCartButton().should('be.visible')
})
Then('le nombre du cart badge decrement', () => {
    productPage.elements.cartIcon().invoke('text').then((newText) => {
        const newCartCount = newText ? parseInt(newText, 10) : 0;
        cy.wrap(newCartCount).should('equal', initialCartCount - 1);
    })
})
