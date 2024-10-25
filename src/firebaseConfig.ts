import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Initialize Firebase

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
    hosting: {
    public: "dist",
    ignore: [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    rewrites: [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  database: {
    "rules": "database.rules.json"
  }
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  export default app;