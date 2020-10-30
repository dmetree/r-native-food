import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultItem = ({item}) => {
    return (
        <View>
            <View style={styles.element}>
                <Image style={styles.img} source={{ uri: item.image_url }} />
                <Text style={styles.name}>{item.name}</Text>
                <Text>Stars: {item.rating}</Text>
                <Text>Reviews: {item.review_count}</Text>
            </View>
        </View>
    )
}

export default ResultItem

const styles = StyleSheet.create({
    element: {
        marginHorizontal: 10
    },
    img: {
        height: 120,
        width: 200,
        borderRadius: 4
    },
    name: {
        fontWeight: "bold"
    }
})
