# Faire fonctionner le projet
Pour faire fonctionner le projet, il est nécessaire de faire la commande 'npm install'.

Ensuite, nous vous conseillons d'installer l'extention 'Live Server' sur VS Code. Faites un clique droit sur 'vue/covidInfo.html' et 'Open with live server'. Une fenêtre web s'ouvrira avec notre projet.

# Liste des fonctionnalités
Toutes les fontionnalités semblent fonctionner:
L'utilisateur peut selectionner un nombre de pays à afficher. X pays s'affichent dans une liste avec leur drapeau, nom, total de cas, décès lié au COVID et PIB.

Le traitement des données liées aux API marche bien. La reception de ces données ne marche pas toujours (voir 'Ce qui ne marche pas');

Ces données sont ensuites affichés dans le graphique.

# Ce qui ne marche pas
Les tries dans le tableau marchait dans une version antérieur mais ne marchent désormais plus.

Certaines API, surtout celles liées au PIB, ont deux défauts majeures :
* Manque de données : L'api pour les PIB ne possède qu'assez peu de pays comparés aux pays que l'on obtient avec countryISO.js Il manque aussi certains drapeaux.
* Nombre maximum d'appels aux API : L'api pib par exemple limite le nombre d'appels. Une fois ce nombre atteint une erreur 429 nous est retourné. Nous avons essayé de faire qu'un seul appel en mettant tous les pays dans les paramètres de l'URL sauf que si un seul des pays n'est pas repertiorié avec cette API alors aucune des données n'est retourné.