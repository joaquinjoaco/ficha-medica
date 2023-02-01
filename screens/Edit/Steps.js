import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import EditTopBar from '../../components/EditTopBar';
import InfPersonal from '../../components/forms/InfPersonal';
import Grupo from '../../components/forms/Grupo';
import Antecedentes1 from '../../components/forms/Antecedentes1';
import Antecedentes2 from '../../components/forms/Antecedentes2';
import Antecedentes3 from '../../components/forms/Antecedentes3';

export default function Steps({ navigation }) {

     const [step, setStep] = useState(1);

     return (
          <View style={styles.step}>
               <EditTopBar step={step} setStep={setStep} propNavigation={navigation} />
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
          </View>
     )
}

const styles = StyleSheet.create({
     step: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
});