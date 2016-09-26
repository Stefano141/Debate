'use strict'

import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';
class loginView extends Component{
  render(){
    return(
      <Image style={styles.container} source={{uri:'https://static.pexels.com/photos/2855/landscape-mountains-nature-lake.jpg'}}>
        <View>
          <Text style={styles.title}>Tools</Text>
          <TouchableHighlight style={styles.button} onPress={(this.onLogin.bind(this))}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
  onLogin(){
    Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => this.props.navigator.push({
      title: 'Dashboard',
      name:'Dashboard',
      passProps: {}
    })},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]
  )
  }
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height:30,
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 40,
    marginBottom:10,
    borderRadius:8,
    borderWidth:1
  },
  textButtom: {
    color: 'white'
  },
  title:{
    marginTop:100,
    fontSize: 20,
    textAlign:'center'
  }
});
module.exports = loginView;
