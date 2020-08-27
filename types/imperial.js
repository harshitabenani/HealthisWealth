import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,SafeAreaView,Slider,ScrollView} from 'react-native'


class ImperialScreen extends React.Component
{
    constructor(props){
        super(props)
        this.state={
    
        height:40.00,
        weight: 0.00,
        minHeight: 40.00,
        maxHeight: 80.00,
        bmi:0.00
        } 
 }

 Sum=()=>{

    n1=parseFloat(this.state.height)
    n2=parseFloat(this.state.weight)

    
   this.state.bmi=((n2*703)/(n1*n1))
    this.state.bmi=this.state.bmi.toFixed(3)

    if(n2==0.00||this.state.height==''){

      alert("Please enter the empty fields!!") 
    }
    else{

    this.props.navigation.navigate('Result',{res:this.state.bmi})

    }

 }
     
    
  
  render()
  {
    return(

        <ScrollView style={{flex:1,backgroundColor:"#1e1e1e"}}>
            <View>
                <Text style={styles.textheight}>Enter Your Height (in inches):</Text>
            <Slider style={{ width: 300,marginTop:20,alignSelf:'center'}}
                    step={0.1}
                    minimumValue={this.state.minHeight}
                    maximumValue={this.state.maxHeight}
                  
                    onValueChange={height => this.setState({ height })}

                    thumbTintColor='#fce495'
                    maximumTrackTintColor='#d3d3d3' 
                    minimumTrackTintColor='#fce495' />

              <View style={styles.textCon}>
                    <Text style={styles.colorGrey}>{this.state.minHeight} in</Text>
                    <Text style={styles.colorYellow}>
                        {this.state.height+ 'in'}
                    </Text>
                    <Text style={styles.colorGrey}>{this.state.maxHeight} in</Text>
                </View>

                <View>
                <Text style={styles.textweight}>Enter Your Weight (in pounds):</Text>
                <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight"
               placeholderTextColor = "#fce495"
               autoCapitalize = "none"
               keyboardType="decimal-pad"
               onChangeText = {weight=>this.setState({weight})}/>
                </View>

                <TouchableOpacity
                onPress={()=>{this.Sum()}}
               style={{backgroundColor:"#fff176", padding: 15,height:60,width:150,marginTop:100,alignSelf:'center'}}>
             <Text style={styles.textbutton}>CALCULATE</Text>

                </TouchableOpacity>


            </View>

        </ScrollView>
      
   
    )

  }

 

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    textCon: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center'
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: '#fce495'
    },
    textheight:
    {
      paddingTop:12,
      color:'#ffffff',
      fontSize:15,
      fontWeight:'bold',
      marginTop:170,
      marginLeft:20
    },
    textweight:
    {
      paddingTop:12,
      color:'#ffffff',
      fontSize:15,
      fontWeight:'bold',
      marginTop:40,
      marginLeft:20
    },
    input: {
        marginTop: 20,
        height: 40,
        width:300,
        alignSelf:'center',
        borderColor: '#ffffff',
        borderWidth: 1,
        color:"#ffffff",
        padding:10,
    
     },
     textbutton:
  {
    paddingTop:7,
    color:'#000000',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    alignSelf:'center'

  },
});




export default ImperialScreen