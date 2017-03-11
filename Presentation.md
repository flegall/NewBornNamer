Prérequis : 
- Node 6
- react-native-cli installé en global
- flow-typed installé en global


Steps :
- Bootstrap du projet
  - react-native init NewBornNamer
  - cd NewBornNamer
  - react-native run-ios

- Add flow
  - yarn add -D flow-bin@0.38.0 (permet d'utiliser flow dans nuclide et d'utiliser la version de flow spécifiée)
  - flow-typed (permet de télécharger les définitions flow)
  - Ajouter scripts : "flow": "flow"
  - Lancer "flow" pour tester

- Transformer l'appli blanche en première page (sans les interactions ni la navigation)
  - Déplacer le code dans un fichier (src/NewBornNamer)
  - Mise en place du layout
  - Mise en place du styling

- Mise en place de la logique
  - Ajouter le state
  - Ajouter l'état initial (Ajouter la liste des prénoms)
  - Ajouter les listeners
  - Ajouter alert box, log ou debugguer

- Mise en place de la navigation
  - Ajouter StackNavigator
  - Ajouter composant ResultsScreen
  - Modifier composant principal pour ajouter navigationOptions

- Ajouter la logique dans le composant ResultsScreen
  - UI
  - Resultat
