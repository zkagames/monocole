import {initializeApp } from "firebase/app";
import { Firestore, getFirestore,  collection, getDocs, doc, deleteDoc, setDoc, updateDoc } from 'firebase/firestore/lite';
import { DailyEvent } from "../types";
import { sortBy } from "lodash";

const firebaseConfig = {
  apiKey: "AIzaSyCsvK3kWoDsZXeBbMd9dMbBYmyIYL5Hwoc",
  authDomain: "table-d5049.firebaseapp.com",
  projectId: "table-d5049",
  storageBucket: "table-d5049.appspot.com",
  messagingSenderId: "102109687578",
  appId: "1:102109687578:web:b4a51fef21c987a36c46a3"
};

const TABLE = 'events';

const Firebase = initializeApp(firebaseConfig);
export const db = getFirestore(Firebase);

export const API = {
  getEvents: async (db:Firestore, date:string)=>{
    const events = collection(db, TABLE);
    const eventsSnapshot = await getDocs(events);
    const allDailyEvents = eventsSnapshot.docs.map(doc => {
    return {...doc.data(), id:doc.id} as DailyEvent}
    ).filter(event=>event.date===date)

    return(sortBy(allDailyEvents,'time'))
  },

  getAllEvents: async (db:Firestore)=>{
    const events = collection(db, TABLE);
    const eventsSnapshot = await getDocs(events);
    const allDailyEvents = eventsSnapshot.docs.map(doc => {
    return {...doc.data(), id:doc.id} as DailyEvent}
    );

    return(sortBy(allDailyEvents,['date','time']))
  },

  deleteEvent: async (db:Firestore, row:DailyEvent)=>{
    await deleteDoc(doc(db, TABLE, String(row.id)));
  },

  addEvent: async(db:Firestore,  row:DailyEvent)=>{
    setDoc(doc(db, TABLE, row.id ), 
      row
    );
  },

  editEvent: async(db:Firestore,  row:DailyEvent)=>{
    updateDoc(doc(db, TABLE, row.id ), 
      row
    );
  }
}
