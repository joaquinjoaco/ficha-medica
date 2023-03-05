import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import AlertErrorModal from "../components/AlertErrorModal";
import Alergias from "../components/saved/Alergias";
import AntecedentesSaved from "../components/saved/AntecedentesSaved";
import EmergencyPhone from "../components/saved/EmergencyPhone";
import GroupInfo from "../components/saved/GroupInfo";
import PersonalInfo from "../components/saved/PersonalInfo";
import PrimaryInfo from "../components/saved/PrimaryInfo";
import ScanTopBar from "../components/ScanTopBar";
import { translateError } from "../FirebaseErrorTranslation";
import { getFicha } from "../firestoreService";

export default function Scanned({ navigation, route }) {
     const [scannedData, setScannedData] = useState(null);

     // Modal
     const [showModal, setShowModal] = useState(false);
     const [message, setMessage] = useState("");
     const [buttonText, setButtonText] = useState("");

     const showModalOnError = (message, buttonText) => {
          setMessage(message);
          setButtonText(buttonText);
          setShowModal(true);
     }

     const getDataFromFirebase = async () => {
          try {
               const ficha = await getFicha(route.params.uid);
               setScannedData(ficha);
          } catch (error) {
               showModalOnError("Código inválido", "Volver");
               console.log("Código no válido ", error);
          }
     }

     useEffect(() => {
          getDataFromFirebase();
          console.log("Scanned.js UseEffect ran");
     }, []);

     if (!scannedData) {
          return (
               <>
                    <View style={styles.activityIndicator}>
                         <ActivityIndicator size={64} color="#0066CC" />
                    </View>
                    {showModal && <AlertErrorModal message={message} buttonText={buttonText} close={() => {
                         setShowModal(false);
                         navigation.goBack();
                    }} />}
               </>

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
     activityIndicator: {
          flex: 1,
          justifyContent: 'center',
     },
})
