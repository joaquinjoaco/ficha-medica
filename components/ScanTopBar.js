import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';

export default function ScanTopBar({ propNavigation }) {
     return (
          <View style={styles.topBar}>
               <TouchableOpacity style={styles.volverBtn}
                    onPress={() => propNavigation.goBack()}>
                    <Text style={[styles.volverBtnText, globalStyles.regularText]}>Volver</Text>
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
     volverBtn: {
          backgroundColor: '#000000',
          alignSelf: 'center',
          width: '100%',
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     volverBtnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
});