import React from 'react'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC803hEdr3RkU84d52XZDp3L4DNtWcxu4s",
  authDomain: "bildad-phone-solutions.firebaseapp.com",
  projectId: "bildad-phone-solutions",
  storageBucket: "bildad-phone-solutions.firebasestorage.app",
  messagingSenderId: "197887806637",
  appId: "1:197887806637:web:795dd9e26557bc4bb44a24"
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>📱 Bildad Phone Solutions</h1>
      <h2>BPS Tracker Dashboard</h2>
      <p>Connected to Firebase successfully!</p>
    </div>
  )
}
