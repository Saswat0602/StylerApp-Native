/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Saswat Ranjan',
      status: 'Just an extra ordinary Man',
      imageUrl:
        'https://avatars.githubusercontent.com/u/103241770?s=400&u=ee3e03b8ebb0aae2046f0202cd4c2c67c648d082&v=4',
    },
    {
      uid: 2,
      name: 'Barsa Priyadarshini',
      status: 'The Beautiful!',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 3,
      name: 'Miss HaraPriya',
      status: 'A phenomenal character',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 4,
      name: 'Sabita .......',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#85d6c7',
    padding: 10,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
