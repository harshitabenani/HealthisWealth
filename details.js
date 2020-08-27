import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView,SafeAreaView, Slider,Picker} from 'react-native'
import {Header,Left,Icon} from 'native-base'
import { DrawerItems } from 'react-navigation-drawer';


class DetailsScreen extends React.Component{

render() {

  
    return (
      
<SafeAreaView style={{flex:1,backgroundColor:"#1e1e1e"}}>
    
    <TouchableOpacity
    style={styles.containerfirst}
    onPress={()=>{this.props.navigation.navigate('About')}} >

    <View style={{flexDirection:'row',
    justifyContent:'space-around',}}>
    <Text style={styles.textbmi}>BMI CALCULATOR</Text>
    <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAiUlEQVRIie3UOwqAQAxFUXE9VlZ+O1uXbCWuRxwXcC1UEBl/mMTGVw9zyCMkCP5IBoiA3AIamdMClSa0TwfUGpDzYPITAtny6VHEwQJoTkDZSr8AqxuVJlZgLwZtQG+lvrehuC6Zi+qcNrAuQ/oG0F1vC8DmBGF4VGUrOoEGlQk8UAyUasCfJ5kAOrgaJFB1+vAAAAAASUVORK5CYII="}}
    style={{height:25,width:25,marginTop:36}}></Image>
     </View>

    </TouchableOpacity>


    <TouchableOpacity
    style={styles.container1}
    onPress={()=>{this.props.navigation.navigate('Fat')}} >

    <View style={{flexDirection:'row',
    justifyContent:'space-around',}}>

    <Text style={styles.textbmi}>BODY FAT CALCULATOR</Text>
    <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAiUlEQVRIie3UOwqAQAxFUXE9VlZ+O1uXbCWuRxwXcC1UEBl/mMTGVw9zyCMkCP5IBoiA3AIamdMClSa0TwfUGpDzYPITAtny6VHEwQJoTkDZSr8AqxuVJlZgLwZtQG+lvrehuC6Zi+qcNrAuQ/oG0F1vC8DmBGF4VGUrOoEGlQk8UAyUasCfJ5kAOrgaJFB1+vAAAAAASUVORK5CYII="}}
    style={{height:25,width:25,marginTop:36}}></Image>

    </View>

    </TouchableOpacity>

    <TouchableOpacity
    style={styles.container}
    onPress={()=>{this.props.navigation.navigate('Pace')}} >

    <View style={{flexDirection:'row',
    justifyContent:'space-around',}}>

    <Text style={styles.textbmi}>PACE CALCULATOR</Text>
    <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAiUlEQVRIie3UOwqAQAxFUXE9VlZ+O1uXbCWuRxwXcC1UEBl/mMTGVw9zyCMkCP5IBoiA3AIamdMClSa0TwfUGpDzYPITAtny6VHEwQJoTkDZSr8AqxuVJlZgLwZtQG+lvrehuC6Zi+qcNrAuQ/oG0F1vC8DmBGF4VGUrOoEGlQk8UAyUasCfJ5kAOrgaJFB1+vAAAAAASUVORK5CYII="}}
    style={{height:25,width:25,marginTop:36}}></Image>

    </View>

    </TouchableOpacity>


  
      </SafeAreaView>

    );
  }
}
const styles=StyleSheet.create({
  
  
container:{

      marginTop:40,
      height:100,
      width:340,
      backgroundColor:'#454545',
      alignSelf:'center',
      borderRadius:10
    },

    containerfirst:{

      marginTop:170,
      height:100,
      width:340,
      backgroundColor:'#454545',
      alignSelf:'center',
      borderRadius:10
    },

    container1:{

        marginTop:40,
        height:100,
        width:340,
        backgroundColor:'#b61827',
        alignSelf:'center',
        borderRadius:10
      },
    
   textbmi:{
    color:"#ffffff",
    fontSize:22,
    marginTop:35
    },
    

    
})
export default DetailsScreen