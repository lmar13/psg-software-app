# PgsSoftwareApp

Project was to develop small web application according to some provided pictures. I decided to use Angular to fullfill this requiremnts, because it is technology that I am developing myself at the moment. I also thought that it would be a great framework to deal with one page app requirements. I use some additional plugins like Angular Material to meet styling requirement.

In this project I wasn't provided with any images or logos so I use some sample one to show where I will put orginal pictures.

Application also provide small production server (node.js + express) to work as standalone application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8, using node 8.11.2 and npm 5.6.0.

## First step

To run application in production or development (I didn't block it because maybe it will be usefull for You), firstly You need to install all dependencies. Please go to Command Line or Terminal and go to folder with application. In root directory of application please run `npm install`. It will install all necesary dependencies and build project to provide dist folder. After successfull installation You can proceed with starting server. 

## Production server (recommended)

Run `npm start` for a production server. Navigate to address that is shown in console window. If you run it on Your local machine it will probably be http://localhost:3000/. 
I also deployed this app on Heroku so You can use this link https://pgs-software-app.herokuapp.com/ to see application is working on server. 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## GIT and Heroku repository for this application

Heroku: https://pgs-software-app.herokuapp.com/
GIT: https://github.com/lmar13/psg-software-app

### Error

Sometimes You can see error in console `Node / Express: EADDRINUSE, Address already in use`. That's mean that the port I provided can be occupied already. To deal with that error go to root folder and find `server.js` file. There go to line 16 and change number `3000` to another one for example `3001`. Save file and proceed to step run `Production server`.

