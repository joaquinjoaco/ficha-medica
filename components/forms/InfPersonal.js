import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';

export default function InfPersonal({ newData, setNewData }) {
     return (
          <View style={styles.container}>
               <View style={styles.title}>
                    <View style={styles.stepCircle}>
                         <Text style={[styles.step, globalStyles.boldText]}>1</Text>
                    </View>
                    <Text style={[styles.h1, globalStyles.boldText]}>Información personal</Text>
               </View>

               <View style={styles.inputs}>
                    <View style={styles.inputColumn}>

                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>RUN</Text>
                              <TextInput
                                   value={newData.run}
                                   onChangeText={text => setNewData({ ...newData, run: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Apellidos</Text>
                              <TextInput
                                   value={newData.apellidos}
                                   onChangeText={text => setNewData({ ...newData, apellidos: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Dirección</Text>
                              <TextInput
                                   value={newData.direccion}
                                   onChangeText={text => setNewData({ ...newData, direccion: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Teléfono móvil</Text>
                              <TextInput
                                   value={newData.telMovil}
                                   onChangeText={text => setNewData({ ...newData, telMovil: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Nombre médico</Text>
                              <TextInput
                                   value={newData.nombreMedico}
                                   onChangeText={text => setNewData({ ...newData, nombreMedico: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Contacto de emergencia</Text>
                              <TextInput
                                   value={newData.contactoEmergencia}
                                   onChangeText={text => setNewData({ ...newData, contactoEmergencia: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>

                    </View>

                    <View style={styles.inputColumn}>
                         {/* TODO: Make the date input field a proper date input field. */}
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Fecha de Nacimiento</Text>
                              <TextInput
                                   value={newData.fechaNac}
                                   onChangeText={text => setNewData({ ...newData, fechaNac: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Nombres</Text>
                              <TextInput
                                   value={newData.nombres}
                                   onChangeText={text => setNewData({ ...newData, nombres: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Teléfono fijo</Text>
                              <TextInput
                                   value={newData.telFijo}
                                   onChangeText={text => setNewData({ ...newData, telFijo: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Sistema de medicina</Text>
                              <TextInput
                                   value={newData.sistemaMedicina}
                                   onChangeText={text => setNewData({ ...newData, sistemaMedicina: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>
                         <View style={styles.input}>
                              <Text style={[styles.labelText, globalStyles.boldText]}>Teléfono médico</Text>
                              <TextInput
                                   value={newData.telMedico}
                                   onChangeText={text => setNewData({ ...newData, telMedico: text })}
                                   style={[styles.textInput, globalStyles.semiBoldText]}
                              />
                         </View>

                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          marginHorizontal: 16,
          marginTop: 24,
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