import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
// TODO: MOVE LOGIN AND LOGOUT AND REGISTER TO THIS FILE
// fichas medicas db ref 
const fichasCollectionRef = collection(db, "fichas");

// data
const data = {
     // isSaved, will be false for the first time until the users saves its data for the first time
     isSaved: false,
     // (1) Personal Info
     run: 0,
     apellidos: "",
     direccion: "",
     telMovil: "",
     nombreMedico: "",
     contactoEmergencia: "",
     fechaNac: "",
     nombres: "",
     telFijo: "",
     sistemaMedicina: "",
     telMedico: "",
     // (2) Group Info
     grupo: "",
     distrito: "",
     responsable: "",
     zona: "",
     // (3) Antecedentes TODO: add the switches with their corresponding data
     grupoSanguineo: "",

     hasAntibioticos: false,
     hasMedicamentos: false,
     hasAlimentos: false,
     hasAnimales: false,

     antibioticos: [],
     medicamentos: [],
     alimentos: [],
     animales: [],
     // (4) Antecedentes
     intervencionesField: "",
     // (5) Antecedentes TODO: enfermedad cronica switch
     hasEnfermedad: false,
     enfermedad: "",
     tratamientoField: "",
     medicamentosField: "",
}

// Gets the ficha document with the matching signed in user uid
export const getFicha = async (userUid) => {
     const fichaDocRef = doc(db, "fichas", userUid);
     try {
          if (userUid) {
               // User is signed in
               const doc = await getDoc(fichaDocRef);
               return doc.data();
          } else {
               // User is not signed in
               return null;
          }
     } catch (error) {
          console.log(error);
     }
}

// Adds a new ficha document in the collection, will be called when the user registers for the first time
export const setUpFichaFirstTime = async (userUid) => {
     try {
          if (userUid) {
               // User is signed in
               await setDoc(doc(fichasCollectionRef, userUid), { ...data });
               console.log("New document written with corresponding user id:", userUid);
          } else {
               console.log("User is not signed in");
          }
     }
     catch (error) {
          console.log(error);
     }
}

export const editFicha = async (userUid, newData) => {
     try {
          await updateDoc(doc(fichasCollectionRef, userUid), { ...newData, isSaved: true });
     }
     catch (error) {
          () => {
               error => alert(error.message);
          }

     }
}