import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { globalStyles } from '../styles/global';

export default function UserQR({ currentUser, fullName }) {
     return (
          <View style={styles.container}>
               <View style={styles.content}>
                    <Text style={[styles.qrText, globalStyles.regularText]}>Mi código</Text>
                    <QRCode
                         value={currentUser}
                         size={200}
                         color="black"
                         backgroundColor="#FFFFFF"
                    />
                    <Text style={[styles.nombre, globalStyles.boldText]}>{fullName !== "" ? "Sin nombre" : fullName}</Text>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
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

     // QR Code
     qrText: {
          fontSize: 24,
          marginBottom: 32,
          textAlign: 'center',
     },
     nombre: {
          marginTop: 16,
          fontSize: 28,
          textAlign: 'center',
     },
});