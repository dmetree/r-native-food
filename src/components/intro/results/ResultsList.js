import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ResultItem from './ResultItem'

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>{results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <ResultItem item={item}/>    
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
