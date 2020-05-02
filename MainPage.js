import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FirstCommerceView from './components/Ecommerce1/FirstCommerceView'

export default function MainPage ()  {
    return (
        <View style={styles.container}>
            <FirstCommerceView/>
        </View>
    )
}

 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5ebf5'
      },
})
