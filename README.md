# Social Network API
  
  ## Description
  This Social Network API was made with Node, Express, and Mongoose. It is a back-end application only. A link to a walkthrough video showing the functionality of the app has been provided in the Usage section.

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  1.) Clone the repo found at: https://github.com/mancillh/Social-Network-API. 
  2.) Run "npm i" in the terminal to install dependencies. 
 
  ## Usage
  1.) Run "npm start" and open the application in a program like Insomnia or Postman. 
  2.) All test routes are listed in the comments inside routes > api > thoughtRoutes.js or routes > api > userRoutes.js.

  The WalkThrough video may be accessed at the following URL: https://www.loom.com/share/39b17a2b38d846c9bb389417ec71dd55?sid=83e831f0-645b-47ee-8793-a41118340bc8
  
  EXAMPLES:
  You may go to: "/api/users" and GET all users or POST to create a new user:

      // example user
      {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
      }

  You may go to: "/api/users/:id" and GET a single user by its _id (and that user's thought and friend data), PUT to update a user by its _id, or DELETE to remove a user by its _id

  You may go to: "/api/users/:userId/friends/:friendId" and POST to add a new friend to a user's friend list or DELETE to remove a friend from a user's friend list.

  You may go to: "/api/thoughts" and GET to get all thoughts, POST to create a new thought 

  You may go to: "/api/thoughts/:thoughtId" and GET to get a single thought by its _id, , POST to create a new thought, PUT to update a thought by its _id (follow the "example thought" JSON below, just like for POST), or DELETE to remove a thought by its _id.

    // example thought
    {
      "thoughtText": "Here's a cool thought...",
      "username": "lernantino",
      "userId": "5edff358a0fcb779aa7b118b"
    }

  You may go to: "/api/thoughts/:thoughtId/reactions" and POST to create a reaction.

    // example reaction
    {
      "reactionBody": "That's a cool thought!",
      "username": "lernantino"
    }

  You may go to: "/api/thoughts/:thoughtId/reactions/:reactionId" and DELETE to remove a reaction.

  ## Credits
  N/A

  ## License
  This application is covered under the MIT license.

  ## Features
  N/A

  ## How to Contribute
  1.) Fork the repo at: https://github.com/mancillh/Social-Network-API 
  2.) Make and push changes.

  ## Tests
  N/A

  ## Questions
  My GitHub username: mancillh 

  My GitHub profile: https://github.com/mancillh 

  For additional questions, contact me at: mancillh@gmail.com