import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
// import { auth } from '../firebase-config';


export default function Login({ navigation }) {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [willRegister, setWillRegister] = useState(false);

     useEffect(() => {
          // const unsuscribe = auth.onAuthStateChanged(user => {
          //      if (user) {
          //           navigation.navigate('Home');
          //      }
          // })
          // return unsuscribe;
     }, []);

     // sign up
     const handleSignUp = () => {
          // auth
          //      .createUserWithEmailAndPassword(email, password)
          //      .then(userCredentials => {
          //           const user = userCredentials.user;
          //           // console.log('Registered with:', user.email);
          //           // console.log('Registered with:', user.uid);
          //      })
          //      .catch(error => alert(error.message))
     }

     // log in
     const handleLogin = () => {
          // auth
          //      .signInWithEmailAndPassword(email, password)
          //      .then(userCredentials => {
          //           const user = userCredentials.user;
          //           console.log('Logged in with:', user.email);
          //      })
          //      .catch(error => alert(error.message))
     }

     // Changes whether the form will be used to Sign up or log in.
     const changeForm = () => {
          setWillRegister(!willRegister);
     }

     return (
          <View style={styles.container}>
               <View style={styles.hero}>
                    <Text style={[styles.heroTitle, globalStyles.boldText]}>MiFicha</Text>
                    <MaterialCommunityIcons name="qrcode-scan" size={26} color="black" />
               </View>
               <View style={styles.loginForm}>
                    <View style={styles.loginInputs}>

                         {/* email */}
                         <View style={styles.input}>
                              <MaterialIcons name='email' size={18} style={styles.icon} />
                              <Text style={[styles.labelText, globalStyles.boldText]}>Email</Text>
                         </View>
                         <TextInput
                              placeholder="ejemplo@ejemplo.com"
                              value={email}
                              onChangeText={text => setEmail(text)}
                              style={[styles.textInput, globalStyles.semiBoldText]}
                         />

                         {/* password */}
                         <View style={[styles.input, styles.secondInput]}>
                              <MaterialIcons name='lock' size={18} style={styles.icon} />
                              <Text style={[styles.labelText, globalStyles.boldText]}>Contraseña</Text>
                         </View>
                         <TextInput
                              value={password}
                              onChangeText={text => setPassword(text)}
                              style={[styles.textInput, globalStyles.semiBoldText]} secureTextEntry={true} />

                         <Text
                              style={[styles.willRegister, globalStyles.semiBoldText]}
                              onPress={() => { changeForm() }}>{willRegister ? "¿Ya tienes una cuenta? Inicia sesión." : "¿No tienes una cuenta? Regístrate."}
                         </Text>

                    </View>

                    {/* Button */}
                    <TouchableOpacity style={[styles.loginBtn, willRegister && styles.registerBtn]} onPress={() => { willRegister ? handleSignUp() : handleLogin() }}>
                         <Text style={[styles.loginBtnText, globalStyles.semiBoldText]}>{willRegister ? "Registrarme" : "Iniciar sesión"}</Text>
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
          fontSize: 16,
     },
     labelText: {
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
          width: 180,
          paddingVertical: 10,
          paddingHorizontal: 18,
          marginBottom: -20,
          borderRadius: 10,
     },
     loginBtnText: {
          fontSize: 18,
          textAlign: 'center',
          color: '#FFFFFF',
     },
     registerBtn: {
          backgroundColor: '#00CC66',
     },
     willRegister: {
          marginTop: 8,
          fontSize: 14,
          color: '#0066CC',
          textDecorationLine: 'underline',
     }
});
