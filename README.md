## API server and client app

In a sentence: It is an API server that logs actions committed to https://github.com/Eran-Levy-git/demo repository.

**Flow Chart Diagram:**

<img width="695" alt="Flow Chart Diagram - created using draw io" src="https://user-images.githubusercontent.com/74136274/144750472-e277b4f1-27db-4380-8ca7-b13e869c51cc.png">

**Specifications:**

Build with exspress js the API server receives notification from GitHub Webhook related to every pull request action that was
made on the repository.

I configure the URL for github webhook using ngrok so it needs to be updated every time rerunning the server.

The server Retrieves from the notification all of the pull request details and store it in mongoDB using mongoose.

Client-side grid lists all the pull requests details.

