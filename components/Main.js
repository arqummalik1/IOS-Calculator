import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './MainStyles';

const Main = () => {
  const scrollViewRef = useRef();
  const [value, setValue] = useState('0');
  const [bracketOpen, setBracketOpen] = useState(false);
  const handlePress = val => {
    // console.log('Pressed', val);

    if (val == 'AC') {
      setValue('0');
    } else if (val == '=') {
      try {
        if (
          (value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length
        ) {
          // console.log('equal brackets')
          if (
            value.slice(-1) == '+' ||
            value.slice(-1) == '-' ||
            value.slice(-1) == '*' ||
            value.slice(-1) == '/' ||
            value.slice(-1) == '.' ||
            value.slice(-1) == '%'
          ) {
            setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`);
          } else {
            setValue(`${eval(value.replace('()', '(0)'))}`);
          }
        } else {
          console.log('unequal brackets');
        }
      } catch (e) {
        setValue('Format Error');
      }
    } else if (val == 'back') {
      setValue(value.slice(0, -1));
    } else if (val == '( )') {
      if (value == '0') {
        setValue('(');
        setBracketOpen(true);
      } else if (
        value.slice(-1) == '+' ||
        value.slice(-1) == '-' ||
        value.slice(-1) == '*' ||
        value.slice(-1) == '/' ||
        value.slice(-1) == '.' ||
        value.slice(-1) == '%'
      ) {
        setValue(value + '(');
        setBracketOpen(true);
      } else {
        if (bracketOpen == true) {
          setValue(value + ')');
          setBracketOpen(false);
        } else {
          setValue(value + '(');
          setBracketOpen(true);
        }
      }
    } else {
      if (value == '0') {
        if (
          val == '+' ||
          val == '-' ||
          val == '*' ||
          val == '/' ||
          val == '%' ||
          val == '.'
        ) {
          setValue(value + val);
        } else {
          setValue(val);
        }
      } else if (isNaN(val)) {
        if (
          value.slice(-1) == '+' ||
          value.slice(-1) == '-' ||
          value.slice(-1) == '*' ||
          value.slice(-1) == '/' ||
          value.slice(-1) == '.' ||
          value.slice(-1) == '%'
        ) {
          setValue(value.slice(0, -1) + val);
        } else {
          setValue(value + val);
        }
        //console.log(value.slice(-1))
        //setValue(value + val)
      } else {
        setValue(value + val);
      }
    }
  };

  return (
    <View style={styles.mainScreen}>
      <ScrollView
        style={styles.mainScreenDisplay}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <Text style={styles.mainScreenText}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </ScrollView>

      <View style={styles.mainScreenKeypad}>
        {/* first row of calculator started */}

        <View style={styles.keypadRow}>
          <TouchableOpacity onPress={() => handlePress('AC')}>
            <View style={styles.buttonMainTop}>
              <Text style={styles.buttonTextTop}>AC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('( )')}>
            <View style={styles.buttonMainTop}>
              <Text style={styles.buttonTextTop}>( )</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('%')}>
            <View style={styles.buttonMainTop}>
              <Text style={styles.buttonTextTop}>%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('/')}>
            <View style={styles.buttonMainColor}>
              <Text style={styles.buttonText}>/</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* second row of claculator
         */}

        <View style={styles.keypadRow}>
          <TouchableOpacity onPress={() => handlePress('7')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('8')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('9')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('*')}>
            <View style={styles.buttonMainColor}>
              <Text style={styles.buttonText}>*</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* third row of calculator */}

        <View style={styles.keypadRow}>
          <TouchableOpacity onPress={() => handlePress('4')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('5')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('6')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('-')}>
            <View style={styles.buttonMainColor}>
              <Text style={styles.buttonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* fourth row of calculator
         */}
        <View style={styles.keypadRow}>
          <TouchableOpacity onPress={() => handlePress('1')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('2')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('3')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('+')}>
            <View style={styles.buttonMainColor}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* fifth row of calculator
         */}

        <View style={styles.keypadRow}>
          <TouchableOpacity onPress={() => handlePress('0')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('.')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('back')}>
            <View style={styles.buttonMain}>
              <Text style={styles.buttonText}>{`<`}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('=')}>
            <View style={styles.buttonMainColor}>
              <Text style={styles.buttonText}>=</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Main;
