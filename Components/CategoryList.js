import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';

import { app } from '../Database';
import { getDatabase, ref, onValue, update } from 'firebase/database';

function HorList() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'listData/category');

    onValue(
      dbRef,
      (snapshot) => {
        const data = snapshot.val();
        setMenu(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View style={{ flex: 0.5 }}>
          <Image style={styles.logo} source={{ uri: item.image }} />
        </View>
        <View style={{ flex: 0.5 }}>
          <Text style={{ color: '#383F53', fontSize: 14 }}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#001B3D',
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        Food Category
      </Text>
      <FlatList
        horizontal
        data={menu}
        keyExtractor={(item) => {
          item.key;
        }}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 60,
    width: 160,
    flexDirection: 'row',
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#F7F7F7',
    marginHorizontal: 8,
  },
  logo: {
    width: 40,
    height: 40,
  },
  star: {
    width: 18,
    height: 18,
    marginEnd: 10,
  },
});
export default HorList;
