import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global';

export default function GuardarBtn({ propNavigation, setIsSaved }) {
     return (
          <TouchableOpacity style={styles.btn} onPress={() => {
               propNavigation.goBack();
               setIsSaved(true);
          }}>
               <Text style={[styles.txt, globalStyles.semiBoldText]}>Guardar</Text>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     btn: {
          marginHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: '#0066CC',
          borderRadius: 10,
          marginBottom: 140,
     },
     txt: {
          fontSize: 18,
          color: '#FFFFFF',
          textAlign: 'center',
     },
});