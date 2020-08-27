import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,SafeAreaView,Slider, ImageBackground} from 'react-native'


class ResultScreen extends React.Component
{
    
  render()
  {
    return(

        <SafeAreaView style={{flex:1,backgroundColor:"#1e1e1e"}}>

            <Text style={{textAlign:'center',fontSize:30,color:"#ffffff",marginTop:50,fontWeight:'bold',}}>Your Result :</Text>
            <View style={styles.container}>
            <View>

                
                   {this.props.navigation.state.params.res>=18.5&&this.props.navigation.state.params.res<=24.9?
                   <View>
                   <ImageBackground source={{uri:"data:image/png;base64,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"}}
                   style={{height:200,width:200,alignSelf:'center',marginTop:15}}>
                       <Text style={styles.textres}>{ this.props.navigation.state.params.res}</Text>
                   </ImageBackground>
                   <Text style={{color:"#2ECC71",textAlign:'center',fontSize:20,marginTop:20}}>Normal</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:50}}>Range: 18.5 - 24.9</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:30}}>You have a health body mass index. Good Job!</Text>
                   </View>
                   :null}

                   

                    {this.props.navigation.state.params.res>=25&&this.props.navigation.state.params.res<=29.9?
                   <View>
                   <ImageBackground source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFZUlEQVRoge2ZXWwUVRTH/+duu0vbZWZWKbV+NfiAwBNqE0W2TagPxvKg+PVAhPAiUTAaQwgabSTyQEjAAAkQeSMNmqC0JIYaomkj7UICFfWBGHwQIXy0xdCd2X7tbvceH1jizJ2Z/eoUY+jvbc7cc8//7J29Z+ZcYI457m8oiEmYIayzWjNLahNAswQWE/AogLr8kHEGrgnGJUn4mQT3aiusQSLImcaeUQLjp2sbp6l6MwjrATxWpvtVMDqrOHugrnXiZqUaKkog2a/HCLQdxBsBzKs0eJ4pMB2W0/gstiqZLNe57ARGB4xXBfgQgIXl+hZhWII2xeLJrnKcSk6AjyFkNRpfgPh9nyEpME6yQC+BfxU5+Ve0diwJAGMTUUNWiUWco+VEaAOwGkDUWxHv065bW+hN5AJLgPswz6zWvyJgjcftITDvmJyoOfLQi8Pjpcw3dKqhrqZ2cgOIOgA0uOIB3XrWXEurMFVsrqIJ8DGEzEf0b4nxinIrDeKd6Uxkz8JVt8ZKEa4y0lcfjVRntwL8EYCwIy7Qrd8w3yi2EkUTMPuNfR6PzTAJ+ar2fOpM+bLdWAOxOEMeh+t/xXv1uPVhId+CCeT/sMeVSS/mEGp/ID56tSK1frESRpNg9AC8zB6MmF7TWpLdfn6+CdwejOmhKf4d4Eab+W9mPGu0mH8GIVrlThJ8Ds6VGGbGUqPFHPXyEX6ThaZ4hyI+TUK+PFviASC2MnmFIF4HkLGZGwi03c/HM4Hx07WNAL/tMBLvDOqZL4QWH+1nwudK7I13NLnxTGCaqjfDWWGH0pnInsBUFkE3zd0ALttM8/KaXLgSYIYAYZ1i3FHpVlkJ1I40A7ucRrzF7NbrMlhntWYAj9tMqcmJmiOBqyxCJhs+CsD+ozWZCf1pdZx7BSS1OQ04WWqFDZL8ivcoWl5Qx3ktSbPDR6A3aHGlwnDGVrXlbU4k8KT9moh/C15aaRCcsSU5tQEeCRDg2K4ozbO27xdDkHTEVrUB3tvofMfFwpQVsK6SiZpjpmKar47xrcT/F7wSSDkuRuZr90iLizE9qiumlDrGvY0Cjg9sjtATAesqGcnCEVvVBnhvo5ccTjlaHry00mA4Ywt2agO8t9FB+3X+G/Y/QaiFS+C8a4xqIMFq4Vo9dKqhTh0324z01UeZ8JLdJtldVF0JaCusQQD2r61oTe3khsAVFiEczqzDv509ALiirzQvqOPcK0CQYHQqxo5bAwtce/BswT2IEGOboqHTqxXpWQeqOHsAcLQ0GsI8vSVQlQWwNG0bgCabaaoqlznoNdYzgbrWiZtgOuwwEn9sDcTigan0IZUwWgH6VIn9pV//1LcST1eLDoDsTmGGPJHs12etLowmjCbJ/A2Aapt5WGbEdj8f3wQefO62JYH3ALDdTETfjSaMJj+/Skn+pC8Skr+HsyPBJOmdQk3fgu9CsXiyC8T7nVZeJpjPWwOxlpkItpNKGK0UwjkQliqx9mqtyROFfIu+zGnXrS0MqI2leob8MZnQP+GLzpZgOXAPIuaA1iGZfwCwwHEP6NJuWFuLzVFac7cHEVPTv/Zp7l5mYFcmGz5a6of/SF99NBzOrMtvla7HkYEu3TLXUjvSxeYqr73+sLYboA98/MYBnGSgj5h/EUJejhr59noyakgpFjHRU4LQxox2OIuUTTvv1W5YWwNtr9ux+o01THwIHm3xGTJMTO8W6oN6UfYHjdaS7JZZWgKm/UDx/n0JTIF4n8zSknLFA0Ec8oXCm8C8Hs5eUilcAVFnVS5z8J4f8qkwQ1hntGfuHrOCsJjvHLPePUYaI+AaGH9A4Lxk9OorzQtBHLPOMcf9zj/VRv6jGBWFagAAAABJRU5ErkJggg=="}}
                   style={{height:200,width:200,alignSelf:'center',marginTop:15}}>
                      <Text style={styles.textres}>{ this.props.navigation.state.params.res}</Text>
                   </ImageBackground>
                   <Text style={{color:"#F1C40F",textAlign:'center',fontSize:20,marginTop:20}}>Overweight</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:50}}>Range: 25 - 29.9</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:30,padding:10}}>You are slightly overweight. Keep Working!</Text>
                   </View>
                   :null}

                
                   {this.props.navigation.state.params.res<18.5?
                   <View>
                   <ImageBackground source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFiklEQVRoge1ZXWwUVRT+zuy03S2thWC73Q3a1IRfX1A3mLTbpqmkZHepCrovRIgvEgWjMYSg0caNPBASMGACRN5Igz5UWpKyNICpjduSWArqAzFIYi0h+0NVfvq3S3fn+MBGZu7O7F+nTQz93u4359zznd0798w9F1jEIp5skBmTcABSdKTJRcStzOwC0SowVgBYkjaZAuE2GDeIcJWZ+mtdoREKQJlr7DklML6pyZGSeTcTdgB4pkD3W8TotCTpWPWFUKRYDUUlMOZzLyshBAjYCcBabPA04gycTMjy5/VnB+4V6lxwAmFf41YiOgGgplDfHIgx8y5ncKi7EKe8E2C/3xKZiXxJwAcGJhMAggzqJ0r9gqTlz9o70/cAIFpTvhQW1DPzeiJqBdgHoEI3DnDUYXPsoa6ulGkJjLa0WG0VyW8Y2KLzOArCfkqUn6q9eHEqn/mibW1LuHT6bQAdAOw6onpmJuVt9QMD8Vxz5UyA/X5LbCbyHQOvC48SAA5YbPLhmq6ByXyEi7jjb6lITc/uBdHHAEoFYT12m8Of65/ImUB4s/uozrKJSSxttQd/vFy4bJ0Y7W43Mc5AeK+I6Ehtb+ijbL5ZE0i/sGcE+joTvM7ewVvFyTWI5W2oI5LOg7BORTMDbzjPDfYY+Rkm8M/GjVUJW/w3MBwq+i+J8bI9OPiHGaJFhL0NdSRJw9D+E7GHjLV1wcG7ej6S0WQJ28x+QXxCYum1+RIPAM7zl8eY+U0AD1W0vYQQMPLRTWB8U5MDTO8I9AGz1nw2OINDISZ8oeYI2Dm+qcmhZ6+bQErm3dBW2KjFJh82T2Z2TCUrDwEYVVHWtKYMZCTAAUhM2K4hCfuL3SqLwcq+vgQTH9ToIrzFgUy9GUR0pMkF4FkVNUGJ8lPmy8wO2VpyGoD6R6uLDDe+KNplJEDErQIVzLfCmomaroFJMM6rOSJ6RbTLXELMLs0Y1G++vPzAEmtjE1yijc5LTKu1PvjVZF15QxJjE1br2IggzXbFZJm3fT8nZNbG1tYlALoJcKV6dNc6/sBkWXljIl51X6AqRRvDSvx/gd4SmlCPlsWrn1ooMSIqrferBGpCtNFbQpoDNnHqOVNVFYIkaWMTMg7/egnc0IyY15ssK28oDG1sxg3RRqeQ0YgwFgvbgoEgFi66ItroFDKxcLEv2ta2RLSbb9zxt1QA8GiUKEpGUc1IoNYVGgGgPm1VpA/gC4rUdGo7Hnf2AGDMsWHommiXuYQCUIjRKdAd4682ZuzB84WbHk8ZiPdpdAGdeq1I3TpgSdIxAOqWhj2p0B5zZRqjQp7cB6BORcUts3Rcz1Y3geoLoQgDJwX6k3C7222SRkOEvc3NAH+m5hj42qh/aliJy1KzHcK+W0pMZ2M+97zVhUeHeqULjBIVHUvIcsDIxzCB5X0/PWCF3wfAj1lergC9YW9DnZFfsYi2N9eTJPVB25FgJno3W9M367eQMzjUzcBXGpKwjiTpStjX2DQnxSqEvc3NzMowgLWaUMxHnL2hs9l8c37MOWyOPQSIjaVqIvo+3O7+9Lr/+VJdxzxw0+Mpi/gaO0hSLgF4WvOQ0G0vd+7NNUdezd2bHk9ZpWXiW4Pm7igTH5StJafzPfg/6ommtqe3yszlSOieTFZuW9nXl8g1V0Ht9Vg8eoiZPzTwmwIjyMQ/SAr9jDJl9G/5/j0AWJ6sWoqEVK9I/AIRtYLhhbZI/ReGmI/Yy517TW2vqxHe7N5CwAnotMXniBgD72Xrg+qh4AON89xgT1yW16Rf7pz9+zwQZ+BoXJbXFCoeMOOSr4R3MbAD2l5SPhgjoNMyS8cX/JJPBAcgRa82vARFak23PlYBWIHH10iTAG4D+B2gK6wo/Y4NQ9fMuGZdxCKedPwLbmzqnhKKxckAAAAASUVORK5CYII="}}
                   style={{height:200,width:200,alignSelf:'center',marginTop:15}}>
                       <Text style={styles.textres}>{ this.props.navigation.state.params.res}</Text>
                   </ImageBackground>
                   <Text style={{color:"#E74C3C",textAlign:'center',fontSize:20,marginTop:20}}>Underweight</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:50}}>Range: Less than 18.5</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:30,padding:10}}>You are underweight. Start Eating!</Text>
                   </View>
                   :null}

                
                   {this.props.navigation.state.params.res>29.9?
                   <View>
                   <ImageBackground source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFiklEQVRoge1ZXWwUVRT+zuy03S2thWC73Q3a1IRfX1A3mLTbpqmkZHepCrovRIgvEgWjMYSg0caNPBASMGACRN5Igz5UWpKyNICpjduSWArqAzFIYi0h+0NVfvq3S3fn+MBGZu7O7F+nTQz93u4359zznd0798w9F1jEIp5skBmTcABSdKTJRcStzOwC0SowVgBYkjaZAuE2GDeIcJWZ+mtdoREKQJlr7DklML6pyZGSeTcTdgB4pkD3W8TotCTpWPWFUKRYDUUlMOZzLyshBAjYCcBabPA04gycTMjy5/VnB+4V6lxwAmFf41YiOgGgplDfHIgx8y5ncKi7EKe8E2C/3xKZiXxJwAcGJhMAggzqJ0r9gqTlz9o70/cAIFpTvhQW1DPzeiJqBdgHoEI3DnDUYXPsoa6ulGkJjLa0WG0VyW8Y2KLzOArCfkqUn6q9eHEqn/mibW1LuHT6bQAdAOw6onpmJuVt9QMD8Vxz5UyA/X5LbCbyHQOvC48SAA5YbPLhmq6ByXyEi7jjb6lITc/uBdHHAEoFYT12m8Of65/ImUB4s/uozrKJSSxttQd/vFy4bJ0Y7W43Mc5AeK+I6Ehtb+ijbL5ZE0i/sGcE+joTvM7ewVvFyTWI5W2oI5LOg7BORTMDbzjPDfYY+Rkm8M/GjVUJW/w3MBwq+i+J8bI9OPiHGaJFhL0NdSRJw9D+E7GHjLV1wcG7ej6S0WQJ28x+QXxCYum1+RIPAM7zl8eY+U0AD1W0vYQQMPLRTWB8U5MDTO8I9AGz1nw2OINDISZ8oeYI2Dm+qcmhZ6+bQErm3dBW2KjFJh82T2Z2TCUrDwEYVVHWtKYMZCTAAUhM2K4hCfuL3SqLwcq+vgQTH9ToIrzFgUy9GUR0pMkF4FkVNUGJ8lPmy8wO2VpyGoD6R6uLDDe+KNplJEDErQIVzLfCmomaroFJMM6rOSJ6RbTLXELMLs0Y1G++vPzAEmtjE1yijc5LTKu1PvjVZF15QxJjE1br2IggzXbFZJm3fT8nZNbG1tYlALoJcKV6dNc6/sBkWXljIl51X6AqRRvDSvx/gd4SmlCPlsWrn1ooMSIqrferBGpCtNFbQpoDNnHqOVNVFYIkaWMTMg7/egnc0IyY15ssK28oDG1sxg3RRqeQ0YgwFgvbgoEgFi66ItroFDKxcLEv2ta2RLSbb9zxt1QA8GiUKEpGUc1IoNYVGgGgPm1VpA/gC4rUdGo7Hnf2AGDMsWHommiXuYQCUIjRKdAd4682ZuzB84WbHk8ZiPdpdAGdeq1I3TpgSdIxAOqWhj2p0B5zZRqjQp7cB6BORcUts3Rcz1Y3geoLoQgDJwX6k3C7222SRkOEvc3NAH+m5hj42qh/aliJy1KzHcK+W0pMZ2M+97zVhUeHeqULjBIVHUvIcsDIxzCB5X0/PWCF3wfAj1lergC9YW9DnZFfsYi2N9eTJPVB25FgJno3W9M367eQMzjUzcBXGpKwjiTpStjX2DQnxSqEvc3NzMowgLWaUMxHnL2hs9l8c37MOWyOPQSIjaVqIvo+3O7+9Lr/+VJdxzxw0+Mpi/gaO0hSLgF4WvOQ0G0vd+7NNUdezd2bHk9ZpWXiW4Pm7igTH5StJafzPfg/6ommtqe3yszlSOieTFZuW9nXl8g1V0Ht9Vg8eoiZPzTwmwIjyMQ/SAr9jDJl9G/5/j0AWJ6sWoqEVK9I/AIRtYLhhbZI/ReGmI/Yy517TW2vqxHe7N5CwAnotMXniBgD72Xrg+qh4AON89xgT1yW16Rf7pz9+zwQZ+BoXJbXFCoeMOOSr4R3MbAD2l5SPhgjoNMyS8cX/JJPBAcgRa82vARFak23PlYBWIHH10iTAG4D+B2gK6wo/Y4NQ9fMuGZdxCKedPwLbmzqnhKKxckAAAAASUVORK5CYII="}}
                   style={{height:200,width:200,alignSelf:'center',marginTop:15}}>
                       <Text style={styles.textres}>{ this.props.navigation.state.params.res}</Text>
                   </ImageBackground>
                   <Text style={{color:"#E74C3C",textAlign:'center',fontSize:20,marginTop:20}}>Obese</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:50}}>Range: More than 29.9</Text>
                   <Text style={{color:"#ffffff",textAlign:'center',fontSize:20,marginTop:30,padding:10}}>You are obese. Start working out!</Text>
                   </View>
                   :null}
                   
                   </View>
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


  textres:
  {
    paddingTop:12,
    color:'#ffffff',
    fontSize:30,
    fontWeight:'bold',
    marginTop:67,
    textAlign:'center',
    
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




export default ResultScreen