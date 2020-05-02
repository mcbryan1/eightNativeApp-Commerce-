import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import FirstCommerceView from './components/Ecommerce1/FirstCommerceView'
import SecondCommerce from './components/Ecommerce2/SecondCommerce'

export default function MainPage ()  {
    return (
        <View style={styles.container}>
            {/* <FirstCommerceView/> */}
            <SecondCommerce/>
        </View>
    )
}

 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
      },
})
