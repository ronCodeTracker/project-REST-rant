




# Project REST-Rant

REST-Rant is an app where users can review restaurants.



| Method |      Path               |             Purpose                    |
|--------|-------------------------|----------------------------------------|
| GET    |     /                   |              Home Page                 |
| GET    |  /places                |        Places index page               |
| POST   |  /places                |        Create a new place              |
| GET    | /places/new             | Form page for creating new place       |
| GET    | /places/:id             | Details about a particular place       |
| PUT    | /places/:id             |   Update a particular place            |
| GET    |/places/:id/edit         |Form page for editing an existing place |
| DELETE | /places/:id             |   Delete a particular place            |
| POST   |/places/:id/rant         |   Create a comment about a place       |
| DELETE |/places/:id/rant/:rantId |   Delete a comment about a place       |
| GET    |        *                |  404 page  any route not defined       |

# Data and picture

<br>
<img height="500" src="https://github.com/ronCodeTracker/project-REST-rant/blob/main/gitHubMedia/drwOneHTML.drawio.png" />
</br>



|Place name  |  Place city  |  Place state  |  Place cuisines  | Picture  |
|------------|--------------|---------------|------------------|----------|

