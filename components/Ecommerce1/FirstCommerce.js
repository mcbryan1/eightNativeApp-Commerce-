import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import StarsCount from './StarsCount'

const FirstCommerce = ({name, price, image}) => {
    return (
        <View style={styles.container}>
        <View style={styles.image_text__container}>
            <View style={styles.image__container}>
                <Image source={image} style={styles.image}/>
            </View>
            <View style={styles.item__details}>
                <Text style={styles.item__name}>{name}</Text>
                <View><StarsCount/></View>
                <Text style={styles.item__price}>{price}</Text>
            </View>
        </View>
        
            
        </View>
    )
}

export default FirstCommerce

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        marginHorizontal: 20,
    },
    image_text__container:{
        marginVertical: 20,
        flexDirection: 'row',
    },
    image:{
        height: 100,
        width: 100,   
    },
    item__details:{
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    item__name:{
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 7,
    },
    item__price:{
        paddingTop: 7,
        color: "#e80080",
        fontWeight: 'bold',
        fontSize: 15,
    }
})
