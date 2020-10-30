import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Search = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.background}>
            <AntDesign name="search1" size={24} color="white" />
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                term={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ccc',
        margin: 10,
        padding: 8,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 18,
        flex: 1
    }
})
