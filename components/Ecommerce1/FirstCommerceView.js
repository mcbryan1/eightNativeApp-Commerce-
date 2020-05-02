import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FirstCommerce from './FirstCommerce'
import SearchBar from "../SearchBar";


const FirstCommerceView = () => {
  const clothing = [
    {
      name: "Ladies Bomber Jacket",
      price: "$240",
      image: require("../../assets/images/bomber.png"),
      id: "1",
    },
    {
      name: "Ladies Denim Jacket",
      price: "$540",
      image: require("../../assets/images/denim.png"),
      id: "2",
    },
    {
      name: "Ladies PU Leather Jacket",
      price: "$340",
      image: require("../../assets/images/leather.png"),
      id: "3",
    },
    {
      name: "Ladies Winter Jacket",
      price: "$640",
      image: require("../../assets/images/winter.png"),
      id: "4",
    },
    {
      name: "Ladies White Jacket",
      price: "$240",
      image: require("../../assets/images/white.png"),
      id: "5",
    },
  ];
  return (
    <View style={styles.container}>
    <SearchBar/>
      <FlatList
        data={clothing}
        renderItem={({ item }) => {
          return (
            <FirstCommerce
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FirstCommerceView;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginVertical: 30,
    }
});
