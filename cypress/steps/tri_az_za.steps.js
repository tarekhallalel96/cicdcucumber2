/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/login.page";
import productsPage from "../pages/product.page"; // Vérifie que l'import est correct


Given('L utilisateur est sur la page d accueil', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.visit("https://www.saucedemo.com/");
  loginPage.saisirUsername("standard_user");
  loginPage.saisirPassword("secret_sauce");
  loginPage.cliqueSurLoginButton();

})

When('Il selectionne {string} dans le menu de tri', (s) => {
  // Write code here that turns the phrase above into concrete actions
  productsPage.selectionnerTriPar(s); // Correctement utilisé
  cy.wait(1000);

   // Vérifier que la valeur sélectionnée est bien appliquée
   productsPage.verifierTriSelectionne(s);
})

Then('Les produits sont tries dans l ordre alphabetique', () => {
  // Write code here that turns the phrase above into concrete actions
  // Vérifier le tri alphabétique (A-Z)
  cy.get('.inventory_item_name').then((productNames) => {
    const productList = [...productNames].map(product => product.innerText);
    const sortedList = [...productList].sort();
    console.log("Liste récupérée :", productList);
    console.log("Liste attendue :", sortedList);

    expect(productList).to.deep.equal(sortedList);  s
})
})

Then('Les produits sont tries dans l ordre alphabetique inverse', () => {
 // Récupérer la liste des produits avant le tri
 cy.get('.inventory_item_name').then((productNames) => {
  const initialList = [...productNames].map(product => product.innerText.trim());

  // Créer une liste triée manuellement en ordre inverse (Z-A)
  const manuallyReversedList = [...initialList].sort((a, b) => b.localeCompare(a));

  // Appliquer le tri via 
  productsPage.selectionnerTriPar('za');

  // Attendre que le tri s'applique
  cy.wait(1000);

  // Récupérer la liste après tri
  cy.get('.inventory_item_name').then((sortedProductNames) => {
    const sortedList = [...sortedProductNames].map(product => product.innerText.trim());

    // Vérifier que la liste affichée correspond bien au tri manuel
    expect(sortedList).to.deep.equal(manuallyReversedList);
  });
  })
})