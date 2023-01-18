import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';

export default function TopBar({ propNavigation }) {
     return (
          <View style={styles.topBar}>
               <TouchableOpacity style={styles.editBtn}>
                    <Text style={[styles.editBtnText, globalStyles.regularText]}
                         onPress={() => propNavigation.navigate('Edit')}
                    >Editar ficha médica</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.qrBtn}>
                    <Text style={[styles.qrBtnText, globalStyles.regularText]}>Escanear QR</Text>
               </TouchableOpacity>
          </View>
     )
}

const styles = StyleSheet.create({
     topBar: {
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          height: 50,
          marginTop: 48,
          marginHorizontal: 16,
     },
     editBtn: {
          backgroundColor: '#0066CC',
          alignSelf: 'center',
          width: 180,
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     editBtnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
     qrBtn: {
          backgroundColor: '#000000',
          alignSelf: 'center',
          width: 190,
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     qrBtnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
});