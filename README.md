This MERN chat app includes a room built for users to chat in a screen. 
Back-end:

The database is offered by MONGODB, server API by Nodejs/express and front end is powered by ReactJS.
Besides, Mongoose is used to connect to the mongodb for enabling real time chat post and get methods. Nodemon is used to ensure that the process reloads upon changes.

The API sevrver is built through Express.js. 
One of the interesting feature here was using PUSHER with the mongodb which fires off any changes in the (collection) database to the front end and makes mongo real-time.
It operated as:        Change in MongoDB -> FireChangeStream -> CallPusher ->Integrate in front end.

Front-end:
The UI is designed to look minimal and sleek with a UI of Whatsapp. The avatars appearing on the sidebar change on every reload by doing a Math.min() with an API number.
Axios is used to connect with the API endpoints to post message and detail request to the server. 
The state management is done through stateful hooks. 

Material UI is used as the styling framework in the app.
The base of layout is reliant on the CSS flexbox. 


It was a fine experience building the 1st MERN stack app.  
