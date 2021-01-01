import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import ChatItem from './chat/ChatItemRejoint'
import api from '../service/api';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
export default function GroupeRejoint(){
  
    
    const [parties,setParties] =useState([]);
    const loadParties =() =>{
        api.get('/partie').then(res =>{
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
    
    
    

