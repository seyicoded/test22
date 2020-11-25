import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon, Badge, withBadge} from 'react-native-elements'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-community/async-storage'

import {PRIMARY_COLOR} from '../Sheets/UserSheet'

import {AppContext} from '../../AppContext'
import {FlexAlert,FlexLoader} from '../FlexAlert'
import {validateEmail, validateFullName, validatePassword, validatePhone} from '../ValidateInput'

import Header from './Header'
import BHome from './BScreen/BHome'
import BCategory from './BScreen/BCategory'
import BAccount from './BScreen/BAccount'

export default function Welcome({navigation}) {
    const appcontext = React.useContext(AppContext)
    const BottomNav = createBottomTabNavigator();
    return (
        <>
            {
                (appcontext[0].showLoader) ? <FlexLoader />: <></>
            }
            <Header />
            <View style={{flex:1,}}>
                <BottomNav.Navigator initialRouteName="Main_USER_Bottom_Home" tabBarOptions={{activeTintColor: PRIMARY_COLOR, style: {paddingVertical: 5, paddingBottom: 5}}}>
                    <BottomNav.Screen name="Main_USER_Bottom_Home" options={{title: 'HOME', tabBarIcon: ({focused, size, color})=><Icon1 name="home" size={size} color={color} /> }} component={BHome}/>
                    <BottomNav.Screen name="Main_USER_Bottom_Category" options={{title: 'CATEGORY', tabBarIcon: ({focused, size, color})=><Icon1 name="list-ul" size={size} color={color} /> }} component={BCategory}/>
                    <BottomNav.Screen name="Main_USER_Bottom_Account" options={{title: 'ACCOUNT', tabBarIcon: ({focused, size, color})=><Icon1 name="user-shield" size={size} color={color} /> }} component={BAccount}/>
                </BottomNav.Navigator>
            </View>
        </>

    )
}
