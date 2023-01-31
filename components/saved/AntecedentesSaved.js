import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';

export default function AntecedentesSaved() {
     return (
          <View>
               <View style={styles.container}>
                    <View style={styles.content}>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Enfermedades crónicas</Text>
                              <Text style={[styles.textInput, globalStyles.regularText]}>Ninguno</Text>
                         </View>
                         <View style={styles.spacer}></View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Tratamiento durante el evento</Text>
                              <Text style={[styles.textInput, globalStyles.regularText]}>Ninguno</Text>
                         </View>
                    </View>
               </View>

               <View style={styles.container}>
                    <View style={styles.content}>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Medicamentos que se encuentre tomando actualmente, cuales y horarios</Text>
                              <Text style={[styles.textInput, globalStyles.regularText]}>Ninguno</Text>
                         </View>
                    </View>
               </View>

               <View style={[styles.container, styles.aquaGreen]}>
                    <View style={styles.content}>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Antecedentes de enfermedades e intervenciones quirúrgicas anteriores de importancia</Text>
                              <Text style={[styles.textInput, globalStyles.regularText]}>Ninguno</Text>
                         </View>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({

     spacer: {
          paddingVertical: 8,
     },

     container: {
          marginTop: 16,
          marginHorizontal: 16,
          borderRadius: 5,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: '#FFFFFF',
          borderColor: '#EA3800',
          borderLeftWidth: 5,
     },

     content: {
          paddingVertical: 16,
     },

     input: {
          paddingHorizontal: 16,
     },
     labelText: {
          fontSize: 18,
          paddingBottom: 4,
     },
     textInput: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          padding: 8,
          paddingLeft: 16,
          fontSize: 18,
     },

     aquaGreen: {
          borderColor: '#137569',
     }
});