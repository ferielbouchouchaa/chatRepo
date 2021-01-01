/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    FlatList,
    Image,
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const DATA = [
    {
        id: 1,
        place: 'Kalaa Sghira',
        title: 'Les médecins',
        date: '01/12/2020',
        time: '14:00',
    },
    {
        id: 2,
        place: 'Akouda',
        title: 'Les ingénieurs',
        date: '01/12/2020',
        time: '13:00',
    },
    {
        id: 3,
        place: 'Sousse',
        title: 'Les médecins',
        date: '01/12/2020',
        time: '14:00',
    },
    {
        id: 4,
        place: 'Sousse',
        title: 'Les médecins',
        date: '01/12/2020',
        time: '14:00',
    },

]
const Liste = () => {
    const renderItem = ({ item }) => (

       
        <View style={styles.item}>
            <View style={{
                left: '100%',
                flexDirection: 'row',
                paddingBottom: 10,

            }}>
                <Icon name="map-marker" size={20} left={50} />
                <Text style={{ textAlign: 'left', marginLeft: 5 }}>{item.place}</Text>
            </View>
            <View style={styles.contenu}>
                <Text style={styles.text}>{item.title}</Text>
                <Text>Date: {item.date}</Text>
                <Text>Heure: {item.time}</Text>
            </View>
            <TouchableOpacity style={styles.bouton}>
                <Text>REJOINDRE</Text>
            </TouchableOpacity>
        </View>


    );
    return (
        
        <View style={styles.container} >

            <View style={
                {
                    height: 46,
                    width: 289,
                    justifyContent: 'center',
                    paddingHorizontal: 5,
                }}>
                
                    <View style={
                        {
                            height: 50,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            paddingLeft: 10,
                            alignItems: 'center',
                            borderRadius: 50,
                            marginBottom: 20,
                        }
                    }>
                        <Icon name="search" style={
                            {
                                fontSize: 24,
                                color: '#00818A',
                            }
                        } />
                        <TextInput placeholder="Search" style={{ fontSize: 24, marginLeft: 15 }}></TextInput>
                    </View>
              
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingRight: 0,
        paddingBottom: 10,
        justifyContent: 'center',
        backgroundColor: '#00EFA1',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: "#fff"
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        flex: 1,

    },
    item: {
        flex: 2,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,

        borderRadius: 5,
        backgroundColor: 'white',
        width: 270,
        height: 170,
        padding: 10,
    },
    contenu: {
        flex: 2,
    },
    bouton: {
        left: '60%',
    }
});
export default Liste;

