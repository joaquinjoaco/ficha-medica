import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import FloatingEditBtns from '../components/FloatingEditBtns';
import InfPersonal from '../components/forms/InfPersonal';
import Grupo from '../components/forms/Grupo';
import Antecedentes from '../components/forms/Antecedentes';

export default function Edit({ navigation }) {
     return (
          <View style={styles.edit}>
               <ScrollView>
                    <InfPersonal />
                    <Grupo />
                    <Antecedentes />
               </ScrollView>
               <FloatingEditBtns propNavigation={navigation} />
          </View>
     )
}

const styles = StyleSheet.create({
     edit: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
});