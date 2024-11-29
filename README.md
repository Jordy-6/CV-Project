# CV Builder Back : PEREIRA-ELENGA MAKOUALA Jordy - FAZER Nino 

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

## Frontend 🚀
Le frontend de l'application est disponible sur un dépôt Git distinct mais aussi déployé sur ce [lien](https://cv-project-front.onrender.com/).

Lien vers le dépôt front : [https://github.com/nin-faz/CV-Project-Front.git](https://github.com/nin-faz/CV-Project-Front)
