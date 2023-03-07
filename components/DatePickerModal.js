import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../styles/global';

export default function DatePickerModal({ close }) {

     const [date, setDate] = useState(new Date());

     return (
          <View style={styles.modal}>
               <View style={styles.content}>

                    <Text style={[styles.title, globalStyles.boldText]}>Seleccionar fecha</Text>

                    <TouchableOpacity style={styles.btn}
                         onPress={() => close()}>
                         <Text style={[styles.btnText, globalStyles.regularText]}>Confirmar</Text>
                    </TouchableOpacity>

               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     modal: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
     },
     content: {
          top: '40%',
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          width: 'auto',
          height: 'auto',
          padding: 24,
          margin: 32,
          justifyContent: 'center',
          alignSelf: 'center',
     },
     title: {
          fontSize: 24,
          textAlign: 'left',
          marginBottom: 4,
     },
     message: {
          fontSize: 20,
          textAlign: 'left',
          marginBottom: 16,
     },
     btn: {
          backgroundColor: '#0066CC',
          alignSelf: 'center',
          width: 180,
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     btnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
});