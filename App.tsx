import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevetedCard from './components/ElevetedCard';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetedCard />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
