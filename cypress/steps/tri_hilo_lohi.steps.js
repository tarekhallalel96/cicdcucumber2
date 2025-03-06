/// <reference types="cypress" />

import loginPage from "../pages/login.page";
import productsPage from "../pages/product.page"; // Vérifie que l'import est correct


Given('L utilisateur est sur la page d accueil', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.visit("https://www.saucedemo.com/");
  loginPage.saisirUsername("standard_user");
  loginPage.saisirPassword("secret_sauce");
  loginPage.cliqueSurLoginButton();
  

})

When('Il sélectionne {string} dans le menu de tri', (s) => {
    // Write code here that turns the phrase above into concrete actions
    productsPage.selectionnerTriPar(s); // Correctement utilisé
  })
Then('Les produits sont tries du moins cher au plus cher', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.get('.inventory_item_price').then((productPrices) => {
    const priceList = [...productPrices].map(price => parseFloat(price.innerText.replace("$", "")));
    const sortedList = [...priceList].sort((a, b) => a - b);

    expect(priceList).to.deep.equal(sortedList);
})
})


Then('Les produits sont tries du plus cher au moins cher', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.get('.inventory_item_price').then((productPrices) => {
    const priceList = [...productPrices].map(price => parseFloat(price.innerText.replace("$", "")));
    const sortedList = [...priceList].sort((a, b) => b - a);

    expect(priceList).to.deep.equal(sortedList);
})
})

