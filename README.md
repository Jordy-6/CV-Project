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

## Frontend 🚀
Le frontend de l'application est disponible sur un dépôt Git distinct.

Lien vers le dépôt backend : [https://github.com/Jordy-6/CV-Project-back.git](https://github.com/nin-faz/CV-Project-Front)
