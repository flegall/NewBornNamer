TAA
- Bootstrap du projet
  - npm install -g react-native-cli
  - react-native init NewBornNamer
  - cd NewBornNamer
  - atom .
  - react-native run-ios
  - expliquer le code produit par la CLI

- Refacto de l'app blanche pour factoriser le code iOS & Android
  - Créer src/NewBornNamer.js et copier le contenu du fichier index.ios.js dedans
  - Remplacer le contenu de index.ios.js et index.android.js par un require sur NewBornNamer.js (snippet: requireNewBornNamer)

FLG
- Transformer l'appli blanche en première page (sans les interactions ni la navigation)
  - Ajouter les 3 boutons (snippet: threeButtons), importer Button, et supprimer les styles inutiles ('welcome' & 'instructions')
  - Ajouter les onPress (snippet: onPressAlert), importer Alert
  - Mise en place du layout
    - Changer le justifyContent pour 'space-between' (snippet: space-between)
    - Ajouter le padding top & bottom (snippet: paddingTopAndBottom)
  - Mise en place du styling
    - Changer le backgroundColor pour 'lightpink' (snippet: lightpink)
    - Changer la couleur des 2 boutons correspondant aux prénoms pour darkviolet (snippet: colorDarkViolet)

TAB
- Mise en place de la logique de votes
  - Ajouter le state (snippet: state)
  - Variabiliser le title des boutons de prénoms (snippet: titleFirstname)
  - Ajouter l'état initial (snippet: firstNames + initialState)
  - Ajouter le listener (snippet: listener)
  - Remplacer les Alert.alert sur les onPress des boutons des prénoms par this.chooseA() & this.chooseB()
  - Modifier le listener sur le bouton de résultat pour afficher les votes (snippet: stringifyVotes)
  - Choisir de nouveaux prénoms aléatoirement après un vote
    - snippets: shuffleFirstnames
    - snippet: newFirstnames
    - yarn add lodash
    - snippet: lodashImport

FLG
- Mise en place de la navigation
  - Renommer le composant NewBornNamer par HomeScreen
  - Ajouter StackNavigator
    - snippet: stackNavigator + importStackNavigator
    - ajouter les navigationOptions au composant HomeScreen (snippet: navigationOptions)
    - yarn add react-navigation
    - importer react-navigation
  - Ajouter composant ResultsScreen
    - snippet: ResultsScreen
    - ajouter la route pour ResultsScreen (snippet: routeResults)
  - Ajouter le done listener (snippet: doneListener) et changer le onPress du bouton d'affichage du résultat

- Ajouter la logique dans le composant ResultsScreen
  - Ré-écrire la méthode render (snippet: renderResultsScreen)
  - Ajouter le styling pour le texte du résultat (snippet: styleResult)
