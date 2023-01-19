import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../../styles/global';

export default function Antecedentes() {

     const [antibioticos, setAntibioticos] = useState(false);
     const [medicamentos, setMedicamentos] = useState(false);
     const [alimentos, setAlimentos] = useState(false);
     const [animales, setAnimales] = useState(false);
     const [enfermedadC, setEnfermedadC] = useState(false);

     return (
          <View style={styles.container}>
               <Text style={[styles.h1, globalStyles.boldText]}>Antecedentes médicos</Text>
               <View style={styles.inputs}>

                    <View style={styles.bloodType}>
                         <View style={styles.inputColumn}>
                              <View style={styles.input}>
                                   <Text style={[styles.labelText, globalStyles.boldText]}>Grupo sanguíneo</Text>
                                   <TextInput style={[styles.textInput, globalStyles.boldText]} />
                              </View>
                         </View>

                    </View>

                    <View style={styles.input}>
                         <Text style={[styles.h2, globalStyles.boldText]}>Alergias</Text>
                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Antibióticos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Antibióticos</Text>
                                   <View style={styles.checks}>

                                        {/* si */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setAntibioticos(true)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>Si</Text>
                                             <View style={styles.outerC}>
                                                  {antibioticos && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>
                                        {/* no */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setAntibioticos(false)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>No</Text>
                                             <View style={styles.outerC}>
                                                  {!antibioticos && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>

                                   </View>
                              </View>
                              <View style={styles.bottom}>
                                   {antibioticos && <TextInput style={[styles.textInput, globalStyles.semiBoldText]} placeholder="¿Cuál/es?" />}
                              </View>
                         </View>

                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Medicamentos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Medicamentos</Text>
                                   <View style={styles.checks}>

                                        {/* si */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setMedicamentos(true)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>Si</Text>
                                             <View style={styles.outerC}>
                                                  {medicamentos && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>
                                        {/* no */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setMedicamentos(false)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>No</Text>
                                             <View style={styles.outerC}>
                                                  {!medicamentos && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>

                                   </View>
                              </View>
                              <View style={styles.bottom}>
                                   {medicamentos && <TextInput style={[styles.textInput, globalStyles.semiBoldText]} placeholder="¿Cuál/es?" />}
                              </View>
                         </View>

                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Alimentos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Alimentos</Text>
                                   <View style={styles.checks}>

                                        {/* si */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setAlimentos(true)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>Si</Text>
                                             <View style={styles.outerC}>
                                                  {alimentos && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>
                                        {/* no */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setAlimentos(false)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>No</Text>
                                             <View style={styles.outerC}>
                                                  {!alimentos && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>

                                   </View>
                              </View>
                              <View style={styles.bottom}>
                                   {alimentos && <TextInput style={[styles.textInput, globalStyles.semiBoldText]} placeholder="¿Cuál/es?" />}
                              </View>
                         </View>

                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Animales y/o insectos */}
                                   <Text style={[styles.name, globalStyles.boldText]}>Animales y/o insectos</Text>
                                   <View style={styles.checks}>

                                        {/* si */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setAnimales(true)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>Si</Text>
                                             <View style={styles.outerC}>
                                                  {animales && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>
                                        {/* no */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setAnimales(false)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>No</Text>
                                             <View style={styles.outerC}>
                                                  {!animales && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>

                                   </View>
                              </View>
                              <View style={styles.bottom}>
                                   {animales && <TextInput style={[styles.textInput, globalStyles.semiBoldText]} placeholder="¿Cuál/es?" />}
                              </View>
                         </View>

                    </View>

                    {/* Enfermedades e intervenciones textarea */}
                    <View style={styles.input}>
                         <Text style={[styles.h2, globalStyles.boldText]}>Antecedentes de enfermedades e intervenciones quirúrgicas anteriores de importancia:</Text>
                         <TextInput
                              style={[styles.textArea, globalStyles.semiBoldText]}
                              multiline={true}
                              placeholder="..."
                         />
                    </View>

                    <View style={styles.input}>
                         <View style={styles.antecedenteContainer}>
                              <View style={styles.top}>
                                   {/* Enfermedad crónica */}
                                   <Text style={[styles.h2enfermedad, globalStyles.boldText]}>¿Padece de alguna enfermedad crónica?</Text>
                                   <View style={styles.checks}>

                                        {/* si */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setEnfermedadC(true)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>Si</Text>
                                             <View style={styles.outerC}>
                                                  {enfermedadC && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>
                                        {/* no */}
                                        <TouchableOpacity style={styles.check}
                                             onPress={() => setEnfermedadC(false)}>
                                             <Text style={[styles.checkLabel, globalStyles.semiBoldText]}>No</Text>
                                             <View style={styles.outerC}>
                                                  {!enfermedadC && <View style={styles.innerC}></View>}
                                             </View>
                                        </TouchableOpacity>

                                   </View>
                              </View>
                              <View style={styles.bottom}>
                                   {enfermedadC && <TextInput style={[styles.textInput, globalStyles.semiBoldText]} placeholder="¿Cuál/es?" />}
                              </View>
                         </View>
                    </View>

                    {/* Tratamientos textarea */}
                    <View style={styles.input}>
                         <Text style={[styles.h2, globalStyles.boldText]}>¿Requiere tratamiento durante el evento?</Text>
                         <TextInput
                              style={[styles.textArea, globalStyles.semiBoldText]}
                              multiline={true}
                              placeholder="..."
                         />
                    </View>

                    {/* Medicamentos textarea */}
                    <View style={styles.input}>
                         <Text style={[styles.h2, globalStyles.boldText]}>Medicamentos que se encuentre tomando actualmente, cuales y horarios:</Text>
                         <TextInput
                              style={[styles.textArea, globalStyles.semiBoldText]}
                              multiline={true}
                              placeholder="..."
                         />
                    </View>

               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          marginHorizontal: 16,
          marginTop: 32,
     },
     h1: {
          fontSize: 24,
          marginBottom: 6,
     },
     inputs: {
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          paddingVertical: 8,
          alignSelf: 'stretch',
          borderRadius: 5,
          marginBottom: 16,
     },
     bloodType: {
          flexDirection: 'row',
          marginBottom: 16,
     },
     inputColumn: {
          flex: 0.5,
     },
     input: {
          paddingHorizontal: 16,
          paddingVertical: 8,
     },
     labelText: {
          fontSize: 16,
     },
     textInput: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 12,
          fontSize: 16,
     },
     textArea: {
          backgroundColor: '#F2F3F4',
          borderRadius: 10,
          paddingVertical: 12,
          paddingHorizontal: 12,
          fontSize: 16,
          textAlignVertical: 'top',
          height: 125,
     },
     h2: {
          fontSize: 18,
          marginBottom: 16,
     },
     antecedenteContainer: {
          marginBottom: 16,
          alignSelf: 'stretch',
     },
     top: {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 4,
     },
     bottom: {
     },
     name: {
          fontSize: 16,
     },
     checks: {
          flexDirection: 'row',
     },
     check: {
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 8,
     },
     checkLabel: {
          fontSize: 16,
     },
     outerC: {
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 4,
          height: 12,
          width: 12,
          borderColor: '#000000',
          borderRadius: 100,
          borderWidth: 1,
     },
     innerC: {
          height: 5.8,
          width: 5.8,
          backgroundColor: '#000000',
          borderRadius: 100,
     },
     h2enfermedad: {
          fontSize: 18,
          flex: 0.9,
     },
});