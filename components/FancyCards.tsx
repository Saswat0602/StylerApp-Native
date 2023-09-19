/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.heading}>Treanding Places</Text>
      <View style={[styles.card, styles.cardEle]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titles}> Canyon</Text>
          <Text style={styles.label}> Saudi</Text>
          <Text style={styles.desc}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aut inventore pariatur iure ab. Sint ipsum dignissimos esse. Maxime
            pariatur consequatur animi ipsa. Omnis earum eveniet nobis ea quos
            odio.
          </Text>
          <Text style={styles.footer}> near hear</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {},
  card: {},
  cardEle: {},
  img: {
    height: 180,
  },
  cardBody:{

  },
  titles:{

  },
  label:{

  },
  desc:{

  },
  foooter:{

  },
});
