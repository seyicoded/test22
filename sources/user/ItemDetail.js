import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Image} from 'react-native-elements'
import {AppContext} from '../../AppContext'
import {FlexAlert,FlexLoader} from '../FlexAlert'
import {validateEmail, validateFullName, validatePassword, validatePhone} from '../ValidateInput'
import {PRIMARY_COLOR, userstyles} from '../Sheets/UserSheet'

import Header from './Header'
import { StatusBar } from 'expo-status-bar'
import Axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'

export default function ItemDetail({navigation, route}) {
    const appcontext = React.useContext(AppContext)
    const [isLoading, setisLoading] = useState(true)
    const [Data, setData] = useState(null)

    var options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
        params: {ids: route.params.itemId, includeNutrition: 'false'},
        headers: {
            'x-rapidapi-key': '6e94c6abfamsh6994b0303413b6dp175147jsn17ab1d36ec5d',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    const fetchInfo = async ()=>{
        const {data} = await Axios.request(options)
        //console.log(data)
        //console.log('----------------------------')
        setData(data[0])
        setisLoading(false)
    }

    useEffect(()=>{
        fetchInfo()
    }, [])

    return (
        <View style={{flex: 1}}>
            <StatusBar />
            <Header showBack={true} navigation={navigation}/>
            <View style={{flex: 1}}>
                {
                    (isLoading) ? <FlexLoader /> : 
                    <ScrollView style={{flex:1}}>
                        <Image style={userstyles.ItemDetailImage} source={{uri: Data.image}} PlaceholderContent={<FlexLoader />}/>
                        <Text style={userstyles.ItemDetailTItle}>{Data.title}</Text>
                        <Text style={userstyles.ItemDetailTime}>{Data.readyInMinutes} mins</Text>
                        <Text style={userstyles.ItemDetailPrice}>$ {Data.pricePerServing}</Text>
                        <Text>{Data.summary}</Text>
                        <Text>a</Text>
                        <WebView style={{height: 150, width: '100%'}} source={{ html: Data.summary }} />
                    </ScrollView>
                }
            </View>
            <View style={userstyles.ItemDetailFooterContainer}>
                <TouchableOpacity>
                    <Text style={userstyles.ItemDetailFooterButton}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
