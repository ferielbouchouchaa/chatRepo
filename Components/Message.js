import React from 'react';
import {  View,StyleSheet,Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import GroupeRejoint from './GroupeRejoint'
import DiscussionRejoint from './chat/DiscussionRejoint'
import MaDiscussion from './chat/MaDiscussion'
import ListeMembre from './chat/ListeMembre'
import ListeInvitation from './chat/ListeInvitation'
import ModifierPartie from './chat/ModifierPartie'
import mesGroupes from './mesGroupes'
import {createStackNavigator} from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


const Stack=createStackNavigator()
  const StackNavigator=() => {
    const navigation= useNavigation()
    var _menu = null;

    const setMenuRef = ref => {
      _menu = ref;
    };
  
    const hideMenu = () => {
      _menu.hide();
    };
  
    const showMenu = () => {
      _menu.show();
    };
  
    return(
        <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00818A"},
        title:"Boite de messages",
      headerTintColor:'#FFFFFF'}
          }>
            <Stack.Screen name="Messages" component={Home}/>
            <Stack.Screen name="ListeMembre" component={ListeMembre}
              options={ { title: 'Liste de Membres' }}/>
         <Stack.Screen name="ListeInvitation" component={ListeInvitation} 
          options={ { title: 'Liste des Invitations' }}/>
          <Stack.Screen name="ModifierPartie" component={ModifierPartie}
           options={ { title: 'Modifier La Partie' }}/> 
        
        
         
        <Stack.Screen name="MaDiscussion" component={MaDiscussion} 
        options={( {route} ) =>({title: route.params.name,
        headerRight:() =>(
          <View style={{marginRight:10}}>
            <Menu
          ref={setMenuRef}
          button={<Text onPress={showMenu}><Icon name="ellipsis-v" size={22} color="white"/> </Text>}
        >
          <MenuItem onPress={()=>{navigation.navigate("ListeMembre");hideMenu}  }>Les Membres</MenuItem>
          <MenuItem onPress={()=>navigation.navigate("ListeInvitation")}>Liste des invitations</MenuItem>
          <MenuItem onPress={()=>navigation.navigate("ModifierPartie")} > Modifier La partie
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Supprimer la partie</MenuItem>
        </Menu>
           
          </View>
        )})
        } />
        
        <Stack.Screen name="DiscussionRejoint" component={DiscussionRejoint} 
        options={( {route} ) =>({title: route.params.name,
        headerRight:() =>(
          <View style={{marginRight:10}}>
            <Menu
          ref={setMenuRef}
          button={<Text onPress={showMenu}><Icon name="ellipsis-v" size={22} color="white"/> </Text>}
        >
          <MenuItem onPress={()=>navigation.navigate("ListeMembre")}>Les Membres</MenuItem>
          <MenuItem onPress={hideMenu} disabled>Liste des invitations</MenuItem>
          <MenuItem onPress={hideMenu} disabled>Modifier La partie
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu} disabled>Supprimer la partie</MenuItem>
        </Menu>
           
          </View>
        )})
        } />
         
      </Stack.Navigator> 
    )
}
export default StackNavigator

const Top= createMaterialTopTabNavigator()


export const Home =() => {
    return (

        <Top.Navigator 
        tabBarOptions={{
          activeTintColor: '#00818A', // Couleur d'arrière-plan de l'onglet sélectionné
          // inactiveTintColor: '#C9F6E3', // Couleur d'arrière-plan des onglets non sélectionnés
             // On masque les titres
            showIcon: true,// On informe le TabNavigator qu'on souhaite afficher les icônes définis
            indicatorStyle:{backgroundColor:'#00818A',height:3},
            labelStyle:{fontWeight:'bold'}
            
           }}>
            <Top.Screen name="mes Groupes" component={mesGroupes}  />
            <Top.Screen name="rejoints" component={GroupeRejoint}  />
        </Top.Navigator>
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
