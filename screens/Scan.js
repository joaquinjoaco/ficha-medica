import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ScanTopBar from '../components/ScanTopBar'
import UserQR from '../components/UserQR';
import FichaScanner from '../components/FichaScanner';

export default function Scan({ navigation, route }) {
     return (
          <View>
               <ScanTopBar propNavigation={navigation} isScanned={false} />
               <ScrollView>
                    <View style={styles.wrapper}>
                         {/* Camera */}
                         <FichaScanner propNavigation={navigation} />
                         {/* QR Code */}
                         <UserQR currentUser={route.params.currentUser} fullName={route.params.nombres + ' ' + route.params.apellidos} />
                    </View>
               </ScrollView >
          </View>
     )
}

const styles = StyleSheet.create({
     wrapper: {
          marginHorizontal: 16,
          marginTop: 32,
          marginBottom: 140,
     },
});