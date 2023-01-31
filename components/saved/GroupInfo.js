import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';

export default function GroupInfo() {
     return (
          <View>
               <View style={styles.container}>
                    <Text style={[styles.h1, globalStyles.boldText]}>Identificación de su grupo</Text>

                    <View style={styles.content}>

                         <View style={styles.column}>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Grupo</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>---</Text>
                              </View>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Distritio</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>---</Text>
                              </View>
                         </View>

                         <View style={styles.column}>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Responsable a cargo</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>---</Text>
                              </View>
                              <View style={styles.dataContainer}>
                                   <Text style={[styles.dataName, globalStyles.regularText]}>Zona</Text>
                                   <Text style={[styles.data, globalStyles.boldText]}>---</Text>
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
          marginBottom: 140,
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