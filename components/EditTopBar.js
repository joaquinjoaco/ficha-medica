import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { auth } from '../firebase-config';
import { editFicha } from '../firestoreService';
import { globalStyles } from '../styles/global';
import { validateData } from '../ValidateData';

export default function EditTopBar({ step, setStep, propNavigation, route, newData, showModalOnError }) {

     const save = () => {

          if (validateData(newData)) {
               // Update firestore with newData
               editFicha(auth.currentUser.uid, newData);
               // Set isSaved to true and and set the data to newdata and go back to the home screen. This still shows the serialization warning. 
               // used to set the data like this: 'setData(newData);' but new way still gives the same warning.
               route.params.setDataOnGoBack(newData);
               route.params.saveOnGoBack(true);
               propNavigation.goBack();
          } else {
               showModalOnError("Hay campos vacíos. \nPor favor revísalos.", "Entendido")
          }

     }

     return (
          <View style={styles.topBar}>
               {/* left button */}
               <TouchableOpacity style={styles.leftBtn}
                    onPress={() => {
                         step === 1 ? propNavigation.goBack() : setStep(step - 1);
                    }}>
                    <Text style={[styles.leftBtnText, globalStyles.regularText]}>{step === 1 ? "Cancelar" : "Volver"}</Text>
               </TouchableOpacity>

               {/* right button */}
               <TouchableOpacity style={styles.rightBtn}
                    onPress={() => {
                         step === 5 ? save() : setStep(step + 1);
                    }}>
                    <Text style={[styles.rightBtnText, globalStyles.regularText]}>{step === 5 ? "Guardar" : "Siguiente"}</Text>
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
     leftBtn: {
          backgroundColor: '#000000',
          alignSelf: 'center',
          width: 180,
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     leftBtnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
     rightBtn: {
          backgroundColor: '#0066CC',
          alignSelf: 'center',
          width: 190,
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     rightBtnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
});