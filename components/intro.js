import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import logo from '../assets/ios.png';

const Intro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.img} />
        <Text style={{color: '#a5a5a5', fontSize: 30}}>IOS Calculator</Text>
        <Text style={{color: '#ff9e0a', fontSize: 10}}>
          Designed and Developed by Arqum Malik
        </Text>
      </View>
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
