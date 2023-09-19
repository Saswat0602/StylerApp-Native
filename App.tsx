import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevetedCard from './components/ElevetedCard';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetedCard />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
