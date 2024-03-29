import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
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
     const [data, setData] = useState(null);
     const [isSaved, setIsSaved] = useState(false);

     const getDataFromFirebase = async () => {
          try {
               const ficha = await getFicha(auth.currentUser.uid);
               setData(ficha);
               setIsSaved(ficha.isSaved);
          } catch (error) {
               console.log("Error: ", error);
               alert(error.message);
          }
     }

     useEffect(() => {
          getDataFromFirebase();
          console.log("Home.js UseEffect ran");
     }, []);

     const handleSignOut = () => {
          signOut(auth)
               .then(() => {
                    console.log("sign out successful");
               })
               .catch(error => alert(error.message))
     }

     if (!data) {
          return (
               <View style={styles.activityIndicator}>
                    <ActivityIndicator size={64} color="#0066CC" />
               </View>
          )
     } else {
          return (
               <View style={styles.home}>
                    <TopBar propNavigation={navigation} setIsSaved={setIsSaved} data={data} setData={setData} currentUser={auth.currentUser.uid} />
                    {
                         isSaved ?
                              <ScrollView>
                                   <PrimaryInfo data={data} />
                                   <EmergencyPhone data={data} />
                                   <Alergias data={data} />
                                   <AntecedentesSaved data={data} />
                                   <PersonalInfo data={data} />
                                   <GroupInfo data={data} />
                              </ScrollView>
                              :
                              <AlertModal text="¡Ups! No has rellenado tu ficha médica." propNavigation={navigation} setIsSaved={setIsSaved} data={data} setData={setData} />
                    }
                    <FloatingHomeBtns propNavigation={navigation} handleSignOut={handleSignOut} nombres={data.nombres} apellidos={data.apellidos} currentUser={auth.currentUser.uid} />

               </View>
          );
     }

}

const styles = StyleSheet.create({
     home: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
     activityIndicator: {
          flex: 1,
          justifyContent: 'center',
     },
})
