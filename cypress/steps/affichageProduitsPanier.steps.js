/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";
import productPage from "../pages/product.page";
import cartPage from "../pages/cart.page";

Then('je retrouve le produit avec sa description dans le panier', () => {
    let descriptions = [];
    cartPage.elements.productsDescriptions().each((desc)=>{
        cy.wrap(desc).invoke("text").then((descText)=>{
            descriptions.push(descText);
        })
        
    });
    cy.wrap(descriptions).should("deep.equal", Cypress.env("addedProductDesc"));
     
})

When('je mets dans le panier les produits {string}', (s) => {
    let produits = s.split(",").map(element => element.trim());
    let descriptions =[];
    let priceList = [];
    produits.forEach(produit => {
        productPage.ajouterProduitAuPanier(produit.toLowerCase().replace(/\s+/g, "-"));
        productPage.getProductDescription(produit).then((desc)=>{
            descriptions.push(desc);
        });
        productPage.getProductPrice(produit).then((price)=>{
            priceList.push(price);
        });

    });
    Cypress.env("addedProductDesc",descriptions);
    Cypress.env("addedProductPrice",priceList);
    //cy.log(priceList);
})

Then('le produit contient un bouton Remove', () => {
    cartPage.elements.removeButton().should("have.length", Cypress.env("addedProductDesc").length)
})

Then('le produit contient un prix', () => {
    let priceList = [];
    cartPage.elements.productsPrice().each((price) => {
        cy.wrap(price).invoke("text").then((priceText)=>{
            priceList.push(priceText);
        })
    });

    cy.wrap(priceList).should("deep.equal",  Cypress.env("addedProductPrice",))
})








