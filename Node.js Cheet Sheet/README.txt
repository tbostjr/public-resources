--THIS FILE SHOULD BE REPURPOSED OR REMOVED AFTER IMPLEMENTATION--

This file is a template for creating Node.js web applications with support for MySQL or Mongo NoSQL databases. 
The file structure will be built for you as far as it can be assumed.
Below are things that might be useful to you:

Variable Notes:
	1) app.yaml & data/cloud_sql_proxy.exe
		a) These files are for hosting through google using their App Engine service. If you do not wish to use their service, you can remove them. If you do want to use them, but are not sure how, there is a tutorial provided at {{YOUTUBE VIDEO LINK}}. 
	2) main.handlebars: 
		a) The commented out css link can be used if you want to apply separate styles per page. When rendering the page, send the name of the css file you want to use
		b) You will want to put your global navbar at the top of the body, as well as the footer at the bottom.
		c) A link for bootswatch in not included, however the route is provided through server.js in the static files section. If you would like to use a bootswatch, the path would look like: /bootswatch/STYLE-NAME/STYLE.css
	3) errors pages
		a) It is heavily recommended that you change these error pages to fit your needs. The code provided in them is for demonstation, not production purposes.
		b) It is also recommended that you use more than the provided error pages, as these do not cover all possible outcomes.
	4) images folder
		a) The images folder is not publicly hosted. If you would like for all files to be avaiable to users, just move the folder into public and remove the static route in server.js.
	5) pager-utils.js 
		a) This is a pre-built utility produced by Paul Smith from Ranken Technical College for implementing pagers for item lists. The partial has also been provided. To view a demonstraion of its implementation, go to https://youtu.be/YHS9f81ypw8
Shortcuts:
	'req' + tab: Will build out library require statements.

NPM Packages:
	npm i --save express express-handlebars debug dotenv config mysql knex lodash morgan bootstrap jquery bootswatch moment cookie-parser jsonwebtoken bcrypt mongodb @sendgrid/mail j

oi 


Extras:
	If you have any questions, suggestions, concerns, or comments, you can contact us at:
		Email: tj.brandon.leo@gmail.com
		Phone: (573) 326-4558


---- Created by Troy Bost JR of LEO Technologies ----