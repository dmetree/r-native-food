import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Search from './Search'
import ResultsList from './results/ResultsList'
import useResults from '../../hooks/useResults'

const IntroScreen = () => {
    const [term, setTerm] = useState('');
    const [results, errMsg, searchApi] = useResults();

    // console.log(results)

    const filteredResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={{flex: 1}}>
            <Search
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)} />
            {errMsg ? <Text>{errMsg}</Text> : null}
            {/* <Text>There you go: {results.length}</Text> */}
        <ScrollView>
            <ResultsList title='Price range: $' results={filteredResultsByPrice('$')} />
            <ResultsList title='Price range: $$' results={filteredResultsByPrice('$$')} />
            <ResultsList title='Price range: $$$' results={filteredResultsByPrice('$$$')} />
            <ResultsList title='Price range: $$$$' results={filteredResultsByPrice('$$$$')} />
        </ScrollView>
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({})
