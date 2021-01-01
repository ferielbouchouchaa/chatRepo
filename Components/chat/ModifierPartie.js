import React,{useState} from 'react'

import * as Animatable from 'react-native-animatable'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-datepicker'
import { Picker } from '@react-native-community/picker'
import LinearGradient from 'react-native-linear-gradient'
import Textarea from 'react-native-textarea';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

class ModifierPartie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            check_textInputChange: false,
            
            select: 'niveau',
            

        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    textInputChange = (val) => {
        if (val.length !== 0) {
            this.setState({
                ...this.state,
                value: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                ...this.state,
                value: val,
                check_textInputChange: false
            });
        }
    }


    render() {
        return (
            <View style={styles.container}>
            
            <Animatable.View animation="fadeInUpBig"
                style={styles.footer}>
                <ScrollView>

                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5
                    }}>

                        <TextInput
                            placeholder="Nom de l'équipe"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => this.textInputChange(val)}
                        />
                        {this.state.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    <View style={styles.action}>
                        <Picker
                            selectedValue={this.state.niveau}
                            style={{ height: 50, width: 150, color: '#05375a' }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ niveau: itemValue })
                            }
                        >

                            <Picker.Item label="15-20" />
                            <Picker.Item label="20-25" />
                            <Picker.Item label="25-30" />
                        </Picker>
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Nombre de joueurs"
                            style={styles.textInput}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onChangeText={(val) => this.textInputChange(val)}
                        />
                        {this.state.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>
                    <View style={styles.action}>
                        <Picker
                            selectedValue={this.state.niveau}
                            style={{ height: 50, width: 150, color: '#05375a' }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ niveau: itemValue })
                            }
                        >

                            <Picker.Item label="Débutant" value="debutant" />
                            <Picker.Item label="Intérmediaire" value="intermediaire" />
                            <Picker.Item label="Avancé" value="avancé" />
                        </Picker>
                    </View>


                    <View style={styles.action}>

                        <TextInput
                            placeholder="Localisation"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => this.textInputChange(val)}
                        />
                        {this.state.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    
                    <View style={styles.action}>
                        <DatePicker
                            placeholder="Heure estimée de la partie"
                            style={{ width: 200 }}
                            mode="date"
                            format="YYYY-MM-DD"
                            minDate="2006-01-01"
                            maxDate="1970-01-01"
                            confirmBtnText="Confirmer"
                            cancelBtnText="Annuler"

                        />
                    </View>

                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}

                        maxLength={120}
                        placeholder={'Description'}

                    />




                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#00EAA1']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Enregistrer modifications</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#00EAA1',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={{
                                color: '#009387'
                            }}>Annuler</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </Animatable.View>



        </View>
    )

}
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    
},

footer: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems:"center"
},
text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},
action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
textInput: {
    flex: 1,
    marginTop: 12,
    paddingLeft: 10,
    color: '#05375a'
},
button: {
    alignItems: 'center',
    marginTop: 20
},
signIn: {
    width: 270,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
icon: {
    marginTop: 25
},
textS: {
    justifyContent: 'center',
    marginTop: 9,
    color: 'grey'
},
textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
},
textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
},


})
export default ModifierPartie