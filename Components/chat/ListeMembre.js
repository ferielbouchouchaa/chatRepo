import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, StyleSheet, Text, ScrollView, FlatList, } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListeMembre =()=> {

   const DATA = [
        {id:1,
            nom: 'Foulen'
        },
        {id:2,
            nom: 'Foulen'
        },
        {id:3,
            nom: 'Foulen'
        },
        {id:4,
            nom: 'Foulen'
        },
        {id:5,
            nom: 'Foulen'
        },

    ];
   
        const renderItem = ({ item }) => (
            
            <View style={
                { flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity style={styles.item}>
                    <MaterialCommunityIcons name="account-circle" color={'#00818A'} size={40} style={styles.iconUser} />
                    <Text style={styles.text}>{item.nom}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBin}>
                    <MaterialCommunityIcons name="trash-can-outline" color={'#00818A'} size={40}  />
                </TouchableOpacity>
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
                        keyExtractor={item => item.id}
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

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',        
       alignItems:'center'
    },
    item: {
        flexDirection: 'row',
        width: 250,
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        borderColor: '#00EAA1',
        borderWidth: 1,
        marginTop: 15
    },

    iconBin: {
        flexDirection: 'row',
        marginTop: 15,
        

    },
    text: {
        color: '#009387',
        textAlign: 'center',
        marginLeft: '30%',
    }

})
export default ListeMembre