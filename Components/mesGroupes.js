import { View, StyleSheet, Text} from 'react-native';
import React from 'react';
import ChatItem from './chat/ChatItemMesgrp'
import { FlatList } from 'react-native-gesture-handler';
import api from '../service/api';
import { useEffect, useState } from 'react';

export default function mesGroupes(){
    const [parties,setParties] =useState([]);
    const loadParties =() =>{
        api.get('/partie').then(res =>{
            console.log('/partie', res.data);
           setParties(res.data)
            console.log('/partie', res.data);
        })
    }

    useEffect(()=>{
        loadParties();
    },[]);
        return(
            <View>
                <FlatList 
                data={parties}
                renderItem={({item}) => <ChatItem partie={item} />}
                keyExtractor={(item)=> item.id}
                />
            </View>
        )
    
}


