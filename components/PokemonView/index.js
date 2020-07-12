import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Image, TextInput, Button} from 'react-native';
import styles from './styles';
import {setCurrentPokemon, fetchPokemon} from '../../redux/actions/pokemons';
import {connect} from 'react-redux';

const PokemonView = ({setPokemon, getPokemon, current}) => {
  // const [imageUrl, setImageUrl] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput onChangeText={setPokemonName} style={styles.pokemonInput} />
        <Button
          title="Obtener pokemon"
          onPress={() => getPokemon(pokemonName)}
        />
        {current && (
          <Image
            style={styles.pokemonImage}
            source={{uri: current.sprites.front_default}}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({pokemons}) => {
  return {
    current: pokemons.current,
  };
};

const mapDispatchToProps = {
  setPokemon: setCurrentPokemon,
  getPokemon: fetchPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonView);
