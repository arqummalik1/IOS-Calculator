import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import logo from '../assets/calculator.jpg';


const Intro = () => {
    return (
        <View style={styles.container}>
            <View style = {styles.inner}>
                <Image source = {logo} style={styles.img}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
display : 'flex',
height : "100%",
alignItems : 'center',
justifyContent: 'center',
backgroundColor:"#fff"

    },
    inner : {
        display:"flex",
        width : "80%",
        height: "50%",
        backgroundColor:"inherit"
    },
    img : {
        width: "100%",
        height: "100%"
    }
})
export default Intro;