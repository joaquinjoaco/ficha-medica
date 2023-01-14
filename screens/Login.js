import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';


export default function Login({ navigation }) {

     return (
          <View style={styles.container}>
               <View style={styles.hero}>
                    <Text style={[styles.heroTitle, globalStyles.boldText]}>MiFicha</Text>
                    <MaterialCommunityIcons name="qrcode-scan" size={26} color="black" />
               </View>
               <View style={styles.loginForm}>
                    <View style={styles.loginInputs}>
                         <View style={styles.input}>
                              <MaterialIcons name='email' size={18} style={styles.icon} />
                              <Text style={[styles.formText, globalStyles.boldText]}>Email</Text>
                         </View>
                         <TextInput style={[styles.textInput, globalStyles.semiBoldText]} />

                         <View style={[styles.input, styles.secondInput]}>
                              <MaterialIcons name='lock' size={18} style={styles.icon} />
                              <Text style={[styles.formText, globalStyles.boldText]}>Contraseña</Text>
                         </View>
                         <TextInput style={[styles.textInput, globalStyles.semiBoldText]} secureTextEntry={true} />
                    </View>
                    {/* Button */}
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
                         <Text style={[styles.loginBtnText, globalStyles.semiBoldText]}>Iniciar sesión</Text>
                    </TouchableOpacity>
               </View>
               <StatusBar style="auto" />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#F2F3F4',
          alignItems: 'center',
          paddingTop: 180,
     },
     hero: {
          marginBottom: 40,
          flexDirection: 'row',
     },
     heroTitle: {
          fontSize: 54,
     },
     loginForm: {
          backgroundColor: '#FFFFFF',
          width: 335,
          height: 290,
          borderRadius: 10,
     },
     loginInputs: {
          padding: 48,
          flex: 1,
     },
     input: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     secondInput: {
          marginTop: 24,
     },
     textInput: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 12,
     },
     formText: {
          fontSize: 18,
          marginLeft: 4,
          marginBottom: 4,
     },
     icon: {
          marginLeft: 8,
          marginBottom: 4,
     },

     loginBtn: {
          backgroundColor: '#0066CC',
          alignSelf: 'center',
          width: 248,
          paddingVertical: 10,
          // paddingHorizontal: 24,
          marginBottom: -20,
          borderRadius: 10,
     },
     loginBtnText: {
          fontSize: 16,
          textAlign: 'center',
          color: '#FFFFFF',
     },
});
