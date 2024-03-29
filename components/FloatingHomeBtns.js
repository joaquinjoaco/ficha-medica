import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default function FloatingHomeBtns({ propNavigation, handleSignOut, nombres, apellidos, currentUser }) {
     return (
          <View style={styles.homeButtons}>
               <TouchableOpacity style={styles.btn} onPress={() => handleSignOut()}>
                    <MaterialCommunityIcons name="logout" size={25} color="white" />
               </TouchableOpacity>

               <TouchableOpacity style={[styles.btn, styles.btnQR]}
                    onPress={() => propNavigation.navigate('Scan',
                         {
                              nombres,
                              apellidos,
                              currentUser
                         }
                    )}>
                    <MaterialCommunityIcons name="qrcode-scan" size={25} color="white" />
               </TouchableOpacity>
          </View>
     )
}

const styles = StyleSheet.create({
     homeButtons: {
          flexDirection: 'column',
          position: 'absolute',
          bottom: 16,
          right: 16,
          height: 'auto',
          width: 'auto',
     },
     btn: {
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
          backgroundColor: '#000000',
          width: 50,
          height: 50,
     },
     btnQR: {
          marginTop: 8,
     },
})