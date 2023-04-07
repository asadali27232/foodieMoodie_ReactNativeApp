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
import { getDatabase, ref, onValue } from 'firebase/database';
import {
  collection,
  getFirestore,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  docRef,
} from 'firebase/firestore';

function PopularList(props) {
  const [menu, setMenu] = useState();
  const [userLike, setUserLike] = useState([]);
  useEffect(() => {
    changeLikes();
  }, []);
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'listData/popular');

    onValue(
      dbRef,
      (snapshot) => {
        console.log(userLike);
        const data = snapshot.val();
        data.map((item) => {
          if (userLike.includes(item.key)) {
            item.like = true;
          } else {
            item.like = false;
          }
        });
        setMenu(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [userLike]);

  const handleLike = async (item) => {
    // const db = getDatabase(app);
    // const dbRef = ref(db, `listData/popular/${item.key}`);

    // update(dbRef, {
    //   like: !item.like,
    // });

    // const db = getFirestore();
    // const docRef = await addDoc(collection(db, 'userLikes'), {
    //   uid: props.uid,
    //   bid: item.key,
    // });
    const db = getFirestore();
    const collectionRef = collection(db, 'userLikes');
    const queryRef = query(
      collectionRef,
      where('uid', '==', props.uid),
      where('bid', '==', item.key)
    );
    const querySnapshot = await getDocs(queryRef);
    if (!querySnapshot.empty) {
      // Delete the existing document
      const docToDelete = querySnapshot.docs[0];
      await deleteDoc(docToDelete.ref);
    } else {
      // Add a new document
      await addDoc(collectionRef, {
        uid: props.uid,
        bid: item.key,
      });
    }
    changeLikes();
  };
  const changeLikes = async () => {
    const db = getFirestore();
    const collectionRef = collection(db, 'userLikes');
    const queryRef = query(collectionRef, where('uid', '==', props.uid));
    const querySnapshot = await getDocs(queryRef);
    setUserLike(querySnapshot.docs.map((doc) => doc.data().bid));
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
        Popular Food
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
export default PopularList;
