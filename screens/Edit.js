import { StyleSheet, ScrollView, View, Text } from 'react-native';
import React from 'react';
import FloatingEditBtns from '../components/FloatingEditBtns';
import InfPersonal from '../components/forms/InfPersonal';
import Grupo from '../components/forms/Grupo';
import Antecedentes from '../components/forms/Antecedentes';
import GuardarBtn from '../components/GuardarBtn';

export default function Edit({ navigation, route }) {

     return (
          <View style={styles.edit}>
               <ScrollView>
                    <InfPersonal />
                    <Grupo />
                    <Antecedentes />
                    <GuardarBtn propNavigation={navigation} setIsSaved={route.params.setIsSaved} />
               </ScrollView>
               <FloatingEditBtns propNavigation={navigation} setIsSaved={route.params.setIsSaved} />
          </View>
     )
}

const styles = StyleSheet.create({
     edit: {
          flex: 1,
          backgroundColor: '#F2F3F4',
     },
});