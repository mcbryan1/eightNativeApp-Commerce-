import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: "" };
  }

  _onChangeSearch = (query) => this.setState({ searchQuery: query });
  render() {
    const { searchQuery } = this.state;
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
        <View style={styles.header}>
          <Text style={styles.header__text}>Women Jacket</Text>
        </View>
        <View>
          <Searchbar
            placeholderTextColor = "grey"
            placeholder="Search Jacket"
            onChangeText={this._onChangeSearch}
            value={searchQuery}
            style={styles.searchbar}
            iconColor= "#e80080" 
          />
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
  header: {
    marginTop: 30,
  },
  header__text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  searchbar:{
      borderRadius: 10,
      backgroundColor: 'white',
      marginTop: 10,
      elevation: 0,
  }
});
