import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'

import {AppContext} from '../../AppContext'
import {GuestTemplate} from '../Sheets/GuestSheet'

export default function Login({navigation}) {
    const appContext = React.useContext(AppContext)
    
    return (
        <ImageBackground source={require('../img/bg1.jpg')} style={GuestTemplate.bgContainer}>
            <View style={GuestTemplate.container}>
                <StatusBar hidden={false}/>
                
                <View style={GuestTemplate.WelcomImageView}>
                    <Image source={require('../../assets/favicon.png')} style={GuestTemplate.WelcomImage}></Image>
                </View>

                <View style={GuestTemplate.WelcomeButtonContain}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Main_Login_Screen')
                    }}>
                        <Text style={GuestTemplate.WButton}>LOG  IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Main_Register_Screen')
                    }}>
                        <Text style={GuestTemplate.WButton}>SIGN UP</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ImageBackground>
    )
}
