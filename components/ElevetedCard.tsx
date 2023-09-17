/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevetedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevetedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEle]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardEle]}>
          <Text>ME</Text>
        </View>

        <View style={[styles.card, styles.cardEle]}>
          <Text>To</Text>
        </View>

        <View style={[styles.card, styles.cardEle]}>
          <Text>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardEle]}>
          <Text>More</Text>
        </View>

        <View style={[styles.card, styles.cardEle]}>
          <Text>😎</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  container: {

    padding: 8,
  },
  card: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    borderRadius:4,
    margin:8,
  },
  cardEle: {
    backgroundColor:'#3f96ff',
    elevation:4,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'teal',
    shadowOpacity:0.5,
    shadowRadius:5,
  },
});
