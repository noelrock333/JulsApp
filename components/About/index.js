import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import styles from './styles';

// class About extends React.Component {
//   state = {
//     counter: 3,
//   };

//   componentDidMount() {
//     alert('Ya me monté');
//   }

//   aumentar = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   };

//   disminuir = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     });
//   };

//   render() {
//     return (
//       <SafeAreaView>
//         <View style={styles.mainView}>
//           <Text style={styles.myText}>Acerca de mi app</Text>
//           <Text>{this.state.counter}</Text>
//           <Text>{this.props.title}</Text>
//           <Button onPress={this.aumentar} title="Aumentar" color="green" />
//           <Button onPress={this.disminuir} title="Disminuir" color="green" />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

const About = ({title, navigation}) => {
  const [counter, setCounter] = useState(3);

  // useEffect(() => {
  //   alert('Ya me monté');
  // }, []);

  const navegar = () => {
    navigation.navigate('PokemonView');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Text style={styles.myText}>Acerca de mi app</Text>
        <Text>{counter}</Text>
        <Text>{title}</Text>
        <Button
          onPress={() => setCounter(counter + 1)}
          title="Aumentar"
          color="green"
        />
        <Button
          onPress={() => setCounter(counter - 1)}
          title="Disminuir"
          color="green"
        />
        <Button onPress={navegar} title="Navegar" />
      </View>
    </SafeAreaView>
  );
};

export default About;
