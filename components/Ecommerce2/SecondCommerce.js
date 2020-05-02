import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import CommerceTwoHead from "../CommerceTwoHead";
import image from "../../assets/images/bomber.png";
import { FontAwesome } from "@expo/vector-icons";
import StarsCount from "../Ecommerce1/StarsCount";

const SecondCommerce = () => {
  return (
    <View style={styles.container}>
      <View>
        <CommerceTwoHead />
        <View style={styles.image__icon}>
          <Image source={image} style={styles.image} />
          <FontAwesome
            name="heart-o"
            size={22}
            color="black"
            style={styles.icons}
          />
        </View>
        <View style={styles.title__review}>
          <Text style={styles.title}>Ladies bomber Jacket</Text>
          <View style={styles.review}>
            <Text style={styles.review__text}>Review :</Text>
            <StarsCount />
          </View>
          <View style={styles.hr}></View>
        </View>
        <View style={styles.description}>
          <Text style={styles.description__text}>
            Color Picker Use the color picker by clicking and dragging your
            cursor inside.
          </Text>
        </View>
        <View style={styles.material}>
          <Text style={styles.material__text}>
            Material: '40% cotton, 42% elatane
          </Text>
        </View>
        <View style={styles.sizes}>
          <TouchableOpacity style={styles.sizes__size}>
            <Text>XS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizes__size}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizes__size1}>
            <Text style={styles.sizes__size1__text}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizes__size}>
            <Text>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizes__size}>
            <Text>XL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.amount__button}>
          <View style={styles.amount__info}>
            <Text style={styles.amount}>Total Amount</Text>
            <Text style={styles.amount__price}>$110</Text>
          </View>
          <TouchableOpacity style={styles.amount__button__button}>
            <Text style={styles.amount__button__button__text}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecondCommerce;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  image__icon: {
    flexDirection: "row",

    marginVertical: 10,
  },
  image: {
    marginHorizontal: 10,
    width: 230,
    height: 230,
    marginLeft: 40,
  },
  icons: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    top: 10,
    left: 273,
    justifyContent: "center",
    color: "#e80080",
  },
  title__review: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  review: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  review__text: {
    fontSize: 15,
    marginRight: 7,
  },
  hr: {
    borderBottomWidth: 2.5,
    borderTopWidth: 2.5,
    borderTopColor: "#e80080",
    borderBottomColor: "#e80080",
    marginTop: 15,
    marginRight: 250,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  description: {
    marginTop: 5,
  },
  description__text: {
    color: "grey",
  },
  material: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  material__text: {
    color: "#e80080",
  },
  sizes: {
    flexDirection: "row",
    marginTop: 17,
  },
  sizes__size: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginRight: 0,
    marginHorizontal: 20,
  },
  sizes__size1: {
    backgroundColor: "#ed87a4",
    padding: 12,
    borderRadius: 10,
    marginRight: 0,
    marginHorizontal: 20,
  },
  sizes__size1__text: {
    color: "white",
  },
  amount__button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: "#ed87a4",
    padding: 10,
    borderRadius: 10,
  },
  amount: {
    color: "white",
    fontSize: 10,
    fontWeight: 'bold'
  },
  amount__price:{
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold'
  },
  amount__info:{
      marginRight: 60,
  },
  amount__button__button:{
        backgroundColor: "#e80080",
        padding: 12,
        borderRadius: 10,
        marginRight: 0,
        marginHorizontal: 20,
  },
  amount__button__button__text:{
      color: 'white',
        fontWeight: 'bold'
  }
});
