import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setUpFichaFirstTime } from '../firestoreService';
import AlertErrorModal from '../components/AlertErrorModal';
import { translateError } from '../FirebaseErrorTranslation';


export default function Login() {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [willRegister, setWillRegister] = useState(false);

     // Modal
     const [showModal, setShowModal] = useState(false);
     const [message, setMessage] = useState("");
     const [buttonText, setButtonText] = useState("");

     const showModalOnError = (message, buttonText) => {
          setMessage(message);
          setButtonText(buttonText);
          // modal is shown with the respective error message
          setShowModal(true);
     }

     // Sign up
     const handleSignUp = () => {
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log('Registered with email:', user.email);
                    console.log('Registered with id:', user.uid);
                    setUpFichaFirstTime(user.uid);
               })
               .catch(error => {
                    showModalOnError(translateError(error.code), "Entendido");
                    console.log(error.message + 'code: ' + error.code);
               });
     }

     // Log in
     const handleLogin = () => {
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log('Signed in with email:', user.email);
                    console.log('Signed in with id:', user.uid);
               })
               .catch(error => {
                    showModalOnError(translateError(error.code), "Entendido");
                    console.log(error.message + ' code: ' + error.code);
               });
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

               </View>

               {/* Button */}
               <TouchableOpacity style={[styles.loginBtn, willRegister && styles.registerBtn]} onPress={() => { willRegister ? handleSignUp() : handleLogin() }}>
                    <Text style={[styles.loginBtnText, globalStyles.semiBoldText]}>{willRegister ? "Registrarme" : "Iniciar sesión"}</Text>
               </TouchableOpacity>

               {showModal && <AlertErrorModal message={message} buttonText={buttonText} close={() => setShowModal(false)} />}

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
          alignSelf: 'stretch',
          marginHorizontal: 38,
          height: 270,
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
          alignSelf: 'stretch',
          marginHorizontal: 38,
          paddingVertical: 16,
          paddingHorizontal: 24,
          marginTop: 8,
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
          padding: 8,
          paddingLeft: 0,
          fontSize: 14,
          color: '#0066CC',
          textDecorationLine: 'underline',
     }
});
