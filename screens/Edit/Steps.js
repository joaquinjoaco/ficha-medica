import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import EditTopBar from '../../components/EditTopBar';
import InfPersonal from '../../components/forms/InfPersonal';
import Grupo from '../../components/forms/Grupo';
import Antecedentes1 from '../../components/forms/Antecedentes1';
import Antecedentes2 from '../../components/forms/Antecedentes2';
import Antecedentes3 from '../../components/forms/Antecedentes3';
import { globalStyles } from '../../styles/global';

export default function Steps({ navigation, route }) {

     const [step, setStep] = useState(1);

     return (
          <View style={styles.stepContainer}>
               <EditTopBar step={step} setStep={setStep} propNavigation={navigation} setIsSaved={route.params.setIsSaved} />
               <ScrollView>
                    {(() => {
                         switch (step) {
                              case 1:
                                   return <InfPersonal />
                              case 2:
                                   return <Grupo />
                              case 3:
                                   return <Antecedentes1 />
                              case 4:
                                   return <Antecedentes2 />
                              case 5:
                                   return <Antecedentes3 />
                              default:
                                   return null
                         }
                    })()}
               </ScrollView>
               <View style={styles.stepCounter}>
                    <Text style={[styles.currentStep, globalStyles.boldText]}>{step + "/5"}</Text>
                    <View style={styles.dots}>
                         <View style={[styles.dot, step === 1 && { backgroundColor: '#0066CC' }]}></View>
                         <View style={[styles.dot, step === 2 && { backgroundColor: '#0066CC' }]}></View>
                         <View style={[styles.dot, step === 3 && { backgroundColor: '#0066CC' }]}></View>
                         <View style={[styles.dot, step === 4 && { backgroundColor: '#0066CC' }]}></View>
                         <View style={[styles.dot, step === 5 && { backgroundColor: '#0066CC' }]}></View>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     stepContainer: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
     stepCounter: {
          bottom: 32,
          marginLeft: 'auto',
          marginRight: 'auto',
          alignItems: 'center',
          marginTop: 32,
     },

     currentStep: {
          fontSize: 18,
     },

     dots: {
          flexDirection: 'row',
          marginTop: 24,
     },

     dot: {
          borderRadius: 100,
          backgroundColor: '#FFFFFF',
          width: 16,
          height: 16,
          margin: 8,
     },

     currentDot: {
          borderRadius: 100,
          backgroundColor: '#0066CC',
          width: 16,
          height: 16,
          margin: 8,
     }
});