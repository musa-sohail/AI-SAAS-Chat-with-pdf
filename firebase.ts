import {getApps, getApp, initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB53Pm9FmuTkbs6V2BcH8yPdUPrW2Y1348",
  authDomain: "chat-with-pdf-921c3.firebaseapp.com",
  projectId: "chat-with-pdf-921c3",
  storageBucket: "chat-with-pdf-921c3.appspot.com",
  messagingSenderId: "206407779438",
  appId: "1:206407779438:web:0924bad02d7c5fbd17d27f"
};
const app = getApps().length===0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage=getStorage(app);
export {db, storage};