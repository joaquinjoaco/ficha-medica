import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../styles/global';

export default function AlertErrorModal({ message, buttonText, close }) {

     return (
          <View style={styles.modal}>
               <View style={styles.content}>
                    <Text style={[styles.title, globalStyles.boldText]}>Ups!</Text>
                    <Text style={[styles.message, globalStyles.mediumText]}>{message}</Text>
                    <TouchableOpacity style={styles.btn}
                         onPress={() => { close() }}>
                         <Text style={[styles.btnText, globalStyles.regularText]}>{buttonText}</Text>

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
          backgroundColor: 'rgba(0,0,0, 0.6)',
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