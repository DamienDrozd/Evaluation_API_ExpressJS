# Evaluation_API_ExpressJS
évaluation du cours d'API en Express JS

------------------------------------------------------------

------------------------------------------------------------

## Liste des routes :
### Routes de connexion : 
- Login 
- Register Freelance
- Register Company
- Change Password
- Forgot password
- Delete_User

### Route Sans Connexion
- Get All Skills
- Get Skill
- Get All Jobs
- Get Job
### Route Freelance
- Voir les propositions
- Accepter une proposition 
- Refuser une proposition
- Change profile
- Forgot password

### Routes Company
- Filtre Freelance :
  - price_min
  - price_max
  - skills
  - experience_min
  - experience_max
- Recherche Freelance : 
  - keychain
  - nb_values
- Création de mission
- Proposition a un Freelance
- Delete mission
- Edit mission
### Route Admin
- List User
- Details User
- Edit User
- Delete User
- List Skills
- Details Skills
- Edit Skills
- Delete Skills
- List Jobs
- Details Jobs
- Edit Jobs
- Delete Jobs

------------------------------------------------------------

------------------------------------------------------------

## Modèles:
### Skills
- name - String
### Jobs
- name - String
### Mission
- date_start - Date
- date_end - Date
- price - Int
- title - String
- description - String
- job_key - key
- skill_keys - key_tab
- Proposition_Keys - key-tab
- status - String


### Proposition
- user
- status - String

------------------------------------------------------------


### User Account
- firstname - String
- lastname - String
- address - String
- city - String
- postcode - Int
- phone - String
- email - String 
- password - String
- isAdmin - Bool
- freelance_key - key
- company_key - key

### Freelance Account
- userId - Int
- price - Int
- experience_years - Int

### Company Account
- name - String
- Status - String
- Siret - Int
- address - String
- city - String
- postcode - Int
- mission_key - Key

------------------------------------------------------------

------------------------------------------------------------

## Fait
Création de l'app
Structure du code
Mongoose création
Linter 
Prettier
Build
écrire les requètes sur postman


## A faire
faire le schema bdd nosql
Structurer les routes
Faire les modeles
Remplir la base de données
Authentification + middleware auth
Création de l'aministrateur
middleware error handling
Envoi d'email au register (user et admin)
