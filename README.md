# W7D1 - In-Class Group Assignment - Secure Blog

## ( I was unable to finish. I got stuck on the password hashing step. I was able to hash the password before saving it to the database, but failed the password comparison in the login logic. I dont understand what i did wrong because when i try the hashing on a different file just using the password as a variable to hash it works when comparing. )

Exercise Worksheet: Secure Blog Platform

Introduction:
In this in-class exercise, you will build a secure blog platform using Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT). The application will allow users to register, log in, create posts, and delete their own posts. You will implement authentication and authorization features to ensure that only authenticated users can access certain functionalities.

Objectives:
- Understand the concepts of authentication and authorization in web applications.
- Implement user registration, login, post creation, and post deletion functionalities.
- Gain hands-on experience with Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT).

---

Part 1: Setting Up the Project

1. Fork the Repository:
   - Fork the starter code repository from [https://github.com/jtc21am/W7D1-secure-blog](https://github.com/jtc21am/W7D1-secure-blog) to your own GitHub account.

2. Clone the Repository:
   - Clone the forked repository to your local machine:
     ```
     git clone <repository-url>
     ```

3. Navigate to Project Directory:
   - Open your terminal and navigate to the cloned project directory.

4. Install Dependencies:
   - Install necessary dependencies using the provided `package.json` file:
     ```
     npm install
     ```

5. Project Structure:
   - Review the project structure and familiarize yourself with the file tree.

   secure-blog/
│
├── models/
│   └── user.js
│   └── post.js
│
├── routes/
│   └── auth.js
│   └── post.js
│   └── user.js
│
├── middleware/
│   └── auth.js
│
├── controllers/
│   └── auth.js
│   └── post.js
│   └── user.js
│
├── app.js
├── package.json
└── README.md


---

Part 2: Review User Model

1. Define / Change User Schema:
   - Open the `models/user.js` file.
   - Use the provided code sample to define the user schema with properties for `fullname`, `email`, and `password`.

2. Middleware for Password Hashing:
   - Implement pre-save middleware to hash the password before saving it to the database.
   - Refer to the provided code sample for guidance.

3. Method for Password Comparison:
   - Define a method to compare passwords for authentication.
   - Follow the provided code sample to implement this method.

---

Part 3: Implementing Authentication Routes

1. User Registration Route:
   - Open the `routes/auth.js` file.
   - Create a route for user registration using the provided code sample.
   - Implement logic to handle user registration, hash the password, and save the user to the database.

2. User Login Route:
   - Create a route for user login using the provided code sample.
   - Implement logic to verify user credentials, generate a JWT token upon successful login, and send it back to the client.

---

Part 4: Middleware for Authorization

1. JWT Token Verification Middleware:
   - Open the `middleware/auth.js` file.
   - Create middleware to verify JWT tokens.
   - Apply the middleware to routes that require authentication.

---

Part 5: Testing with Postman

1. Install Postman:
   - Install Postman on your computer if you haven't already done so.

2. Test Authentication Routes:
   - Use Postman to test the user registration and login routes.
   - Verify that JWT tokens are generated and sent back upon successful login.

3. Test Protected Routes:
   - Test routes that require authentication using Postman.
   - Verify that only authenticated users can access these routes.

---

Part 6: Installing MongoDB and Interacting with MongoDB

1. Install MongoDB:
   - Follow the provided instructions to install MongoDB on your machine.

2. Start MongoDB Server:
   - Start the MongoDB server by running `mongod` in your terminal.

3. Interact with MongoDB:
   - Use the MongoDB shell or MongoDB Compass to interact with MongoDB.
   - Verify data storage and retrieval by creating users and posts through the application.

---

Part 7: Testing and Exploring the Application

1. Test the API Endpoints: 
   - Using a tool like Postman or a web browser, send requests to the API endpoints to test the functionality. Start by testing the authentication routes such as user registration and login.

2. Register a New User:
   - Use the user registration endpoint to create a new user account. Provide a username, email, and password as part of the registration process.

3. Log In with the Registered User:
   - After registering a new user, log in with the credentials you just created using the login endpoint. Upon successful login, the server should respond with a JWT token.

4. Access Protected Routes:
   - With the JWT token obtained after successful login, access protected routes that require authentication. Test routes such as creating posts, deleting posts, or accessing user-specific data.

5. Test Error Handling:


   - Test error handling by intentionally sending invalid requests or incorrect credentials to the server. Observe how the server responds to different types of errors and ensure that appropriate error messages are returned.

6. Explore MongoDB Interaction:
   - Explore the interaction with MongoDB by checking the database to verify that user accounts and posts are being stored correctly. Use tools like the MongoDB shell or MongoDB Compass to view and manage the data.

7. Experiment with Additional Features:
   - Depending on the complexity of the project, experiment with adding additional features such as password reset, email verification, or role-based access control. Modify the existing codebase to implement these features and test their functionality.

8. Document Your Findings:
   - Document your testing process and observations. Note any issues encountered, successful tests, or areas for improvement. This documentation will help you understand the application better and can serve as a reference for future projects.
