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

function BestList() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'alldeals/burgers');

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

  const handleLike = (item) => {
    const db = getDatabase(app);
    const dbRef = ref(db, `alldeals/burgers/${item.key}`);

    update(dbRef, {
      like: !item.like,
    });
  };

  const renderItem = ({ item }) => {
    const favoriteImageSource = item.like
      ? require('../assets/like.png')
      : require('../assets/notLike.png');
    return (
      <View style={styles.listItem}>
        <View style={{ flex: 0.2, width: '100%' }}>
          <View style={{ flex: 0.5, flexDirection: 'row' }}>
            <View style={{ flex: 0.5, flexDirection: 'row' }}>
              <Image
                style={styles.star}
                source={require('../assets/icons8_star_52px.png')}
              />
              <Text>{item.rating}</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity onPress={() => handleLike(item)}>
                <Image style={styles.star} source={favoriteImageSource} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.5 }}>
          <Image style={styles.logo} source={{ uri: item.image }} />
        </View>
        <View style={{ flex: 0.3 }}>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#383F53', fontSize: 14 }}>
              ${item.price}
            </Text>
          </View>
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
        Best Seller
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
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 250,
    width: 180,
    marginHorizontal: 5,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#F7F7F7',
  },
  logo: {
    width: 120,
    height: 120,
  },
  star: {
    width: 18,
    height: 18,
    marginEnd: 10,
  },
});
export default BestList;
