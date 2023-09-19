/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card, styles.cardEle]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titles}>Canyon ......</Text>
          <Text style={styles.label}>Saudi</Text>
          <Text style={styles.desc}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aut inventore pariatur iure ab. Sint ipsum dignissimos esse. Maxime
            pariatur consequatur animi ipsa. Omnis earum eveniet nobis ea quos
            odio.
          </Text>
          <Text style={styles.footer}>Near Here</Text>
        </View>
      </View>

      <View style={[styles.card, styles.cardEle]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titles}>Canyon ......</Text>
          <Text style={styles.label}>Saudi</Text>
          <Text style={styles.desc}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aut inventore pariatur iure ab. Sint ipsum dignissimos esse. Maxime
            pariatur consequatur animi ipsa. Omnis earum eveniet nobis ea quos
            odio.
          </Text>
          <Text style={styles.footer}>Near Here</Text>
        </View>
      </View>

      <View style={[styles.card, styles.cardEle]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titles}>Canyon ......</Text>
          <Text style={styles.label}>Saudi</Text>
          <Text style={styles.desc}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aut inventore pariatur iure ab. Sint ipsum dignissimos esse. Maxime
            pariatur consequatur animi ipsa. Omnis earum eveniet nobis ea quos
            odio.
          </Text>
          <Text style={styles.footer}>Near Here</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardEle]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titles}>Canyon ......</Text>
          <Text style={styles.label}>Saudi</Text>
          <Text style={styles.desc}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aut inventore pariatur iure ab. Sint ipsum dignissimos esse. Maxime
            pariatur consequatur animi ipsa. Omnis earum eveniet nobis ea quos
            odio.
          </Text>
          <Text style={styles.footer}>Near Here</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardEle]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titles}>Canyon ......</Text>
          <Text style={styles.label}>Saudi</Text>
          <Text style={styles.desc}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aut inventore pariatur iure ab. Sint ipsum dignissimos esse. Maxime
            pariatur consequatur animi ipsa. Omnis earum eveniet nobis ea quos
            odio.
          </Text>
          <Text style={styles.footer}>Near Here</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24, // Increased font size
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'blue', // Changed font color to blue
  },
  card: {
    width: 350,
    height: 350,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardEle: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
  },
  img: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  titles: {
    // color: 'black',
    fontSize: 26, // Increased font size
    fontWeight: 'bold',
    marginBottom: 6,
    color: 'green', // Changed font color to green
  },
  label: {
    color: 'black',
    fontSize: 18, // Increased font size
  },
  desc: {
    fontSize: 16, // Increased font size
    marginBottom: 12,
    flexShrink: 1,
    color: 'black', // Changed font color to gray
  },
  footer: {
    color: 'black',
    marginBottom: 8,
    fontSize: 14, 
  },
});
