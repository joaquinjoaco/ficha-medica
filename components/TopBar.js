import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';

export default function TopBar({ propNavigation, setIsSaved, data, setData, currentUser }) {
     return (
          <View style={styles.topBar}>
               {/* Editar ficha */}
               <TouchableOpacity style={styles.editBtn}
                    onPress={() => propNavigation.navigate('Edit',
                         {
                              data,
                              setDataOnGoBack: (value) => setData(value),
                              saveOnGoBack: (value) => setIsSaved(value)
                         }
                    )}>
                    <Text style={[styles.editBtnText, globalStyles.regularText]}>Editar ficha médica</Text>
               </TouchableOpacity>

               {/* Escanear ficha */}
               <TouchableOpacity style={styles.scanBtn}
                    onPress={() => propNavigation.navigate('Scan', { nombres: data.nombres, apellidos: data.apellidos, currentUser })}>
                    <Text style={[styles.scanBtnText, globalStyles.regularText]}>Escanear QR</Text>
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
     scanBtn: {
          backgroundColor: '#000000',
          alignSelf: 'center',
          width: 190,
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     scanBtnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
});