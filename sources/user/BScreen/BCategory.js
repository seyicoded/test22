import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, RefreshControl } from 'react-native'
import Axios from 'axios'
import {SEND_URL} from '../../CONFIG'
import {AppContext} from '../../../AppContext'
import {FlexAlert,FlexLoader} from '../../FlexAlert'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {userstyles} from '../../Sheets/UserSheet'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function BCategory({navigation}) {
    const appcontext = React.useContext(AppContext)

    const [isLoading, setisLoading] = useState(true)
    const [Data, setData] = useState(null)

    const getdata = async () => {
        const result = await Axios.get(`${SEND_URL}/storeApi/categories`)

        setData(result.data)
        setisLoading(false)
    }
    
    useEffect(()=>{
        getdata()

    }, [])

    return (
        <View style={{flex: 1}}>
            {
                ((isLoading) ? <FlexLoader /> : 

                    ((Data == null) ? <FlexLoader /> :

                        (<View style={{flex: 1}}>
                            <FlatList data={Data} renderItem={ ({item})=> (
                                <TouchableOpacity onPress={()=>{
                                    alert(item.id) 
                                }}>
                                    <Text style={userstyles.BCategoryItemStyle}>{item.categories}</Text>
                                    <Icon style={userstyles.BCategoryItemIconStyle} name="chevron-right"/>
                                </TouchableOpacity>
                            )} keyExtractor = { (item, index) => index.toString() } refreshing={false} />
                        </View>
                        )
                    )
                )
                
            }
            
        </View>
    )
}
