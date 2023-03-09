# Tour Operations - Storing and Retrieving information of Travellers

This Projects aim to provide two API endpoints for storing and retrieving traveller data onto a database using express.js, node.js and mongoose.

## System Requirements

- [Node](https://nodejs.org/en/) (v10.16.3+)
- [NPM 5+](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)

## Local setup instructions

1. Clone this repo.
2. Change active directory to this new directory.
3. Run `npm install` to install all dependencies.
4. Create a MongoDB server and copy the connection string along with database-user password (Make sure to whitelist your IP address)
5. Create a copy of `.env.example` file, rename it to `.env` and replace the `DB_URI` value with your MongoDB connection string. Also if port `8080` is not available, you can replace `PORT` with any desired port number here
6. Run `npm run dev` to start the server
7. Congratulations! the server is live at http://localhost:8080. (Use the specified port number if you have changed it in `.env` file)
