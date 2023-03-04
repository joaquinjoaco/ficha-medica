import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { globalStyles } from '../styles/global';

export default function FichaScanner({ propNavigation }) {
     const [hasPermission, setHasPermission] = useState(null);
     const [scanned, setScanned] = useState(false);

     const askForCameraPermission = () => {
          (async () => {
               const { status } = await BarCodeScanner.requestPermissionsAsync();
               setHasPermission(status === 'granted');
          })()
     }

     // Request Camera Permission
     useEffect(() => {
          askForCameraPermission();
     }, []);

     // User will be shown the scanned data (ficha)
     const handleBarCodeScanned = ({ data }) => {
          setScanned(true);
          console.log('Scanned: ' + data);
          propNavigation.replace('Scanned', { uid: data });
     };


     // Check permissions and return the corresponding screens
     if (hasPermission === null) {
          return (
               <View style={styles.container}>
                    <View style={styles.content}>
                         <Text style={[styles.permissionText, globalStyles.semiBoldText]}>Solicitando permiso para usar la cámara</Text>
                    </View>
               </View>
          )
     }

     if (hasPermission === false) {
          return (
               <View style={styles.container}>
                    <View style={styles.content}>
                         <Text style={[styles.permissionText, globalStyles.semiBoldText]}>Sin acceso a la cámara</Text>
                         <TouchableOpacity style={styles.btn} onPress={() => askForCameraPermission()}>
                              <Text style={[styles.btnText, globalStyles.regularText]}>Solicitar permiso</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          )
     }

     // Return the View
     return (
          <View style={styles.container}>
               <View style={styles.content}>
                    <View style={styles.barcodebox}>
                         <BarCodeScanner
                              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                              style={{ height: 800, width: 800 }} />
                    </View>
               </View>
          </View>
     );
}




const styles = StyleSheet.create({

     barcodebox: {
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          height: 340,
          width: 'auto',
          overflow: 'hidden',
          borderRadius: 10,
          backgroundColor: '#F2F3F4'
     },

     container: {
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          alignSelf: 'stretch',
          borderRadius: 10,
          marginBottom: 16,
     },

     content: {
          alignItems: 'center',
          paddingHorizontal: 32,
          paddingVertical: 32,
     },

     permissionText: {
          fontSize: 24,
          textAlign: 'center',
     },

     btn: {
          backgroundColor: '#0066CC',
          marginTop: 16,
          alignSelf: 'center',
          width: 'auto',
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },

     btnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     }
});