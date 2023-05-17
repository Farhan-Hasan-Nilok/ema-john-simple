
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAff0Sr2HXnxqFdY7YdNa146KGZYcakPVg",
    authDomain: "ema-john-f4061.firebaseapp.com",
    projectId: "ema-john-f4061",
    storageBucket: "ema-john-f4061.appspot.com",
    messagingSenderId: "216731073377",
    appId: "1:216731073377:web:3195cf7012301e818e6320",
    measurementId: "G-8C6BGPSFBN"
};


const app = initializeApp(firebaseConfig);
export {app};
// const analytics = getAnalytics(app);