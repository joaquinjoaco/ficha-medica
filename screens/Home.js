import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AlertModal from "../components/AlertModal";
import FloatingHomeBtns from "../components/FloatingHomeBtns";
import Alergias from "../components/saved/Alergias";
import AntecedentesSaved from "../components/saved/AntecedentesSaved";
import EmergencyPhone from "../components/saved/EmergencyPhone";
import GroupInfo from "../components/saved/GroupInfo";
import PersonalInfo from "../components/saved/PersonalInfo";
import PrimaryInfo from "../components/saved/PrimaryInfo";
import TopBar from "../components/TopBar";

export default function Home({ navigation }) {

     const [isSaved, setIsSaved] = useState(false);

     return (

          <View style={styles.home}>
               <TopBar propNavigation={navigation} setIsSaved={setIsSaved} />
               {!isSaved && <AlertModal text="¡Ups! No has rellenado tu ficha médica." propNavigation={navigation} setIsSaved={setIsSaved} />}
               {isSaved &&
                    <ScrollView>
                         <PrimaryInfo />
                         <EmergencyPhone />
                         <Alergias />
                         <AntecedentesSaved />
                         <PersonalInfo />
                         <GroupInfo />
                    </ScrollView>
               }
               <FloatingHomeBtns propNavigation={navigation} />
          </View>
     );
}

const styles = StyleSheet.create({
     home: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
})
