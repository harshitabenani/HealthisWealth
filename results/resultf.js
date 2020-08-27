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
      

const datalist=[{key:'Under 21 %'},{key:'Underfat'},{key:'21 - 33 %'},{key:'Healthy'},{key:'33 - 39 %'},{key:'Overweight'},{key:'Above 39 %'},{key:'Obese'}]
const datalist1=[{key:'Under 23 %'},{key:'Underfat'},{key:'23 - 35 %'},{key:'Healthy'},{key:'35 - 40 %'},{key:'Overweight'},{key:'Above 40 %'},{key:'Obese'}]
const datalist2=[{key:'Under 24 %'},{key:'Underfat'},{key:'24 - 36 %'},{key:'Healthy'},{key:'36 - 42 %'},{key:'Overweight'},{key:'Above 42 %'},{key:'Obese'}]
const numColumns=2 
    return(

        <SafeAreaView style={{flex:1,backgroundColor:"#1e1e1e"}}>

            <Text style={{textAlign:'center',fontSize:30,color:"#ffffff",marginTop:50,fontWeight:'bold',}}>Your Result :</Text>
            <View style={styles.container}>

                <Text style={{color:"#2ECC71",fontSize:80,textAlign:'center',marginTop:30,}}>{this.props.navigation.state.params.res} </Text>
              

                <Text style={{color:"#ffffff",fontSize:18,textAlign:'center',marginTop:20,}}>Index :</Text>
                

                {this.props.navigation.state.params.age1>=20&&this.props.navigation.state.params.age1<=40?
                <FlatList
                data={datalist}
                renderItem={this._renderItem}
                keyExtractor={(item,index)=>index.toString()}
                numColumns={numColumns}
                 />
                 :null}

                 {this.props.navigation.state.params.age1>=41&&this.props.navigation.state.params.age1<=60?
                <FlatList
                data={datalist1}
                renderItem={this._renderItem}
                keyExtractor={(item,index)=>index.toString()}
                numColumns={numColumns}
                 />
                 :null}

                {this.props.navigation.state.params.age1>=61&&this.props.navigation.state.params.age1<=79?
                <FlatList
                data={datalist2}
                renderItem={this._renderItem}
                keyExtractor={(item,index)=>index.toString()}
                numColumns={numColumns}
                 />
                 :null}

           
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
    marginTop:15,
    
    

    
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