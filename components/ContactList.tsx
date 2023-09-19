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
      imageUrl: 'https://avatars.githubusercontent.com/u/103241770?v=4',
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
      imageUrl:
        'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      uid: 4,
      name: 'Sabita .......',
      status: 'Ek Chota sa Ullu ',
      imageUrl:
        'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
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
    backgroundColor: '#85d6c7',
    marginBottom: 6,
    padding: 8,
    borderRadius: 15,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 14,
  },
});
