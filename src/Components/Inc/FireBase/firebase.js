import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyA_PUA3XF8DCF1pkZ5eedtIVpv4fjmayi8",
  authDomain: "profilleuploaderforlawcollege.firebaseapp.com",
  projectId: "profilleuploaderforlawcollege",
  storageBucket: "profilleuploaderforlawcollege.appspot.com",
  messagingSenderId: "41525562185",
  appId: "1:41525562185:web:e02ff58adaabc1b2a06898",
  measurementId: "G-M8LPL4M5P4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);