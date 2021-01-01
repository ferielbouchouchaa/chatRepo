import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, StyleSheet, Text, ScrollView, FlatList, } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListeInvitation =()=> {
   

    const DATA = [
        {
            id: 1,
            nom: 'Foulen'
        },
        {
            id: 2,
            nom: 'Foulen'
        },
        {
            id: 3,
            nom: 'Foulen'
        },
        {
            id: 4,
            nom: 'Foulen'
        },
        {
            id: 5,
            nom: 'Foulen'
        },

    ];
    
        const renderItem = ({ item }) => (
           

                <View style={styles.item}>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="account-circle" color={'#00818A'} size={40} />
                        <Text style={styles.text}>{item.nom}</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',paddingTop:40,paddingRight:10}}>
                    <TouchableOpacity onPress={() => alert(`accepter`)}>
                        <Text>Accepter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft:20}}>
                        <Text>Refuser</Text>
                    </TouchableOpacity>
                    </View>
                </View>




           
        );


        return (
            <Animatable.View animation="fadeInUpBig"
            style={styles.footer}>
            <View style={styles.container}>
                <View style={styles.footer}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
            </Animatable.View>
        )

    }



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00EAA1'
    },

   
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        alignItems:"center"
    },
    item: {
       
        flexDirection: 'row',
        width: 300,
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#00EAA1',
        borderWidth: 1,
        marginTop: 15
    },


    text: {
        color: '#009387',
        textAlign: 'center',

    }

})
export default ListeInvitation