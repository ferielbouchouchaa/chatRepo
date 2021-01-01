import React from 'react'
import Message from './types'
import {StyleSheet, Text} from 'react-native'
import { View } from 'react-native-animatable';
import moment from 'moment'




const MessageItem = (props:Message) =>{
    const {message}=props;

    const isMyMessage=() =>{
        return message.user.id==='u1'
    }
    return (
        <View style={styles.container}>
            <View style={[styles.messageBox,
            { backgroundColor:isMyMessage() ? '#DCF8C5' : '#e5e5e5', marginLeft: isMyMessage() ? 50 : 0 , 
            marginRight: isMyMessage() ? 0 : 50 }]}>
             {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
             <Text style={styles.content}>{message.content}</Text>
             <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
             </View>
        </View>
    )
}

export default MessageItem


const styles=StyleSheet.create({
    container:{
        padding:10
    },
    messageBox:{
        
        
        borderRadius:5,
        padding:10
    },
    name:{
        color:'#00818A',
        fontWeight:'bold',
        marginBottom:5
    },
    content:{
        
    },
    time:{
        alignSelf:'flex-end',
        color:'grey'
    }
})