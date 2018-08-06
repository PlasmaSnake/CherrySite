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

#### Site Display:
* "npm start" in terminal - Runs main.js

Current Goal: Display emails on test page. Save emails via button on homepage.  

DATABASE: Input an email into the test database and retrieve the email. Then make it work for articles.
* POST data into mongodb url.
* GET data from mongodb url and render it into layout somehow. (Implement in controller, and use route as href in .pug but search for answer)

WEBSITE DESIGN: Replace Logo. (Ask for Logo) | Format error page. | Add in works pages

Goals: 
1. Implement Media, put in photos and film. 
2. Implement Works, input data and test.
3. Better Calendar or Calendar page of events. (or omit completely)
4. In-app editor, for site admins to use to create, update and delete articles/media.
5. Test an article object from database and show it in index.pug