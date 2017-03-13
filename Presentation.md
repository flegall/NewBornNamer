- Bootstrap du projet
  - react-native init NewBornNamer
  - cd NewBornNamer
  - react-native run-ios

- Add flow
  - yarn add -D flow-bin@0.38.0 (permet d'utiliser flow dans nuclide et d'utiliser la version de flow spécifiée)
  - npm install -g flow-typed
  - flow-typed install (permet de télécharger les définitions flow)
  - package.json: Ajouter script to run flow ("flow": "flow")
  - Lancer Flow pour tester: yarn run flow

- Refacto de l'app blanche pour factoriser le code iOS & Android
  - Créer src/NewBornNamer.js et copier le contenu du fichier index.ios.js dedans
  - Remplacer le contenu de index.ios.js et index.android.js par un require sur NewBornNamer.js (snippet: requireNewBornNamer)

- Transformer l'appli blanche en première page (sans les interactions ni la navigation)
  - Ajouter les 3 boutons (snippet: threeButtons), importer Button, et supprimer les styles inutiles ('welcome' & 'instructions')
  - Ajouter les onPress (snippet: onPressAlert), importer Alert
  - Mise en place du layout
    - Changer le justifyContent pour 'space-between' (snippet: space-between)
    - Ajouter le padding top & bottom (snippet: paddingTopAndBottom)
  - Mise en place du styling
    - Changer le backgroundColor pour 'lightpink' (snippet: lightpink)
    - Changer la couleur des 2 boutons correspondant aux prénoms pour darkviolet (snippet: colorDarkViolet)

- Mise en place de la logique de votes
  - Ajouter le state (snippet: state)
  - Variabiliser le title des boutons de prénoms (snippet: titleFirstname)
  - Ajouter l'état initial (snippet: firstNames + initialState)
  - Ajouter les listeners (snippet: listeners)
  - Modifier les listeners sur les boutons des prénoms par this.chooseA & this.chooseB
  - Modifier le listener sur le bouton de résultat pour afficher les votes (snippet: stringifyVotes)
  - Choisir de nouveaux prénoms aléatoirement après un vote
    - snippets: shuffleFirstnames
    - snippet: newFirstnames
    - yarn add lodash
    - snippet: lodashImport

- Mise en place de la navigation
  - Renommer le composant NewBornNamer par HomeScreen
  - Ajouter StackNavigator
    - snippet: stackNavigator + importStackNavigator
    - ajouter les navigationOptions au composant HomeScreen (snippet: navigationOptions)
  - Ajouter composant ResultsScreen
    - snippet: ResultsScreen
    - ajouter la route pour ResultsScreen (snippet: routeResults)
  - Ajouter le done listener (snippet: doneListener) et changer le onPress du bouton d'affichage du résultat

- Ajouter la logique dans le composant ResultsScreen
  - Ajouter les properties (snippet: propsResultsScreen)
  - Ré-écrire la méthode render (snippet: renderResultsScreen)
  - Ajouter le styling pour le texte du résultat (snippet: styleResult)
