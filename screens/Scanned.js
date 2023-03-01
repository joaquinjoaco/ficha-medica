import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Alergias from "../components/saved/Alergias";
import AntecedentesSaved from "../components/saved/AntecedentesSaved";
import EmergencyPhone from "../components/saved/EmergencyPhone";
import GroupInfo from "../components/saved/GroupInfo";
import PersonalInfo from "../components/saved/PersonalInfo";
import PrimaryInfo from "../components/saved/PrimaryInfo";
import ScanTopBar from "../components/ScanTopBar";
import { auth } from "../firebase-config";
import { getFicha } from "../firestoreService";

export default function Scanned({ navigation, route }) {
     const [scannedData, setScannedData] = useState(null);

     const getDataFromFirebase = async () => {
          try {
               const ficha = await getFicha(route.params.uid);
               setScannedData(ficha);
          } catch (error) {
               console.log("Error: ", error);
               alert(error.message);
          }
     }

     useEffect(() => {
          getDataFromFirebase();
          console.log("Scanned.js UseEffect ran");
     }, []);

     if (!scannedData) {
          return (
               <Text>CARGANDO PLIS ESPERAR!!!</Text>
          )
     } else {
          return (
               <View style={styles.scanned}>
                    <ScanTopBar propNavigation={navigation} />
                    <ScrollView>
                         <PrimaryInfo data={scannedData} />
                         <EmergencyPhone data={scannedData} />
                         <Alergias data={scannedData} />
                         <AntecedentesSaved data={scannedData} />
                         <PersonalInfo data={scannedData} />
                         <GroupInfo data={scannedData} />
                    </ScrollView>
               </View>
          );
     }

}

const styles = StyleSheet.create({
     scanned: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
})
