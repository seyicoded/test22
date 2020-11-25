import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'

import AsyncStorage from '@react-native-community/async-storage'

import {AppContext} from '../../AppContext'
import {GuestTemplate} from '../Sheets/GuestSheet'
import {FlexAlert,FlexLoader} from '../FlexAlert'
import {validateEmail, validateFullName, validatePassword, validatePhone} from '../ValidateInput'

var vmode = 0

export default function Login({navigation}) {
    const appContext = React.useContext(AppContext)
    //console.log(appContext)

    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    
    const [eyeMode, seteyeMode] = useState('eye-off')
    const [passwordsecureentry, setpasswordsecureentry] = useState(true)

    //for flex modalla||alert
    const [showLoader,setshowLoader] = useState(false)
    const [showMessageModal,setshowMessageModal] = useState(false)
    const [ssMessage,setssMessage] = useState('')
    const [showMType,setshowMType] = useState('')

    //validation color of input field
    const [emailcolor,setemailcolor] = useState('lightgrey')
    const [pwdcolor,setpwdcolor] = useState('lightgrey')
    
    const togglePasswordViewer = ()=>{
        if(vmode == 0){
            //hidden, show it
            seteyeMode('eye');
            setpasswordsecureentry(false)
            vmode = 1;
        }else{
            //shown, hide it
            seteyeMode('eye-off');
            setpasswordsecureentry(true)
            vmode = 0;
        }
    }

    const login_new_user = ()=>{
        //show loader
        setshowLoader(true)
        //validate user input and if its correct then ok else change the color to red
        //validate email
        if(!validateEmail(email)){
            setemailcolor('red')
            setshowLoader(false)
            setshowMessageModal(true)
            setssMessage('email is invalid')
            setshowMType('error')
            return false
        }
        //validate password
        if(!validatePassword(password)){
            setpwdcolor('red')
            setshowLoader(false)
            setshowMessageModal(true)
            setssMessage('password is invalid')
            setshowMType('error')
            return false
        }

        //....
        //code to process fetch request
        setTimeout(()=>{
            setshowLoader(false)
            setshowMessageModal(true)
            setssMessage('server not found')
            setshowMType('error')
        }, 3000)
    }
    
    return (
        <>
        {
            (showLoader) ? <FlexLoader /> : <></>
        }
        {
            (showMessageModal) ? <FlexAlert type={showMType} message={ssMessage} hideModal={setshowMessageModal}/> : <></>
        }
        <ImageBackground source={require('../img/bg1.jpg')} style={GuestTemplate.bgContainer}>
            <View style={GuestTemplate.container}>
                <StatusBar hidden={false}/>
                
                <View style={GuestTemplate.Dcontainer}>
                    <View style={GuestTemplate.DImagecontainer}>
                        <Image source={require('../../assets/favicon.png')} style={GuestTemplate.WelcomImage}></Image>
                    </View>
                    <View style={GuestTemplate.DFieldcontainer}>
                        
                        <View style={{margin: 10}}></View>

                        <View style={GuestTemplate.fieldCover}>
                            <View style={GuestTemplate.fieldTextIconV}>
                                <Icon1 name="email" style={{...GuestTemplate.fieldTextIcon, color: emailcolor}}/>
                            </View>
                            <TextInput style={GuestTemplate.fieldText} placeholder="Enter Email Address" keyboardType="email-address" placeholderTextColor="rgba(255,255,255,0.5)" value={email} onChangeText={(value)=>{setemail(value) ;setemailcolor( ()=>{ return ((validateEmail(value)) ? 'green': 'red') } )}}/>
                        </View>

                        <View style={GuestTemplate.fieldCover}>
                            <View style={GuestTemplate.fieldTextIconV}>
                                <TouchableOpacity style={{ padding: 2, zIndex: 10, elevation: 10}} onPress={(e)=>{
                                    togglePasswordViewer();
                                }}>
                                    <Icon1 name={eyeMode} style={{...GuestTemplate.fieldTextIcon, color: pwdcolor}}/>
                                </TouchableOpacity>
                            </View>
                            <TextInput style={GuestTemplate.fieldText} secureTextEntry={passwordsecureentry} placeholder="Enter Password" placeholderTextColor="rgba(255,255,255,0.5)" value={password} onChangeText={(value)=>{setpassword(value) ;setpwdcolor( ()=>{ return ((validatePassword(value)) ? 'green': 'red') } )}}/>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=>{
                                login_new_user()
                            }}>
                                <Text style={{...GuestTemplate.WButton, paddingHorizontal: '10%', marginTop: 10}}>LOG IN</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate('Main_Register_Screen')
                            }}>
                                <Text style={GuestTemplate.redirectLink}>REGISTER</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={async ()=>{
                                //update the storage, then state
                                //{setsignedIn,setpresentlyIn, setEmailC, setPasswordC, setUSER_ID}
                                await AsyncStorage.setItem('signinState','true')
                                await AsyncStorage.setItem('email',email)
                                await AsyncStorage.setItem('password',password)
                                await AsyncStorage.setItem('user_id','alasl21312312')
                                appContext[1].setsignedIn(true)
                                appContext[1].setpresentlyIn(true)
                                // appContext.setEmailC(email)
                                // appContext.setPasswordC(password)
                            }}>
                                <Text style={GuestTemplate.redirectLink}>ASSUMED LOGIN</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>
        </ImageBackground>
        </>
    )
}
