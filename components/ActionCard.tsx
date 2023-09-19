/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View, Linking, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={[styles.heading, styles.elevatedCard]}>
        <View style={styles.headingCont}>
          <Text style={styles.headerText}>Whats new in React 18.0</Text>
        </View>
        <Image
          source={{
            uri: 'https://unsplash.com/photos/a-hand-holding-a-white-paper-cut-out-of-a-video-play-button-KPRNbxRrl44',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyConatainer}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ut
            cupiditate repudiandae placeat quis accusamus consequatur at
            officiis facere delectus? Quas sit modi assumenda nemo quaerat fuga
            repellat distinctio incidunt.
          </Text>
        </View>

        <View style={styles.footerConatainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/Saswat0602')}>
            <Text style={styles.socials}>Find More...</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openWebsite(' https://saswatranjan.netlify.app/')}>
            <Text style={styles.socials}>Visit Here...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
 

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
  },
  elevatedCard: {},
  headingCont: {},
  headerText: {},
  cardImage: {
    height: 376,
  },
  bodyConatainer: {},
  footerConatainer: {},
  socials:{

  },
});