import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Initialize Firebase

const firebaseConfig = {
    "apiKey": "AIzaSyCI9ZAQGuJ0g5X8i1vG6Hj1nuu9598KTdA",
    "authDomain": "demomobileapplicationmodule4.firebaseapp.com",
    "projectId": "demomobileapplicationmodule4",
    "storageBucket": "demomobileapplicationmodule4.appspot.com",
    "messagingSenderId": "842122271990",
    "appId": "1:842122271990:web:53e417ad99a771b0b4e0d7",
    "measurementId": "G-R7XR0BVHRN",
    "hosting": {
      "public": "dist",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    },
    "database": {
      "rules": "database.rules.json"
    }
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  export { auth, analytics, app };
  export default app;