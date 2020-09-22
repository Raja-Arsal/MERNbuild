# UPDATED:
This MERN chat app includes a room built for users to chat in a screen. 

## For Back-end (inside back-end folder) use this to launch the server: cd backend 
   ## nodemon server.js 
## For front-end src(App.js) use this to launch front-end: npm start

Once server connects, the stored (custom in DB) will be displayed and chat can be continued. 
**Back-end**:
## Database 
MongoDB atlas is used to create the store of messages and made real time. The schema comprises of {name, messages, timestamp, received)

## Expressjs 
ExpressJS is used to create a server API. A post method API appends collection in DB (:9000/new/sync).
Likewise, get method retrieves the posted data through above endpoint. (:9000/messages/sync). Some messages are already posted in DB for user to view upon launching app.
          
## Mongoose
Used to connect with the DB and make it realtime through following functions
           >  Change Stream: .watch() method to listen for changes   -->   Pusher: Responds to changes and triggers the front-end. **Used to perform the functionality of socket.io.**

## First UseEffect (), the app uses axios.get(/messa...) to get the data from the API routes through server and store it in state. 
## 2nd useEffect(), pusher is called and the retrieved data from API (stored in state) is appended to pusher in realtime. 
        
Nodemon is used to ensure that the process reloads upon changes.
cors() middleware is used to override browsers policy restrctions.

# Front-end:

## Axios
Responsible for trigerring server through API calls. A base URL instance is created (localhost:900), then get (.../sync) and post (.../messages) is used to append (axios.get) with the base URL. 

In the chatbox, the text is stored in a state and when submitted by user, axios posts the state to the database.  

## Material UI
The UI is designed to look minimal and sleek with a UI of Whatsapp. The avatars appearing on the sidebar change on every reload by doing a Math.min() with an API number.

## State Management

The state management is done through stateful hooks. 

The base of layout is reliant on the CSS flexbox. 


It was a fine experience building the 1st MERN stack app.  
