# `Resume Uploader`

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)


<img src="https://github.com/user-attachments/assets/bf3b4ca4-613c-4ccc-8358-e81c23d8c542" height="350" >

* Developed a feature-rich Resume Uploader using the MERN stack (MongoDB, Express.js, Next.Js, Node.js)
* Developed a responsive platform accross all devices including mobiles & tablets.
* Enabled extensive user interaction .
* Leveraged Node.js, Express.js and other technologies for a robust and scalable backend foundation.
* Employed Redux Toolkit for efficient state management and data flow.

## Technologies
* React Js
* Bootstrap
* Redux Toolkit.
* Node JS., Express JS.
* Mongo DB
   
## Setup
1. Set up environment variables:
   - Create a `.env` file in the `client` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
     REACT_APP_URL="your backend URL"
     ```

   - Create a `.env` file in the `server` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
     PORT="port number on which you want to run" (default value "4000")
     MONGODB_URI="your_mongo_uri/database name"
     ```
2. Install dependencies and run server:
#### Frontend
```
 cd ../client
 npm install
 npm start
```
#### Backend
```
cd ../server
npm install
npm start
```

## API Endpoints

## API Endpoints

| Endpoint | Description | Method | Request Body | Response Format (Example) |
|----------|-------------|--------|--------------|----------------------------|
| `/` | Welcome message | GET | None | JSON (message: string) |
| `/resume` | upload resume details | POST | JSON | JSON |


