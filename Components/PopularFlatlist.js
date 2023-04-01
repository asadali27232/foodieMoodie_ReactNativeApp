import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import { useState } from 'react';
import React from 'react';

function PopularFlatlist() {
  const [menu, setMenu] = useState([
    {
      key: 2,
      rating: 4.7,
      imgSrc: require('../assets/p3.jpg'),
      name: 'Mix Burger',
      price: 36,
    },
    {
      key: 3,
      rating: 4.5,
      imgSrc: require('../assets/p4.jpg'),
      name: 'Sweet Burger',
      price: 24,
    },
    {
      key: 1,
      rating: 4.1,
      imgSrc: require('../assets/p2.jpg'),
      name: 'Fish Shawarma',
      price: 13,
    },
    {
      key: 4,
      rating: 4.3,
      imgSrc: require('../assets/p5.jpg'),
      name: 'Rustique Burger',
      price: 33,
    },
    {
      key: 5,
      rating: 4.8,
      imgSrc: require('../assets/p6.jpg'),
      name: 'Imperial Burger',
      price: 29,
    },
    {
      key: 0,
      rating: 4.9,
      imgSrc: require('../assets/p1.jpg'),
      name: 'Grill Shawarma',
      price: 31,
    },
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        Popular Food
      </Text>
      <FlatList
        horizontal
        data={menu}
        keyExtractor={(item) => {
          item.key;
        }}
        renderItem={({ item }) => (
          <View
            style={{
              borderColor: '#FBFCFF',
              marginBottom: 10,
              borderRadius: 10,
              borderWidth: 1,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              height: 250,
              width: 180,
              marginHorizontal: 5,
            }}>
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
                  <Image
                    style={styles.star}
                    source={require('../assets/like.png')}
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 0.5 }}>
              <Image style={styles.logo} source={item.imgSrc} />
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
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  listItem: {
    width: '100%',
    margin: 5,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00a7f8',
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
export default PopularFlatlist;
