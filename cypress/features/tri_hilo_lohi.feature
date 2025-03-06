Feature: Tri des produits par prix sur la page d'accueil

Scenario: L'utilisateur trie les produits par prix croissant
    Given L utilisateur est sur la page d accueil
    When Il sélectionne "lohi" dans le menu de tri
    Then Les produits sont tries du moins cher au plus cher

Scenario: L'utilisateur trie les produits par prix décroissant
    Given L utilisateur est sur la page d accueil
    When Il sélectionne "hilo" dans le menu de tri
    Then Les produits sont tries du plus cher au moins cher