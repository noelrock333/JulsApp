import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const PokemonStats = ({current}) => {
  return (
    <View>
      <Text>Estadisticas: {current && current.base_experience} </Text>
    </View>
  );
};

const mapStateToTops = (state) => {
  console.log(state);
  return {
    current: state.pokemons.current,
  };
};

export default connect(mapStateToTops)(PokemonStats);
