import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../../styles/global';

export default function Antecedentes({ newData, setNewData }) {

     return (
          <View style={styles.container}>
               <View style={styles.title}>
                    <View style={styles.stepCircle}>
                         <Text style={[styles.step, globalStyles.boldText]}>4</Text>
                    </View>
                    <Text style={[styles.h1, globalStyles.boldText]}>Antecedentes médicos</Text>
               </View>

               <View style={styles.inputs}>
                    {/* Enfermedades e intervenciones textarea */}
                    <View style={styles.input}>
                         <Text style={[styles.h2, globalStyles.boldText]}>Antecedentes de enfermedades e intervenciones quirúrgicas anteriores de importancia:</Text>
                         <TextInput
                              value={newData.intervencionesField}
                              onChangeText={text => setNewData({ ...newData, intervencionesField: text })}
                              style={[styles.textArea, globalStyles.semiBoldText]}
                              multiline={true}
                              placeholder="..."
                         />
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
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          paddingVertical: 8,
          alignSelf: 'stretch',
          borderRadius: 10,
          marginBottom: 16,
     },
     bloodType: {
          flexDirection: 'row',
          marginBottom: 16,
     },
     inputColumn: {
          flex: 0.5,
     },
     input: {
          paddingHorizontal: 16,
          paddingVertical: 8,
     },
     alergiaInput: {
          marginBottom: 24,
     },
     labelText: {
          fontSize: 16,
     },
     textInput: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 12,
          fontSize: 16,
     },
     textArea: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          paddingVertical: 12,
          paddingHorizontal: 12,
          fontSize: 16,
          textAlignVertical: 'top',
          height: 125,
     },
     h2: {
          fontSize: 20,
          marginBottom: 16,
     },
     antecedenteContainer: {
          marginBottom: 16,
          alignSelf: 'stretch',
     },
     top: {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 4,
     },
     bottom: {
     },
     name: {
          fontSize: 16,
     },
     checks: {
          flexDirection: 'row',
     },
     check: {
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 8,
     },
     checkLabel: {
          fontSize: 16,
     },
     outerC: {
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 4,
          height: 12,
          width: 12,
          borderColor: '#000000',
          borderRadius: 100,
          borderWidth: 1,
     },
     innerC: {
          height: 5.8,
          width: 5.8,
          backgroundColor: '#000000',
          borderRadius: 100,
     },
     h2enfermedad: {
          fontSize: 18,
          flex: 0.9,
     },
});