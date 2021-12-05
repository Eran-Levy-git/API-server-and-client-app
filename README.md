# API server and client app

API server that logs actions committed in https://github.com/Eran-Levy-git/demo repository.

(You can read the explanation or just look at the flow chart diagram)

API server and client app - Explained:
The API server receives notification from GitHub Webhook related to every pull request action that was
made on the repository.

The server Retrieves from the notification all of the pull request details and store it in mongoDB.

Client-side grid lists all the pull requests details.


Flow Chart Diagram:
<img width="704" alt="Screen Shot" src="https://user-images.githubusercontent.com/74136274/144747064-dfcc4584-e630-4aa3-81e4-f8399b7e43b2.png">
