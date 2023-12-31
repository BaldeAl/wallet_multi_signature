# Wallet Multi-Signature
Ce projet est une implémentation d'un wallet multi-signature. Un wallet multi-signature est un type de portefeuille numérique qui nécessite plusieurs approbations avant de pouvoir exécuter des transactions. 
Ce projet permet de gérer un wallet multi-signature pour deux personne .


## Création d'un Nouveau Wallet Multi-Signature
Pour créer un nouveau wallet multi-signature, vous devez déployer le smart contract . Ce processus est géré dans un dépôt Git séparé, spécifiquement conçu pour le développement et le déploiement de contrats Solidity avec Foundry.

## Référence du Dépôt de Contrat
Vous trouverez le code du contrat et les instructions de déploiement dans le dépôt suivant : https://github.com/BaldeAl/sharedwallet.

## Installation
### Pour cloner le repos en local 
``` 
git clone https://github.com/BaldeAl/wallet_multi_signature.git
```
```
cd wallet_multi_signature
```
### Télécharger les dépendences avec la commande suivante:
```
npm install
```
### Créer un fichier ".env" dans lequel vous mettrez les variables d'environnement suivantes:
```
ETHERSCAN_API_KEY = [Votre clé d'Api sur etherscan]
```
```
SHARED_ACCOUNT_ADDRESS = [L'addresse de votre contrat solidity qui a été deployé]
```
```
VITE_WALLET_ALCHEMY_API_KEY = [ Votre clé d'api alchemy ]
```
### Démarrer l'application avec la commande suivante :
```
npm run dev
```

## Caractéristiques du Contrat
### Gestion de Deux Utilisateurs : 
Actuellement, le contrat est conçu pour gérer un wallet multi-signature avec exactement deux utilisateurs. Cela signifie que la signature du second utilisateur requises pour toute transaction.
### Déploiement du Contrat : 
Suivez les instructions dans le dépôt Solidity/Foundry pour déployer un nouveau contrat de wallet multi-signature.
## Interaction avec le Wallet
Une fois le contrat déployé, vous pouvez interagir avec le wallet multi-signature via cette interface front-end. Utilisez l'adresse du contrat déployé pour connecter l'interface au wallet.

## Fonctionnalités Front-End
### Authentification:
Pour intéragir avec le wallet il faut forcement être connecté avec l'une des deux addresse spécifier dans le contrat au moment du déploiement 
### Soumission de Transactions : 
Proposez des transactions à partir du wallet en donnant le nombre d'ethers que l'on veut retirer et aussi spécifier l'addresse de destination.
### Approbation de Transactions : 
Chaque utilisateur peut approuver les transactions proposées par l'autre utilisateur et pas les tiennes.
### Depot  : 
Chaque utilisateur peut deposer de l'argent .
### Demo du frontend ↓


https://github.com/BaldeAl/wallet_multi_signature/assets/79581163/04e34ce8-5539-46a5-b0ed-da288a9699f2


## L'interface de l'application lorsqu'on est pas connecté
![image](https://github.com/BaldeAl/wallet_multi_signature/assets/79581163/de70023a-4ca3-416f-8043-3704f3ed6752)


## L'interface de l'application lorsqu'on est connecté avec l'un des compte spécifier sur le contrat
![Alt text](image.png)
## S'il y a des demande de retrait à approuver
![Alt text](image-1.png)
## S'il n'y a aucune demande en attente
![Alt text](image-2.png)




