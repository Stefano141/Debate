'use strict'

import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';
class dashboardView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Soy el componente dash</Text>
      </View>
    );
  }

}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title:{
    fontSize: 20
  }
});
module.exports = dashboardView;
