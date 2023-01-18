import { StyleSheet, View } from "react-native";
import AlertModal from "../components/AlertModal";
import FloatingHomeBtns from "../components/FloatingHomeBtns";
import TopBar from "../components/TopBar";

export default function Home({ navigation }) {

     return (

          <View style={styles.home}>
               <TopBar propNavigation={navigation} />
               <AlertModal text="¡Ups! No has rellenado tu ficha médica." propNavigation={navigation} />
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
