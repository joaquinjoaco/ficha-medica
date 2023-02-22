import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AlertModal from "../components/AlertModal";
import FloatingHomeBtns from "../components/FloatingHomeBtns";
import Alergias from "../components/saved/Alergias";
import AntecedentesSaved from "../components/saved/AntecedentesSaved";
import EmergencyPhone from "../components/saved/EmergencyPhone";
import GroupInfo from "../components/saved/GroupInfo";
import PersonalInfo from "../components/saved/PersonalInfo";
import PrimaryInfo from "../components/saved/PrimaryInfo";
import TopBar from "../components/TopBar";
// import { auth } from "../firebase-config";


export default function Home({ navigation }) {

     const [isSaved, setIsSaved] = useState(false);
     // const data = getDataFromFirebase(); <---- custom hook, it should return the data :D
     const [data, setData] = useState({
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
     });


     // TODO: UPDATE FIREBASE TO VERSION 9
     // const fichasCollectionRef = collection(db, "fichas");

     // const setFicha = () => {
     //      if (auth.currentUser) {

     //      }
     // }

     // const handleSignOut = () => {
     //      auth
     //           .signOut()
     //           .then(() => {
     //                navigation.replace('Login');
     //           })
     //           .catch(error => alert(error.message))
     // }

     return (

          <View style={styles.home}>
               <TopBar propNavigation={navigation} setIsSaved={setIsSaved} data={data} setData={setData} />
               {!isSaved && <AlertModal text="¡Ups! No has rellenado tu ficha médica." propNavigation={navigation} setIsSaved={setIsSaved} data={data} setData={setData} />}
               {isSaved &&
                    <ScrollView>
                         <PrimaryInfo data={data} />
                         <EmergencyPhone data={data} />
                         <Alergias data={data} />
                         <AntecedentesSaved data={data} />
                         <PersonalInfo data={data} />
                         <GroupInfo data={data} />
                    </ScrollView>
               }
               <Text>{auth.currentUser?.email}</Text>
               <FloatingHomeBtns propNavigation={navigation} handleSignOut={handleSignOut} />
          </View>
     );
}

const styles = StyleSheet.create({
     home: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
})
