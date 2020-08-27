import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class ImageScreen extends React.Component
{
    static navigationOptions={
      
      alignItems:'center',
     
     headerShown: false,
}
     
     componentDidMount() 
     {
    setTimeout(() => {this.props.navigation.navigate('Details')
      
      }, 2000);
  }
  render()
  {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#606263','#000']}
          style={{flex:1,alignSelf:'stretch',}} >
           
           <Image
  source={{uri:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/a8b9806a5181dd6dfca458adc58c545b/assets/preview_380fc6685f9af3ed5b65afef04ef71e0.jpg'}}
  style={{marginTop:300,height:170,width:170,alignSelf:'center',borderRadius:100}}
  />
      
      
     
  </LinearGradient>
</View>
   
    )

  }

 

}



export default ImageScreen