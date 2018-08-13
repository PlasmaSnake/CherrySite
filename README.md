# CherrySite
A responsive website for my sister, a playwright in New York.

Project site using HTML, CSS and JS.

Uses Bootstrap 4 template for styling and MongoDB for data.

### Dependencies and packages used (npm install ...):
* express
* pug
* nodemon
* mongoose
* async

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
* type 'node populateEmail <mongodb-url-pw:port>' to insert dummy emails for testing.
* databaseTest - localhost:3000/emails : for all emails in list. 

#### Site Display:
* "npm start" in terminal - Runs main.js

Current Goal: Do the same thing for articles as done with emails (test input, database)

DATABASE: Input an email into the test database and retrieve the email. Then make it work for articles.
* POST data into mongodb url.
* GET data from mongodb url (Implemented as databaseTest)

WEBSITE DESIGN: Replace Logo. (Ask for Logo) | Format error page. | Add in works pages | Prevent Subscription input from inputting false emails.

Goals: 
1. Implement Media, put in photos and film. 
2. Implement Works, input data and test.
3. Better Calendar or Calendar page of events. (or omit completely)
4. In-app editor, for site admins to use to create, update and delete articles/media.
5. Test an article object from database and show it in index.pug
6. Use AJAX/Grails(Java) for avoiding refreshing the whole page upon post request.