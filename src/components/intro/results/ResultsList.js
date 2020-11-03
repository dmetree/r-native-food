import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import ResultItem from './ResultItem'

const ResultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id}) }>
                            <ResultItem item={item} />
                        </TouchableOpacity> 
                    );
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 10,
        marginVertical: 5,
        fontSize: 18,
    }
})
