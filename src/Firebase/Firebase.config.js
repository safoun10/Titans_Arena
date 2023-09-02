import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

console.log(import.meta.env.VITE_APIKEY);

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    // measurementId: import.meta.env.VITE_MEASUREMENTID // Corrected property name
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app