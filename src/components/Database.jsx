import React from "react";
import { db } from "./Firebase";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const Database = () => {
  // Create document and Collection
  const createCollectionandDoc = async () => {
    try {
      const docRef = await addDoc(collection(db, "avengers"), {
        first: "Nado",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //   createCollectionandDoc();

  //   Read document
  const readDocument = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users2"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // readDocument()

  // creates reference to the relative collection.
  // creates reference to the relative collection.
  const usersCollectionRef = collection(db, "users2");
  console.log(usersCollectionRef);

  // Add a new document with a specified ID, to collection "avengers"
  // Add a new document with a specified ID, to collection "avengers"
  // Note: when you use setDoc to create a document you must specify an id for the document to create.
  const addDataWithId = async () => {
    try {
      await setDoc(doc(db, "avengers", "Thatguy"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  //   addDataWithId();

  // Add a new document with with auto generated ID, to collection "avengers"
  // Add a new document with with auto generated ID, to collection "avengers"

  const addDataWithAutoId = async () => {
    try {
      await addDoc(collection(db, "avengers"), {
        name: "China Trump",
        state: "Bomba",
        country: "Rasta",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  //   addDataWithAutoId();

  // Update a document.

  const updateData = async () => {
    try {
      const washingtonRef = doc(db, "cities", "DC");

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        capital: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  updateData();

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Database;
