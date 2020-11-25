import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import axios from 'axios'
import {AppContext} from '../../../AppContext'
import {FlexAlert,FlexLoader} from '../../FlexAlert'
import { Image } from 'react-native-elements';
import {FlatGrid} from 'react-native-super-grid'
import {userstyles} from '../../Sheets/UserSheet'
import { TouchableOpacity } from 'react-native-gesture-handler'

var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
    params: {ids: '3,2,1,4,5,6', includeNutrition: 'true'},
    headers: {
        'x-rapidapi-key': '6e94c6abfamsh6994b0303413b6dp175147jsn17ab1d36ec5d',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

export default function BHome({navigation}) {
    const appcontext = React.useContext(AppContext)
    const [isLoading, setisLoading] = useState(true);
    const [Data, setData] = useState([]);

    useEffect(()=>{
        
        const start = async ()=>{
            if(isLoading){
                appcontext[1].setshowLoader(true)
                const rs = await axios.request(options);
                setisLoading(false)
                setData(rs.data)
                appcontext[1].setshowLoader(false)
                //console.log(appcontext[1])
            }else{
                //alert('a')
            }
        }
        
        start()
        
        //console.log(FlatGrid)
        
    }, [])

    //console.log(Data)

    var options1 = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
        params: {ids: '1,2,3,4,5,6', includeNutrition: 'true'},
        headers: {
            'x-rapidapi-key': '6e94c6abfamsh6994b0303413b6dp175147jsn17ab1d36ec5d',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    const loadMoreItem = async ()=>{
        const rs = await axios.request(options1)
        const newa = Data.concat(rs.data);

        //console.log(Array.isArray(rs.data))
        //console.log(Array.isArray(Data))
        setData(newa)
        // console.log(Data.length)
        // console.log(newa.length)
    }

    if(isLoading || (Data == [])){
        return <></>
    }
    
    return (
        <View style={userstyles.HomeSContainer}>
            <FlatGrid data={Data} onEndReached={({ distanceFromEnd })=>{loadMoreItem();}} renderItem={ ({item, rowIndex})=>(
                <TouchableOpacity onPress={()=>{navigation.navigate('Main_ItemDetail_Screen',{itemId: item.id})}}>
                    <View style={userstyles.FGitemContainer}>
                        <Image source={{uri: item.image}} style={userstyles.FGitemImage} PlaceholderContent={<FlexLoader />}/>
                        <Text style={userstyles.FGitemTitle}>{item.title}</Text>
                        <Text style={userstyles.FGitemPrice}>$ {item.pricePerServing}</Text>
                    </View>
                </TouchableOpacity>
            )} ListFooterComponent={<ActivityIndicator color="green"/>}/>
        </View>
    )
}
