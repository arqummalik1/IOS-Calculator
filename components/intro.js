import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import logo from '../assets/ios.png';

const Intro = () => {
  return (
    <View style={styles.container}>
        <Text style={{color : "#a5a5a5", fontSize : 35}}> IOS Calculator</Text>
      <View style={styles.inner}>
        <Image source={logo} style={styles.img} />
      </View>
      <Text style={{color : "#fff", fontSize : 10, marginTop : 0}}>Designed and Developed by Arqum Malik</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  inner: {
    // display:"flex",
    width: '100%',
    height: '50%',
    backgroundColor: 'inherit',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '40%',
    height: '40%',
  },
});
export default Intro;
