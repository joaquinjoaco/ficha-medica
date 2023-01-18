import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default function FloatingEditBtns({ propNavigation }) {
     return (
          <View style={styles.editButtons}>
               <TouchableOpacity style={styles.btn} onPress={() => propNavigation.goBack()}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={25} color="white" />
               </TouchableOpacity>

               <TouchableOpacity style={[styles.btn, styles.btnSave]}>
                    <MaterialCommunityIcons name="content-save" size={25} color="white" />
               </TouchableOpacity>
          </View>
     )
}

const styles = StyleSheet.create({
     editButtons: {
          flexDirection: 'column',
          position: 'absolute',
          bottom: 16,
          right: 16,
          height: 'auto',
          width: 'auto',
     },
     btn: {
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
          backgroundColor: '#0066CC',
          width: 50,
          height: 50,
     },
     btnSave: {
          marginTop: 8,
     },
})