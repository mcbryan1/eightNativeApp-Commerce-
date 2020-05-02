import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";


export default class CommerceTwoHead extends Component {
  
  render() {
    return (
      <View>
        <View style={styles.icons__container}>
          <View>
            <AntDesign
              name="arrowleft"
              size={22}
              color="black"
              style={styles.icons}
            />
          </View>
          <View>
            <EvilIcons
              name="cart"
              size={22}
              color="#e80080"
              style={styles.icon2}
            />
          </View>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icons: {
    marginRight: 230,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
  icon2: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
  icons__container: {
    flexDirection: "row",
  },
 
});
