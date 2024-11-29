# PEREIRA-ELENGA MAKOUALA Jordy - FAZER Nino


# CV Builder Back

Une application web permettant de créer, consulter, modifier et recommander des CVs pour les utilisateurs.

## Fonctionnalités

### 1. Authentification 🔐
- Inscription, connexion et déconnexion des utilisateurs.
- Stockage sécurisé des tokens d'authentification dans le `localStorage`.
- Hachage des mots de passe pour une meilleure sécurité.
- Validation des mots de passe :
  - Au moins **6 caractères**.
  - Contient au moins **une majuscule** et **un chiffre**.

---

### 2. Gestion des CV 📝
Pour les utilisateurs authentifiés :  

- **Création de CV** avec les informations suivantes :
  - Informations personnelles : **Prénom, Nom, Description.**
  - Sections additionnelles : 
    - Diplômes (titre, école, année).
    - Expériences professionnelles (poste, année de début/fin).
    - Missions (titre, description).
    - Certifications (nom, organisme, année).
    - Formations (nom, institution, année).
- **Modification et suppression** : gérez vos CV à tout moment.
- **Confidentialité des CV** : choisissez si votre CV est public ou privé.
- **Détails des CV publics** : consultez l'ensemble des informations d'un CV visible publiquement (diplômes, formations, expériences professionnelles, etc.).

---

### 3. Recommandations ⭐
- Ajoutez une recommandation **personnalisée** aux CV d'autres utilisateurs.
- Les recommandations sont visibles directement dans la section "Détails du CV".
- Supprimez une recommandation que vous avez reçue si besoin.


### 4. Recherche de CV 🔍
- Recherchez des CV visibles publiquement via une barre de recherche dynamique.
- La recherche est insensible à la casse (supporte majuscules/minuscules).

---

### 5. Modification de profil 👤
- **Mettez à jour vos informations personnelles :**
  - **Nom, Prénom et Email.**
- **Modification du mot de passe :**
  - Vérifiez si l'ancien mot de passe est correct avant d'en définir un nouveau.

---

## API
Afin de pouvoir tester vous-même l'api, vous vous dirigez vers ce [lien](https://cv-project-api.onrender.com/api-docs/).
Vous tomberez sur le **Swagger** qui permet de documenter toutes les API mais aussi de les tester.
![image](https://github.com/user-attachments/assets/283184be-b174-4012-bd94-01d15731b726)

Pour les tester, vous devez vous connecter grâce au login, ensuite vous recuperez le token de la reponse que vous collez dans le **Authorize**
![image](https://github.com/user-attachments/assets/4f42859e-e8bb-4335-8ad6-5859b45ea9c8)

Vous aurez maintenant accès à toutes les API.

---

## Technologies utilisées (Frontend) 💻

- Node.js : Environnement JavaScript côté serveur.
- Express.js : Framework pour la gestion des routes et middlewares.
- Mongoose : ODM pour MongoDB.
- JSON Web Tokens (JWT) : Pour l'authentification basée sur les tokens.
- bcrypt : Pour le hachage des mots de passe.
- CORS : Autorise les requêtes provenant d'autres origines.

## Outils 🔧
- Swagger UI : Documentation interactive de l'API.
- ESLint : Pour la qualité du code.
- Prettier : Formatage du code.
- Git : Versioning.

## Prérequis :
Liste des différentes technologies et outils :
- npm init
- npm i demon
- npm install --save-dev nodemon
- npm install mongoose
- npm i dotenv
- npm install jsonschema
- npm install bcrypt
- npm install jsonwebtoken
- npm install swagger-jsdoc
- npm install swagger-ui-express
- npm install cors
- npm install prettier --save-dev
- npm install eslint --save-dev
- npx eslint --init

## Installation et lancement du projet:
Suivez les étapes ci-dessous pour configurer et lancer le projet en local :

### Clonez le dépôt
git clone https://github.com/Jordy-6/CV-Project-back.git

### Accédez au répertoire du projet
cd CV-Project-back

### Installez les dépendances
npm install

### Lancez le serveur de développement en local
npm run dev

### Cliquez sur l'url qui vous sera indiqué
http://localhost:5173

## Déploiement 🌐
Le backend de cette application a été déployé sur Render, assurant une API accessible à tous pour une expérience utilisateur fluide.

URL de l'API : https://cv-project-api.onrender.com
Vous pouvez accéder à la documentation complète de l'API via Swagger :

Documentation API : [Swagger Documentation](https://cv-project-api.onrender.com/api-docs/)

## Frontend (React) 🚀
Le frontend de l'application est disponible sur un dépôt Git distinct mais aussi déployé sur ce [lien](https://cv-project-front.onrender.com/).

Lien vers le dépôt front : [https://github.com/nin-faz/CV-Project-Front.git](https://github.com/nin-faz/CV-Project-Front)
