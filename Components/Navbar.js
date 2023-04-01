import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function Navbar(props) {
  const { navigation } = props;
  return (
    <View style={styles.navContainer}>
      <View style={styles.sec1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.logo} source={require('../assets/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.sec2}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.sec3}>
        {/* <TouchableOpacity style={styles.button}>
                    <Image
                        style={styles.logo}
                        source={require("../assets/favorite.png")}
                    />
                </TouchableOpacity> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 25,
    height: 25,
  },
  navContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 18,
  },
  sec1: {
    flex: 0.15,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  sec2: {
    flex: 0.8,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  sec3: {
    flex: 0.15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
    color: '#383F53',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    paddingBottom: 10,
    borderRadius: 10,
  },
});
export default Navbar;
