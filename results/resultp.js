import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,SafeAreaView,Slider, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';



class PaceresScreen extends React.Component
{

    _renderItem= ({item,index}) => {
        return(
            <View style={styles.item}>
                <Text>{item.key}</Text>
            </View>
        )
    }
    
  render()
  {
      

const datalist=[{key:'1K'},{key:this.props.navigation.state.params.res},{key:'3K'},{key:this.props.navigation.state.params.res*3},{key:'5K'},{key:this.props.navigation.state.params.res*5}]
const numColumns=2 
    return(

        <SafeAreaView style={{flex:1,backgroundColor:"#1e1e1e"}}>

            <Text style={{textAlign:'center',fontSize:30,color:"#2ECC71",marginTop:50,fontWeight:'bold',}}>Your Result :</Text>
            <View style={styles.container}>

                <Text style={{color:"#2ECC71",fontSize:80,textAlign:'center',marginTop:30,}}>{this.props.navigation.state.params.res} </Text>
                <Text style={{color:"#ffffff",fontSize:30,textAlign:'center',marginTop:10,}}>minutes per kilometre</Text>

                <Text style={{color:"#ffffff",fontSize:18,textAlign:'center',marginTop:30,}}>At this pace, the times required for popular races are:</Text>

                <FlatList
                data={datalist}
                renderItem={this._renderItem}
                keyExtractor={(item,index)=>index.toString()}
                numColumns={numColumns}
                 />
                 

           
            </View>

            <TouchableOpacity
                   style={{height:40,width:170,padding:10,marginTop:40,backgroundColor:'#9e9e9e',alignSelf:'center',borderRadius:20}}
                   onPress={()=>{this.props.navigation.navigate('Details')}}>
                  <Text style={styles.textbutton}>Back to Main Menu</Text>

            </TouchableOpacity>

            

        </SafeAreaView>
      
   
    )

  }

 

}

const styles = StyleSheet.create({
    container:{

        marginTop:30,
        height:450,
        width:'100%',
        backgroundColor:'#454545',
        alignSelf:'center',
        borderRadius:10
      },


  item:
  {
    backgroundColor:"#9e9e9e",
    alignItems:'center',
    justifyContent:'center',
    height:50,
    flex:1,
    margin:1,
    marginTop:10,
    
    

    
  },
  textbutton:
  {
    
    color:'#000000',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    alignSelf:'center'

  },
});




export default PaceresScreen