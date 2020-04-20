# TODO:
■ List of API with Keys Step by Step (File/line for API Key replacement)

# Short On Time
## Website:
https://short-on-time.herokuapp.com/

## Code Pattern and Style:
<p>Function: camelCase()
<p>Parameters: under_score
<p>Indentation: tabs

## Notes, Backlog, and More:
<p>Notes from initial meeting (02/18): https://docs.google.com/document/d/1CVeDTN6VOdUZ40mTscEKDfuYHaGvAXayfUZkCBnGxt0/edit
<p>Trello: https://trello.com/shortontime/home
<p>Invite Link to Trello: https://trello.com/invite/b/KGSu3zQH/95c28553101326c62bacbd52fafd02ea/user-stories

## Config File
<p>Backend: at config/config.js, with the Heroku URL to the MongoDB service.
<p>Frontend: at client/src/components/config.js, with Stripe key and localhost pory (for development purposes).

## Admin login credentials
<p>admin2@admin2.com, password: 123

## Environmental Variables
<p>Located at source root (.env), with SKIP_PREFLIGHT_CHECK=true, parameter to skip a mismatch of module versions.

# Routes
## Users
 - **POST** *users/signup* registers a new account
 - **POST** *users/signin* attempts to sign user in
 - **POST** *users/user_premium* TODO
 - **POST** *users/contact* TODO
 - **GET** *users/get_remedy_preview/:name* shows only pertinent remedy information
 - **GET** *users/get_remedy_preview* shows list of remedies
 - **GET** *users/get_remedy_full/:name* includes premium information
 - **GET** *users/get_remedy_full* includes premium information
 - **GET** *usesrs/get_glossary/:title* shows glossary item
 - **GET** *users/get_glossary* shows list of glossary items

## Admin
<ul>
  <li>POST users/signup</li>
  <li>POST users/signin</li>
	<li>POST users/user_premium</li>
</ul>

## Stripe
<ul>
  <li>POST users/signup</li>
  <li>POST users/signin</li>
	<li>POST users/user_premium</li>
</ul>

## Image
 - **POST** *image/add_image* adds a image + its name to the database
 - **GET** *image/get_image/:name* gets the image with the same name
 - **GET** *image/get_image* gets a list of image names + ids
 - **DELETE** *image/delete_image/:name* deletes the image with the same name
 - **GET** *image/load_image/:id* gets the image, or a default one

## Forum