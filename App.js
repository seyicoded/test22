import 'react-native-gesture-handler'
import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import AsyncStorage from '@react-native-community/async-storage'

import GuestD from './sources/guest/GuestD'
import Login from './sources/guest/Login'
import Register from './sources/guest/Register'

import Welcome from './sources/user/Welcome'
import ItemDetail from './sources/user/ItemDetail'

import {AppContext} from './AppContext'
import {FlexAlert,FlexLoader} from './sources/FlexAlert'

const Stack = createStackNavigator();
export default function App() {

  const [signedIn, setsignedIn] = useState(null)
  const [presentlyIn, setpresentlyIn] = useState(null)//false
  const [EmailC, setEmailC] = useState(null)//false
  const [PasswordC, setPasswordC] = useState(null)//false
  const [USER_ID, setUSER_ID] = useState(null)//false
  const [appContextValue, setappContextValue] = useState([])

  //for flex modalla||alert
  const [showLoader,setshowLoader] = useState(false)
  const [showMessageModal,setshowMessageModal] = useState(false)
  const [ssMessage,setssMessage] = useState('')
  const [showMType,setshowMType] = useState('')


  useEffect( ()=>{
    //AsyncStorage.clear()
    
    const process_ini_process = async ()=> {
      
      //get signin from database
      const signIn = await AsyncStorage.getItem('signinState');
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      const user_id = await AsyncStorage.getItem('user_id');

      //update state
      ((!(signIn)) ? setsignedIn(false):setsignedIn(true));
      ((signIn) ? setpresentlyIn(true) : setpresentlyIn(false));
      setEmailC(email)
      setPasswordC(password)
      setUSER_ID(user_id)

    }

    process_ini_process()

    //handle app context
    setappContextValue([
      {signedIn,presentlyIn, EmailC, PasswordC, USER_ID, showLoader, showMessageModal, ssMessage, showMType},
      {setsignedIn,setpresentlyIn, setEmailC, setPasswordC, setUSER_ID, setshowLoader, setshowMessageModal, setssMessage, setshowMType}
    ])

  },[signedIn, showLoader,EmailC, PasswordC, USER_ID, showMessageModal, ssMessage,showMType])

  if(presentlyIn == null){
    return <FlexLoader />
  }

  return (
    <>
    <AppContext.Provider value={appContextValue}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {

            (presentlyIn == true) ? 
            <>
              <Stack.Screen name="Main_Welcome_Screen" component={Welcome} />
              <Stack.Screen name="Main_ItemDetail_Screen" component={ItemDetail} />
            </>
            : 
            <>
              <Stack.Screen name="Main_GuestD_Guest_Screen" component={GuestD} />
              <Stack.Screen name="Main_Login_Screen" component={Login} />
              <Stack.Screen name="Main_Register_Screen" component={Register} />
            </>

          }
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
    </>
  );

}

