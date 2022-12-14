import {React,useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './components/Main';
import Intro from './components/intro';


const App = () => {
  const [isLoaded, setisLoaded] = useState(false);

  setTimeout(() => {
    setisLoaded(true);
  }, 1000);
  return (
    <View style = {styles.container}>
     {isLoaded ? <Main/>: <Intro/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container :{

  }
});

export default App;
