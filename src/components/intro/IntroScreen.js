import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from './Search'
import yelp from './../../api/yelp'

const IntroScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('')

    // const serachApi = () => {
    //     yelp.get('/search', {
    //         params: {
    //             limit: 50,
    //             term: term,
    //             location: 'san jose'
    //         }
    //     })
    //     .then(res => {
    //         setResults(res.data.businesses)
    //     })
    // }
    // or

    useEffect(() => {
       searchApi('pasta')
    }, [])
    
    const searchApi = async (searchWord) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchWord,
                    location: 'san jose'
                }
            })
            setResults(res.data.businesses)
        } catch (error) {
            setErrMsg('Something wrong in Api call')
        }
    }



    return (
        <View>
            <Search
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={() => searchApi(term)} />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <Text>There you go: {results.length}</Text>
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({})
