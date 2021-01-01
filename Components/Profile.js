import React from 'react';
import { View, StyleSheet, Text} from 'react-native';


const Profile =() => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    }
})
export default Profile;