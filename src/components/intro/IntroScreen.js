import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Search from './Search'
import ResultsList from './results/ResultsList'
import useResults from '../../hooks/useResults'

const IntroScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    const [results, errMsg, searchApi] = useResults();

    // console.log(results)

    const filteredResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <Search
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)} />
            {errMsg ? <Text>{errMsg}</Text> : null}
        <ScrollView>
            <ResultsList navigation={navigation} title='Price range: $' results={filteredResultsByPrice('$')} />
            <ResultsList navigation={navigation} title='Price range: $$' results={filteredResultsByPrice('$$')} />
            <ResultsList navigation={navigation} title='Price range: $$$' results={filteredResultsByPrice('$$$')} />
            <ResultsList navigation={navigation} title='Price range: $$$$' results={filteredResultsByPrice('$$$$')} />
        </ScrollView>
        </>
    )
}

export default IntroScreen

const styles = StyleSheet.create({})
