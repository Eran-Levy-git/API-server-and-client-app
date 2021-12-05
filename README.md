# API server and client app

API server that logs actions committed in https://github.com/Eran-Levy-git/demo repository.

The API server receives notification from GitHub Webhook related to every pull request action that was
made on the repository.

The server Retrieves from the notification all of the pull request details and store it in mongoDB.

Client-side grid lists all the pull requests details.
