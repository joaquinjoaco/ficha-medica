import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';

export default function EmergencyPhone() {
     return (
          <View style={styles.container}>
               <View style={styles.dataContainer} >
                    <Text style={[styles.data, globalStyles.regularText]}>Teléfono de emergencia</Text>
                    <Text style={[styles.data, globalStyles.boldText]}>+56997823899</Text>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          marginHorizontal: 16,
          borderRadius: 10,
          backgroundColor: '#FDFFB4',
          flexDirection: 'row',
     },

     // data container style
     dataContainer: {
          paddingHorizontal: 24,
          paddingVertical: 16,
          // backgroundColor: 'red',
     },
     data: {
          fontSize: 18,
          color: '#000000',
     },
});