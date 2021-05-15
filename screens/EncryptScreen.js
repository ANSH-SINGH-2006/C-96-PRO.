import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView
  
} from 'react-native'
import MyHeader from '../Components/MyHeader';

import YoutubeEmbed from '../Components/YotubeEmbed'

export default class EncryptScreen extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader/>
        <ScrollView>
        <View style={{flex:1,  alignItems: 'center', backgroundColor: '#FCE8E8'}}>
          
            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>Python Full Course</Text>
            <br/><br/><br/>
            <YoutubeEmbed embedId="rfscVS0vtbw" />

            <br/> <hr width="100%"/> <br/>

            
            
            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>HTML Full Course</Text>
            <br/><br/><br/>
            <YoutubeEmbed embedId="pQN-pnXPaVg" />

            <br/> <hr width="100%"/> <br/>


            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>CSS Full Course</Text>
            <br/><br/><br/>
            <YoutubeEmbed embedId="ieTHC78giGQ" />

            <br/> <hr width="100%"/> <br/>


            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>JavaScript Full Course</Text>
            <br/><br/><br/>
            <YoutubeEmbed embedId="PkZNo7MFNFg" />

            <br/> <hr width="100%"/> <br/>


            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>PHP Full Course</Text>
            <br/><br/><br/>
            <YoutubeEmbed embedId="OK_JCtrrv-c" />

            <br/> <hr width="100%"/> <br/>

            <Text style={{color: '#B22222', fontSize: 30, fontFamily: 'Courier New', fontWeight: 'bold'}}>Bootstrap Full Course</Text>
            <br/><br/><br/>
            <YoutubeEmbed embedId="AKQmd0d1K3E" />







        </View>
        </ScrollView>
        </View>
    )
}
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:250,
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:2,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )