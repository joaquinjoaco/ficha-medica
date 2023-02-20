import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';

export default function PersonalInfo({ data }) {
     return (
          <View>
               <View style={styles.container}>
                    <Text style={[styles.h1, globalStyles.boldText]}>Información adicional</Text>

                    <View style={styles.content}>

                         <View style={styles.column}>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Dirección</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>{data.direccion}</Text>
                              </View>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Teléfono móvil</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>{data.telMovil}</Text>
                              </View>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Nombre médico</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>{data.nombreMedico}</Text>
                              </View>
                         </View>

                         <View style={styles.column}>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Teléfono fijo</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>{data.telFijo}</Text>
                              </View>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Sistema de medicina</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>{data.sistemaMedicina}</Text>
                              </View>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Teléfono médico</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>{data.telMedico}</Text>
                              </View>
                         </View>

                    </View>

               </View>
          </View>
     )
}

const styles = StyleSheet.create({

     container: {
          marginTop: 16,
          marginHorizontal: 16,
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
     },

     h1: {
          fontSize: 28,
          color: '#000000',
          paddingHorizontal: 24,
          paddingTop: 16,
     },

     content: {
          flexDirection: 'row',
          paddingVertical: 16,
          paddingHorizontal: 24,
     },

     column: {
          flexDirection: 'column',
          flex: 0.5,
     },

     data: {
          fontSize: 18,
          color: '#000000',

     },
     dataName: {
          fontSize: 16,
     },

     dataContainer: {
          paddingVertical: 8,
     },
});