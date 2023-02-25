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
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { getFicha } from "../firestoreService";

export default function Home({ navigation }) {

     const [isSaved, setIsSaved] = useState(false);
     // setData = getFicha(auth.currentUser.uid); <---- custom hook, it should return the data 
     // Ficha medica
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


     const handleSignOut = () => {
          signOut(auth)
               .then(() => {
                    navigation.replace('Login');
                    console.log("sign out successful");
               })
               .catch(error => alert(error.message))
     }

     const fichaGetTest = async () => {
          const datos = await getFicha(auth.currentUser.uid);
          console.log(datos);
     }

     return (
          <View style={styles.home}>
               <TopBar propNavigation={navigation} setIsSaved={setIsSaved} data={data} setData={setData} fichaGetTest={fichaGetTest} />
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
               <Text>{auth.currentUser?.uid}</Text>
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
