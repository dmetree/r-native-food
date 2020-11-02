import {useEffect, useState} from 'react'
import yelp from './../api/yelp'
 
export default () => {
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
        searchApi('pita')
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
    return [results, errMsg, searchApi]
}