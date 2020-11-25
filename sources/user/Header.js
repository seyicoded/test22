import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {userstyles} from '../Sheets/UserSheet'
import {Icon, Badge, withBadge} from 'react-native-elements'

export default function Header(props) {
    const [badgeNumber,setbadgeNumber] = useState(0)

    useEffect(()=>{
        //fetch number of item in cart and display it
    })

    const BadgedIcon = (badgeNumber <= 0) ? Icon : withBadge(badgeNumber)(Icon)
    
    return (
        <>
        <StatusBar />
        <View style={userstyles.Hcontainer}>
            {
                (props.showBack) ? <View style={userstyles.HSearchBack}><Icon type="ionicon" name="ios-arrow-back" onPress={()=>{props.navigation.goBack()}} color="white"/></View> : <></>
            }
            <Text style={userstyles.HTitle}>flex</Text>
            <View style={userstyles.HCartIcon}>
                <Icon style={userstyles.HSearchIcon} type="ionicon" name="ios-search" color="white"/>
                <BadgedIcon type="ionicon" color="white" name="ios-cart" />
            </View>
        </View>
        </>
    )
}
