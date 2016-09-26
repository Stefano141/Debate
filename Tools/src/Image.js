import React, { View, Component, StyleSheet } from 'react-native';
 import BlurryOverlay from 'react-native-android-blurryoverlay';

 export default class extends Component {
   render() {
     return (
       <View {...this.props}>
        <BlurryOverlay radius={5} sampling={8} color="#00FFFF00" style={[{flex: 1, position: "absolute", left: 0, >
         {this.props.children}
       </View>
     );
   }
 }
