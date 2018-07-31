# CherrySite
A website for my sister, a playwright in New York

Project site using HTML, CSS and JS.

Uses Bootstrap 4 template for styling and MongoDB for data.

### Dependencies and packages used (npm install ...):
* express
* pug
* nodemon
* mongoose

#### Everything below was installed through npm: express website skeleton creator (express [name] --view=pug)
* body-parser
* cookie-parser
* debug
* morgan
* serve-favicon

###### To update dependencies: 'npm outdated' and 'npm install package-name --save OR --save-dev'

### How to test...

#### Database:
* Install mongoose : https://www.npmjs.com/package/mongoose 
* Run cmd as administrator
* "cd %Mongo%" - Create a environmental variable to change directory to your MongoDB folder.
* "net start MongoDB" or "net stop MongoDB"

#### Site Display:
* "npm start" in terminal - Runs main.js


Current Goal: Input an email into the test database and retrieve the email. Then make it work for articles.