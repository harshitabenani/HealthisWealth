import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView,SafeAreaView, Slider,Picker,Dimensions} from 'react-native'


const devHeight = Dimensions.get('screen').height ;
const devWidth = Dimensions.get('screen').width; 

class FatScreen extends React.Component{

  constructor(props){
    super(props)
    this.state={

    name:'',
    age: '1',
    backgroundColor1:'#454545',
    backgroundColor2:'#454545',
    pressed:false,
    height:100.00,
    weight: 0.00,
    minHeight: 100.00,
     maxHeight: 215.00,
     bmi:0.00,
     fat:0.00
    } 
    
  }

  handlename = (text) => {
    this.setState({ name: text })
 }

changeColor=()=>{
  if(!this.state.pressed){
    this.setState({ pressed: true,backgroundColor1: '#e91e63', backgroundColor2: '#454545'});
 } else {
   this.setState({ pressed: false, backgroundColor1: '#454545' ,backgroundColor2: '#e91e63'});
 }

}

Sum=()=>{

    n1=parseFloat(this.state.height)
    n2=parseFloat(this.state.weight)

    
   this.state.bmi=((n2)/(n1*n1))*10000
   

    this.state.fat=(1.20*this.state.bmi)+(0.23*this.state.age)-5.4
    this.state.fat=this.state.fat.toFixed(2)
   
 

    if(n2==0.00||this.state.height==''||this.state.age=='1'){

      alert("Please enter the empty fields!!") 
    }
    else{

    
      this.props.navigation.navigate('Fatres',{age1:this.state.age})
      this.props.navigation.navigate('Fatres',{res:this.state.fat})

    }

  


    

 }


render() {

  const age=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
    return (

        <SafeAreaView style={{flex:1,backgroundColor:"#1e1e1e"}}>
      
<ScrollView >
<View style={{width: '100%', height: devHeight + devHeight*25/100 }}>
  <View style={{
    flexDirection:'row',
    justifyContent:'space-around'
  
  }}>


<TouchableOpacity
style={{backgroundColor:this.state.backgroundColor1, padding: 15,height:150,width:170,borderRadius:10,marginTop:20}}
onPress={()=>this.changeColor()}
  >
    <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABLElEQVRIidWUzUoDMRSFb9xaV9rWB3Ff9QVE8UF0IcWd2geytK+h1B8QCvoM1Wp31s9FTyAMM5Nk6KYHQiBz7vmSSzJmmy7XpAggGuycMzPbagLIUSOAK8jMOmb2ut6tSUAbeGElP0db2CT8DdhfG6AsXOtxANABBsAE+AEWwLPWuiVtaQe19QDgHJhTrRkwLQuPAhT+J8890AO2NQ6BYQCaFsNrAWqL3/lVzQn7wUm6la0oKRz4nSd4R/Le5QCeVNRL8B7JO8kBfKuoleDdkXcR84a/ipzH4X+SvzmAD80HCQDvec8BjDVfJAAuCzVxsXqdX+ptv8Z3HVzT3WSAis+ApQJGui0tjWNgrG9L4CQrPICcAp9Ua9Y4PIDsAbfAo67vHHgAbrLbsvH6B2xt5RcyfQnQAAAAAElFTkSuQmCC"}}
style={{height:70,width:70,marginLeft:35,marginTop:5}}>

</Image>
<Text style={styles.text}>Male</Text>

</TouchableOpacity>

<TouchableOpacity
style={{backgroundColor:this.state.backgroundColor2, padding: 15,height:150,width:170,borderRadius:10,marginTop:20}}
onPress={()=>this.changeColor()}
  >

<Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJ0lEQVRIieWTvU4CQRSFr8YWAv7wLHYWFLRGXF6FRAsHpeCt4AWIxIrGRl+AHzUWhs9miNdh9u6Oa2M8ySSzM+d+5+7Nrsi/FeCAUdFZFfhWo7wzEZGDymkifeBURM7U2XtlKtAnrpvKcBUyDuDj34S73ea/z98qbgFD4B54Ad6AB+AaaETgk+DZWfAMWOV0hw/bgQWh8QAP3xjwUC6odxa8FXT+BHSBml/nwFzdvwKNwnmrgGEAP4x4mv5uq6uUgJkq7Bq+TPlmKQF6PDXDV9djKuLul+7gS3tq/5ES8Kj2baOmk1NjC7hTrz4HmhHPEfCsfIOUgNhnmvmZ14FeAF8Ax6UDfMgl5X60DXCRBA9ClgZ88WO4CjkBboEpsPZrCgySx/Ln9Ql5Y5OOkm12CgAAAABJRU5ErkJggg=="}}
style={{height:70,width:70,marginLeft:35,marginTop:5}}>

</Image>
<Text style={styles.text}>Female</Text>

</TouchableOpacity>

  
  </View>

 

 <Text style={styles.textheight}>Enter Your Height (in cm):</Text>
            <Slider style={{ width: 300,marginTop:20,alignSelf:'center'}}
                    step={1}
                    minimumValue={this.state.minHeight}
                    maximumValue={this.state.maxHeight}
                  
                    onValueChange={height => this.setState({ height })}

                    thumbTintColor='#fce495'
                    maximumTrackTintColor='#d3d3d3' 
                    minimumTrackTintColor='#fce495' />

              <View style={styles.textCon}>
                    <Text style={styles.colorGrey}>{this.state.minHeight} cm</Text>
                    <Text style={styles.colorYellow}>
                        {this.state.height+ 'cm'}
                    </Text>
                    <Text style={styles.colorGrey}>{this.state.maxHeight} cm</Text>
                </View>

                <View>
                <Text style={styles.textweight}>Enter Your Weight (in kg):</Text>
                <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight"
               placeholderTextColor = "#fce495"
               autoCapitalize = "none"
               keyboardType="decimal-pad"
               onChangeText = {weight=>this.setState({weight})}/>
                </View>

            

                <View>

<Text style={styles.textage}>Please Enter Your Age:</Text>

<Picker
    selectedValue={this.state.age}
    onValueChange={(value) => {this.setState({age: value})}}>
    <Picker.Item label="Age" value="0" color="#ffffff"/>
    {age.map((age)=>(

      <Picker.Item label={age} value={age} color="#ffffff"/>

    ))}
</Picker>
 </View>

 <TouchableOpacity
                onPress={()=>{this.Sum()}}
               style={{backgroundColor:"#fff176", padding: 15,height:50,width:150,marginTop:20,alignSelf:'center'}}>
             <Text style={styles.textbutton}>CALCULATE</Text>

                </TouchableOpacity>

 
      </View>
      </ScrollView>
      </SafeAreaView>

    );
  }
}
const styles=StyleSheet.create({
  
  input: {
    marginTop: 10,
    height: 40,
    width:350,
    alignSelf:'center',
    borderColor: '#ffffff',
    borderWidth: 1,
    color:"#ffffff",
    padding:10
 },

  text:
  {
    paddingTop:12,
    color:'#ffffff',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:5
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

  textname:
  {
    paddingTop:12,
    color:'#ffffff',
    fontSize:15,
    fontWeight:'bold',
    marginTop:20,
    marginLeft:11
  },


  textage:
  {
    paddingTop:12,
    color:'#ffffff',
    fontSize:15,
    fontWeight:'bold',
    marginTop:10,
    marginLeft:11
  },

  container:{

      marginTop:7,
      height:150,
      width:350,
      backgroundColor:'#454545',
      alignSelf:'center',
      borderRadius:10
    },

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
      marginTop:10,
      marginLeft:20
    },
    textweight:
    {
      
      color:'#ffffff',
      fontSize:15,
      fontWeight:'bold',
      marginTop:20,
      marginLeft:20
    },
    input: {
        marginTop: 10,
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
    paddingTop:3,
    color:'#000000',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    

  },

    

 


})
export default FatScreen