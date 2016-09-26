/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  Navigator,
  TouchableHighlight
} from 'react-native';
var NavigatorBarRouteMapper={
  LeftButton: function(route, navigator, index){
    return(
      <TouchableHighlight onPress={()=> {
        if(index > 0){
          navigator.pop();
        }
      }}>
      <Text sytle={{marginTop:10, marginLeft:10, color:'yellow'}}>Back</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function (route,navigator,index){
    return null;
  },
  Title: function (route,navigator,index){
    return (
      <Text sytle={{marginTop:10, color:'yellow'}}>
      {route.name}
      </Text>
    )
  }
};
const Login = require('./src/components/loginView')
const Dashboard= require('./src/components/dashboardView')
class Tools extends Component{
  renderScene(route,navigator){
    switch(route.name){
      case 'Login':
      return(
        <Login navigator={navigator} route={route}/>
      )
      case 'Dashboard':
        return(
          <Dashboard navitagor={navigator} route={route}/>
        )
    }
  }
  render(){
    return(
      <Navigator style={{backgroundColor:'#fff'}}
      initialRoute={{name: 'Login'}}
      renderScene={this.renderScene}
      configureScene={(route)=>{
        if(route.sceneConfig)
        {return route.sceneConfig;}
        return Navigator.SceneConfigs.FloatFromRight}}
        navigatonBar={
          <Navigator.navigatonBar routeMapper={NavigatorBarRouteMapper}/>
      }/>
    );
  }
}
const styles= StyleSheet.create({

});
AppRegistry.registerComponent('Tools', () => Tools);
