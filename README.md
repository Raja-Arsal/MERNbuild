UPDATED:
This MERN chat app includes a room built for users to chat in a screen. 
For Back-end (inside back-end folder) use this to launch the server: nodemon server.js 
For front-end src(App.js) use this to launch front-end: npm start

** ** Back-end:
Database: MongoDB atlas is used to create the store of messages and made real time. The schema comprises of {name, messages, timestamp, received)

Expressjs: ExpressJS is used to create a server API. A post method API appends collection in DB (:9000/new/sync).
          Likewise, get method retrieves the posted data through above endpoint. (:9000/messages/sync). Some messages are already posted in DB for user to view upon launching app.
          
Mongoose: Used to connect with the DB and make it realtime through following functions:
           >  Change Stream: .watch() method to listen for changes   -->   Pusher: Responds to changes and triggers the front-end. Performs the functionality of socket.io. 
            
In first UseEffect (), the app uses axio.get(/messa...) to get the data from the API through server and store it. 
In the 2nd useEffect(), pusher is called and the retrieved data from API is added to pusher in realtime. 
        
Nodemon is used to ensure that the process reloads upon changes.

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
