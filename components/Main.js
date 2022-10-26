import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from './MainStyles';

const Main = () => {
  return (
    <View style={styles.mainScreen}>
      <ScrollView style={styles.mainScreenDisplay}>
        <Text style={styles.mainScreenText}>123</Text>
      </ScrollView>

      <View style={styles.mainScreenKeypad}>
        {/* first row of calculator started */}

        <View style={styles.keypadRow}>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>AC</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>( )</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>%</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>/</Text>
            </View>
          </Pressable>
        </View>

        {/* second row of claculator
         */}

        <View style={styles.keypadRow}>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>7</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>8</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>9</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>*</Text>
            </View>
          </Pressable>
        </View>

        {/* third row of calculator */}

        <View style={styles.keypadRow}>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>4</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>5</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>6</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>-</Text>
            </View>
          </Pressable>
        </View>

        {/* fourth row of calculator
         */}
        <View style={styles.keypadRow}>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>1</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>2</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>3</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </Pressable>
        </View>

        {/* fifth row of calculator
         */}

        <View style={styles.keypadRow}>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>0</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>.</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>Back</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Main;
