import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';

export default function Grupo() {
     return (
          <View style={styles.container}>
               <View style={styles.title}>
                    <View style={styles.stepCircle}>
                         <Text style={[styles.step, globalStyles.boldText]}>2</Text>
                    </View>
                    <Text style={[styles.h1, globalStyles.boldText]}>Identificación de su grupo</Text>
               </View>
               <View style={styles.inputs}>
                    <View style={styles.inputColumn}>

                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Grupo</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Distrito</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>

                    </View>

                    <View style={styles.inputColumn}>

                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Responsable a cargo</Text>
                              <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Zona</Text>
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
          marginTop: 32,
     },

     title: {
          flexDirection: 'row',
     },
     step: {
          fontSize: 18,
          color: '#FFFFFF',
     },
     stepCircle: {
          backgroundColor: '#0066CC',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          width: 24,
          height: 24,
          marginRight: 8,
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
     },
     textInput: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 12,
          fontSize: 16,
     },

});