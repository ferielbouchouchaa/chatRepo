import React from 'react'
import {  View,ImageBackground }from 'react-native'

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import api, { URL } from '../../service/api';
import {io} from 'socket.io-client'
import {StyleSheet,Text} from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';



const DiscussionRejoint = ()=>{
    const route=useRoute();
  const name =route.params.name;
   
    const [messages,setMessages] =useState([]);

    const [inputMessage,setInputMessage] =useState<string>('');

    // componentDidMount(){
    //     this.socket =io("192.168.1.21:3000")
    //      this.socket.on('chat message',msg=>{
    //          this.setState({chatMessages:[...this.state.chatMessages,msg]})
    //      })
    // }
    const loadMessages =() =>{
        api.get('messages/index').then(res =>{
            setMessages(res.data[0].messages.reverse());
            
            console.log('/messages/index', res.data[0].messages);
        })
    }

    const onSocket =() =>{
        const socket = io('http://192.168.1.21:3000/');
         socket.on('message',(res)=>{
            
          setMessages(messages=>[res,...messages]);
           // console.log('onSocket',res);
         })
    }
    const submitMessage=()=>{
        
        if(inputMessage.length ===0){
            return;
        }
        const Data={
            name:name,
            message:inputMessage
        }
        
        api.post('/messages/create',Data).then(()=>{
            setInputMessage('');
            
        })
       
    }
    useEffect(()=>{
        loadMessages();
        onSocket();
    },[]);
    

    const RenderItem=(item)=>{
        // if(item.name==name){
        //     return(
        //         <View style={styles.containerViewMessageEU}>
        //         <Text>{item.message}</Text>
        //     </View>
        //     )
        // }
        return (
            <View style={styles.containerViewMessageEU}>
            <Text> {item.value}</Text>
        </View>
        )
    }
    
  
        
    return (
            <View  style={{marginBottom:10}}>
             <ImageBackground style={{width:'100%', height:'100%'}}source={require('../../assets/bg.jpg')}>
            <FlatList 
            style={{flex:1,padding:10,marginBottom:10}}
            data={messages}
           inverted
           scrollEnabled
            renderItem={({item}) => RenderItem (item) }
           keyExtractor={(item, index) => 'key'+index}
           
        />

             <View style={styles.container}>
                <TextInput style={styles.textInput} multiline placeholder="Votre Message" 
                onChangeText={e=>setInputMessage(e)}
                value={inputMessage}
                ></TextInput>
                <TouchableOpacity onPress={submitMessage}>
                <Icon style={{marginTop:18}}name="send" size={24} color="#00818A" />
                </TouchableOpacity>
                
        </View>
            </ImageBackground> 
        
        </View>
    )
}


export default DiscussionRejoint;
const styles=StyleSheet.create({
    container:{
        
    flexDirection:'row',

        
    },
   textInput:{
       margin:10,
       backgroundColor:'white',
       borderRadius:40,
       height:40,
       width:'83%'
   },
   containerViewMessageEU: {
    borderRadius:5,
    padding:10,
    backgroundColor:'#DCF8C5',
    marginLeft:50,
    marginBottom:8

},
containerViewMessage:{
    borderRadius:5,
    padding:10,
    backgroundColor:'#e5e5e5',
    marginRight:50,
    marginBottom:8
}
})