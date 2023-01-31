import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';

export default function InfPersonal() {
     return (
          <View style={styles.container}>
               <Text style={[styles.h1, globalStyles.boldText]}>Información personal</Text>
               <View style={styles.inputs}>
                    <View style={styles.inputColumn}>

                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>RUN</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Apellidos</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Dirección</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Teléfono móvil</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Nombre médico</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Contacto de emergencia</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>

                    </View>

                    <View style={styles.inputColumn}>

                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Fecha de Nacimiento</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Nombres</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Teléfono fijo</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Sistema de medicina</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Teléfono médico</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>

                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          marginHorizontal: 16,
          marginTop: 48,
     },
     h1: {
          fontSize: 24,
          marginBottom: 6,
     },
     inputs: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          paddingVertical: 8,
          alignSelf: 'stretch',
          borderRadius: 10,
     },
     inputColumn: {
          flex: 1,
     },
     input: {
          paddingHorizontal: 16,
          paddingVertical: 8,
     },
     labelText: {
          fontSize: 16,
          paddingBottom: 2,
          paddingBottom: 2,
     },
     textInput: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 12,
          fontSize: 16,
     },

});