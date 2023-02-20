import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'

export default function PrimaryInfo({ data }) {
     return (
          <View style={styles.primaryContainer}>
               <View style={styles.content}>
                    <Text numberOfLines={2} style={[styles.name, globalStyles.boldText]}>{data.nombres + '\n' + data.apellidos}</Text>
                    <View style={styles.dataContainer} >
                         <Text style={[styles.dataName, globalStyles.regularText]}>RUN</Text>
                         <Text style={[styles.data, globalStyles.boldText]}>{data.run}</Text>
                    </View>
               </View>

               <View style={styles.content}>
                    <View style={[styles.bloodTContainer, globalStyles.boldText]}>
                         <View style={styles.wrapper}>
                              <Text style={[styles.bloodTypeTitle, globalStyles.regularText]}>Grupo sanguíneo</Text>
                              <Text style={[styles.bloodType, globalStyles.boldText]}>{data.grupoSanguineo}</Text>
                         </View>
                    </View>
                    <View style={styles.dataContainer} >
                         <Text style={[styles.dataName, globalStyles.regularText]}>Fecha de nacimiento</Text>
                         <Text style={[styles.data, globalStyles.boldText]}>{data.fechaNac}</Text>
                    </View>
               </View>
          </View>
     )
}


const styles = StyleSheet.create({

     // container style
     primaryContainer: {
          marginHorizontal: 16,
          marginTop: 32,
          marginBottom: 16,
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
     },
     content: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingVertical: 16,
          paddingHorizontal: 24,
          flex: 1,
          height: 190,
     },

     // name style
     name: {
          fontSize: 40,
          lineHeight: 50,
          width: 180,
          color: '#000000',
          marginTop: 4,
     },

     // data container style
     dataContainer: {
          width: 180,
          marginBottom: 4,
          // backgroundColor: 'red',
     },
     data: {
          fontSize: 18,
          color: '#000000',

     },
     dataName: {
          fontSize: 16,
     },

     // blood type styles
     bloodTContainer: {
          flexDirection: 'column',
          width: 100,
          height: 100,
          backgroundColor: '#881717',
          borderRadius: 10,
          alignSelf: 'flex-end',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 4,
     },
     bloodTypeTitle: {
          fontSize: 18,
          color: '#FFFFFF',
     },
     bloodType: {
          fontSize: 32,
          color: '#FFFFFF',
     },


})