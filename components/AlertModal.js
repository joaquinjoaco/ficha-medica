import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

export default function AlertModal({ text }) {
     return (
          <View style={styles.modal}>
               <View style={styles.modalContent}>
                    <Text numberOfLines={3} style={[styles.modalText, globalStyles.boldText]}>{text}</Text>
                    <TouchableOpacity style={styles.editBtn}>
                         <Text style={[styles.editBtnText, globalStyles.regularText]}>Editar ficha médica</Text>
                    </TouchableOpacity>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     modal: {
          marginTop: 16,
          height: 190,
          marginHorizontal: 16,
          borderRadius: 5,
          backgroundColor: '#FFFFFF',
          borderColor: '#E7195A',
          borderLeftWidth: 5,

     },
     modalContent: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 16,
          marginRight: 140,
          height: 190,
     },
     modalText: {
          fontSize: 28,
          color: '#E7195A',
     },
     editBtn: {
          backgroundColor: '#0066CC',
          width: 180,
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
     },
     editBtnText: {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
     },
})