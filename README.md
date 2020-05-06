<h1>Todo App</h1>
<p>
In this repo, I am had created the popular <a href="https://todoist.com">Todoist</a> application using <b>create-react-app</b> as a base from scratch using React (Custom Hooks, Context), Firebase & React Testing Library (unit & integration testing). In addition to the latter technologies, I had styled the application using SCSS (CSS) and following the BEM naming methodology and I had to make sure that the application is fully responsive.
</p>

<h2>Screenshot</h2>
<img src="./src/images/ss.png" style="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);" />

<h1>🛠 Installation & Set Up</h1>

#### 1. Install and use the correct version of Node

```
npm install
```

#### 2. Install dependencies

```
+ npm install --save-dev @testing-library/jest-dom

+ npm install --save-dev @testing-library/react

+ npm install @testing-library/user-event --save-dev

+ npm install --save firebase

+ npm install moment --save

+ npm install node-sass

+ npm install react react-dom

+ npm install react-icons --save
```

#### 3. Start the development server

```
npm start
```

# 🛠 Set Up for firebase

1. Create a Firebase project in the <a href="https://console.firebase.google.com/">Firebase console</a>, click Add project, then follow the on-screen instructions to create a Firebase project or to add Firebase services to an existing GCP project.

2) Navigate to the Database section of the Firebase console. You'll be prompted to select an existing Firebase project. Follow the database creation workflow.
3) Select a starting mode for your Firebase Security Rules:

   - Test mode

     Good for getting started with the mobile and web client libraries, but allows anyone to read and overwrite your data. After testing, **make sure to review the [Understand Firebase Realtime Database Rules](https://firebase.google.com/docs/database/security) section.**
     To get started with the web, iOS, or Android SDK, select test mode.


    - Locked mode

      Denies all reads and writes from mobile and web clients. Your authenticated application servers can still access your database.

4.  Click **Done**.

When you enable Realtime Database, it also enables the API in the [Cloud API Manager](https://console.cloud.google.com/projectselector/apis/api/firebasedatabase.googleapis.com/overview).

## Firebase config object

To initialize Firebase in your app, you need to provide your app's Firebase project configuration.

```
import  firebase  from  "firebase/app";
import  "firebase/firestore";

const  firebaseConfig = firebase.initializeApp({
apiKey:  "API-KEY",
authDomain:  ""project-id.firebaseapp.com"",
databaseURL:  "https://project-id.firebaseio.com",
projectId:  "project-id",
storageBucket:  "project-id.appspot.com",
messagingSenderId:  "sender-id",
appId:  "app-id",
measurementId:  "G-measurement-id",
});

export { firebaseConfig  as  firebase };
```

<br />

# #🚀HappyCoding
