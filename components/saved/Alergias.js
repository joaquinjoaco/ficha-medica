import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/global';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Alergias({ data }) {
     return (
          <View style={styles.container}>
               <Text style={[styles.h1, globalStyles.boldText]}>Alergias</Text>

               <View style={styles.content}>
                    {/* TODO: make these alergies boxes into reusable components*/}

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                         {/* medicamentos */}
                         {
                              data.hasMedicamentos ?
                                   data.medicamentos.map((medicamento) => {
                                        return (
                                             <View style={[styles.alergyContainer, styles.medicine, globalStyles.boldText]} key={medicamento}>
                                                  <View style={styles.wrapper}>
                                                       <MaterialCommunityIcons name="pill" size={24} color="#FFC61B" />
                                                       <View>
                                                            <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Medicamento</Text>
                                                            <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>{medicamento}</Text>
                                                       </View>
                                                  </View>
                                             </View>
                                        )
                                   })
                                   :
                                   <View style={[styles.alergyContainer, styles.medicine, globalStyles.boldText]}>
                                        <View style={styles.wrapper}>
                                             <MaterialCommunityIcons name="pill" size={24} color="#FFC61B" />
                                             <View>
                                                  <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Medicamento</Text>
                                                  <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>Ninguno</Text>
                                             </View>
                                        </View>
                                   </View>
                         }

                         {/* antibioticos */}
                         {
                              data.hasAntibioticos ?
                                   data.antibioticos.map((antibiotico) => {
                                        return (
                                             <View style={[styles.alergyContainer, styles.antibiotic, globalStyles.boldText]} key={antibiotico}>
                                                  <View style={styles.wrapper}>
                                                       <MaterialCommunityIcons name="bacteria" size={24} color="#80D0E1" />
                                                       <View>
                                                            <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Antibiótico</Text>
                                                            <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>{antibiotico}</Text>
                                                       </View>
                                                  </View>
                                             </View>
                                        )
                                   })
                                   :
                                   <View style={[styles.alergyContainer, styles.antibiotic, globalStyles.boldText]}>
                                        <View style={styles.wrapper}>
                                             <MaterialCommunityIcons name="bacteria" size={24} color="#80D0E1" />
                                             <View>
                                                  <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Antibiótico</Text>
                                                  <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>Ninguno</Text>
                                             </View>
                                        </View>
                                   </View>
                         }

                         {/* Alimentos */}
                         {data.hasAlimentos ?
                              data.alimentos.map((alimento) => {
                                   return (
                                        <View style={[styles.alergyContainer, styles.food, globalStyles.boldText]} key={alimento}>
                                             <View style={styles.wrapper}>
                                                  <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="#212121" />
                                                  <View>
                                                       <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Alimentos</Text>
                                                       <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>{alimento}</Text>
                                                  </View>
                                             </View>
                                        </View>

                                   )
                              })
                              :
                              <View style={[styles.alergyContainer, styles.food, globalStyles.boldText]}>
                                   <View style={styles.wrapper}>
                                        <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="#212121" />
                                        <View>
                                             <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Alimentos</Text>
                                             <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>Ninguno</Text>
                                        </View>
                                   </View>
                              </View>
                         }

                         {/* Animales/Insectos */}
                         {
                              data.hasAnimales ?
                                   data.animales.map((animal) => {
                                        return (
                                             <View style={[styles.alergyContainer, styles.animals, globalStyles.boldText]} key={animal}>
                                                  <View style={styles.wrapper}>
                                                       <MaterialCommunityIcons name="bug" size={24} color="#797781" />
                                                       <View>
                                                            <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Animal/Insecto</Text>
                                                            <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>{animal}</Text>
                                                       </View>
                                                  </View>
                                             </View>
                                        )
                                   })
                                   :
                                   <View style={[styles.alergyContainer, styles.animals, globalStyles.boldText]}>
                                        <View style={styles.wrapper}>
                                             <MaterialCommunityIcons name="bug" size={24} color="#797781" />
                                             <View>
                                                  <Text style={[styles.alergyTypeTitle, globalStyles.regularText]}>Animal/Insecto</Text>
                                                  <Text numberOfLines={1} style={[styles.alergyState, globalStyles.boldText]}>Ninguno</Text>
                                             </View>
                                        </View>
                                   </View>
                         }



                    </ScrollView>

               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          marginTop: 16,
          marginHorizontal: 16,
          borderRadius: 5,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: '#FFFFFF',
          borderColor: '#EA3800',
          borderLeftWidth: 5,
     },

     content: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingHorizontal: 16,
          paddingBottom: 16,
     },

     h1: {
          fontSize: 28,
          color: '#EA3800',
          padding: 16,
     },


     // alergy boxes styles
     alergyContainer: {
          flexDirection: 'row',
          width: 120,
          height: 120,
          // backgroundColor: '#881717',
          borderRadius: 10,
          // alignSelf: 'flex-start',
          justifyContent: 'flex-start',
          // alignItems: 'center',
          marginHorizontal: 4,
     },
     alergyTypeTitle: {
          fontSize: 16,
          color: '#FFFFFF',
     },
     alergyState: {
          fontSize: 20,
          color: '#FFFFFF',
          marginBottom: 4,
     },
     wrapper: {
          flexDirection: 'column',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          padding: 16,
     },

     medicine: {
          backgroundColor: '#137569',
     },
     antibiotic: {
          backgroundColor: '#453A50',
     },
     food: {
          backgroundColor: '#DBB738',
     },
     animals: {
          backgroundColor: '#A53636',
     },
})