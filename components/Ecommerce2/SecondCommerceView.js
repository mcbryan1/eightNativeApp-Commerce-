import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SecondCommerce from './SecondCommerce'



const FirstCommerceView = () => {
  const clothing = [
    {
      name: "Ladies Bomber Jacket",
      price: "$240",
      image: require("../../assets/images/bomber.png"),
      id: "1",
      description: 'Color Picker Use the color picker by clicking and dragging your cursor inside.',
      material: '40% cotton, 42% elatane, 18% denim'
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={clothing}
        renderItem={({ item }) => {
          return (
            <SecondCommerce
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              material={item.material}
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
