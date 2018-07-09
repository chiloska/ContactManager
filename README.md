#CRM CRUD Angular C# API

This Project contains a CRUD Application to save Contacts.

The Aplication use C# .NET 4.6 for the Backend, connecting to local SQL DB

The front end was made with Angular 6 and MDL

Authentification is handled by Firebase using Email/Password and Google Strategies.

Firabase Config lives in the enviroment files, add data to use this project

The MVC Application read the js from the Boundle folder (See BoundleConfig.cs in App_Start)

angular.json has configured outh-path for ng build

Use ng build --prod --outh-path "../Boundle" for production


