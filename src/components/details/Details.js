import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import yelp from '../../api/yelp'

const Details = ({route}) => {
    const id = route.params.id;
    const [data, setData] = useState([])

    useEffect(() => {
       searchApi(id)
    }, [id])

    const searchApi = async (id) => {
        try {
            const res = await yelp.get(`/${id}`)
            setData(res.data)
        } catch (error) {
            setErrMsg('Something wrong in Api call in Details')
        }
    }
    
    
    if(! data){
        return null
    }
    
    return (
        <View>
            <Text>
                {data.name}
            </Text>
            
            <FlatList
                keyExtractor={photo => photo}
                data={data.photos}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.img} source={{ uri: item }} />
                    );
                }}
            />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    img: {
        height: 120,
        width: 200,
        borderRadius: 4,
        margin: 10
    },
})
