import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function EditTopBar({ step, setStep, propNavigation }) {
     return (
          <View style={styles.topBar}>
               <TouchableOpacity style={styles.editBtn} onPress={() => { step === 1 ? propNavigation.goBack() : setStep(step - 1) }}>
                    <Text style={[styles.editBtnText, globalStyles.regularText]}>{step === 1 ? "Volver" : "Cancelar"}</Text>
               </TouchableOpacity>


               <TouchableOpacity style={styles.qrBtn} onPress={() => { step === 5 ? propNavigation.goBack() : setStep(step + 1) }}>
                    <Text style={[styles.qrBtnText, globalStyles.regularText]}>{step === 5 ? "Guardar" : "Siguiente"}</Text>
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
          backgroundColor: '#000000',
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
          backgroundColor: '#0066CC',
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