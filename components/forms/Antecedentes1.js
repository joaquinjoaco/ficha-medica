import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../../styles/global';
import SwitchSelector from "react-native-switch-selector";

export default function Antecedentes({ newData, setNewData }) {



     return (
          <View style={styles.container}>
               <View style={styles.title}>
                    <View style={styles.stepCircle}>
                         <Text style={[styles.step, globalStyles.boldText]}>3</Text>
                    </View>
                    <Text style={[styles.h1, globalStyles.boldText]}>Antecedentes médicos</Text>
               </View>

               <View style={styles.inputs}>

                    <View style={styles.bloodType}>
                         <View style={styles.inputColumn}>
                              <View style={styles.input}>
                                   <Text style={[styles.labelText, globalStyles.boldText]}>Grupo sanguíneo</Text>
                                   <TextInput
                                        value={newData.grupoSanguineo}
                                        onChangeText={text => setNewData({ ...newData, grupoSanguineo: text })}
                                        style={[styles.textInput, globalStyles.boldText]}
                                        placeholder="A, B, O, AB" />
                              </View>
                         </View>

                    </View>

                    <View style={[styles.input, styles.alergiaInput]}>
                         <Text style={[styles.h2, globalStyles.boldText]}>Alergias</Text>
                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Antibióticos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Antibióticos</Text>

                                   <SwitchSelector
                                        // If antibioticos is true, then label "Si" will be already selected (e.g. when there is existing data)
                                        initial={newData.hasAntibioticos ? 0 : 1}
                                        textColor='#000000'
                                        selectedColor='#FFFFFF'
                                        buttonColor='#0066CC'
                                        borderColor='#0066CC'
                                        borderWidth={1.5}
                                        hasPadding
                                        valuePadding={1.5}
                                        options={[
                                             { label: "Si", value: true },
                                             { label: "No", value: false }
                                        ]}
                                        onPress={(value) => {
                                             // Clears the antibioticos array when pressing the opposite option
                                             { value === newData.hasAntibioticos ? null : setNewData({ ...newData, hasAntibioticos: value, antibioticos: ["Ninguno"] }) }
                                        }}
                                        style={{
                                             width: 90,
                                             justifyContent: "center",
                                             alignItems: "center",
                                        }}
                                        height={28}
                                        selectedTextStyle={globalStyles.semiBoldText}
                                   />

                              </View>
                              <View style={styles.bottom}>
                                   {newData.hasAntibioticos && <TextInput
                                        value={newData.antibioticos.toString()}
                                        onChangeText={text => { setNewData({ ...newData, antibioticos: text.split(',') }); console.log(newData.antibioticos) }}
                                        style={[styles.textInput, globalStyles.semiBoldText]}
                                        placeholder="Separados por comas (Penicilina, Amoxicilina...)" />}
                              </View>
                         </View>

                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Medicamentos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Medicamentos</Text>

                                   <SwitchSelector
                                        initial={newData.hasMedicamentos ? 0 : 1}
                                        textColor='#000000'
                                        selectedColor='#FFFFFF'
                                        buttonColor='#0066CC'
                                        borderColor='#0066CC'
                                        borderWidth={1.5}
                                        hasPadding
                                        valuePadding={1.5}
                                        options={[
                                             { label: "Si", value: true },
                                             { label: "No", value: false }
                                        ]}
                                        onPress={(value) => {
                                             { value === newData.hasMedicamentos ? null : setNewData({ ...newData, hasMedicamentos: value, medicamentos: ["Ninguno"] }) }
                                        }}
                                        style={{
                                             width: 90,
                                             justifyContent: "center",
                                             alignItems: "center",
                                        }}
                                        height={28}
                                        selectedTextStyle={globalStyles.semiBoldText}
                                   />

                              </View>
                              <View style={styles.bottom}>
                                   {newData.hasMedicamentos && <TextInput
                                        value={newData.medicamentos.toString()}
                                        onChangeText={text => setNewData({ ...newData, medicamentos: text.split(',') })}
                                        style={[styles.textInput, globalStyles.semiBoldText]}
                                        placeholder="Separado por comas (Aspirina, Omeprazol...)" />}
                              </View>
                         </View>

                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Alimentos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Alimentos</Text>

                                   <SwitchSelector
                                        initial={newData.hasAlimentos ? 0 : 1}
                                        textColor='#000000'
                                        selectedColor='#FFFFFF'
                                        buttonColor='#0066CC'
                                        borderColor='#0066CC'
                                        borderWidth={1.5}
                                        hasPadding
                                        valuePadding={1.5}
                                        options={[
                                             { label: "Si", value: true },
                                             { label: "No", value: false }
                                        ]}
                                        onPress={(value) => {
                                             { value === newData.hasAlimentos ? null : setNewData({ ...newData, hasAlimentos: value, alimentos: ["Ninguno"] }) }
                                        }}
                                        style={{
                                             width: 90,
                                             justifyContent: "center",
                                             alignItems: "center",
                                        }}
                                        height={28}
                                        selectedTextStyle={globalStyles.semiBoldText}
                                   />

                              </View>
                              <View style={styles.bottom}>
                                   {newData.hasAlimentos && <TextInput
                                        value={newData.alimentos.toString()}
                                        onChangeText={text => setNewData({ ...newData, alimentos: text.split(',') })}
                                        style={[styles.textInput, globalStyles.semiBoldText]}
                                        placeholder="Separado por comas (Nueces, Soja...)" />}
                              </View>
                         </View>

                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Animales y/o insectos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Animales y/o insectos</Text>

                                   <SwitchSelector
                                        initial={newData.hasAnimales ? 0 : 1}
                                        textColor='#000000'
                                        selectedColor='#FFFFFF'
                                        buttonColor='#0066CC'
                                        borderColor='#0066CC'
                                        borderWidth={1.5}
                                        hasPadding
                                        valuePadding={1.5}
                                        options={[
                                             { label: "Si", value: true },
                                             { label: "No", value: false }
                                        ]}
                                        onPress={(value) => {
                                             { value === newData.hasAnimales ? null : setNewData({ ...newData, hasAnimales: value, animales: ["Ninguno"] }) }
                                        }}
                                        style={{
                                             width: 90,
                                             justifyContent: "center",
                                             alignItems: "center",
                                        }}
                                        height={28}
                                        selectedTextStyle={globalStyles.semiBoldText}
                                   />

                              </View>
                              <View style={styles.bottom}>
                                   {newData.hasAnimales && <TextInput
                                        value={newData.animales.toString()}
                                        onChangeText={text => setNewData({ ...newData, animales: text.split(',') })}
                                        style={[styles.textInput, globalStyles.semiBoldText]}
                                        placeholder="Separado por comas (Aves, Gatos...)" />}
                              </View>
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