import React from 'react'
import Axios from 'axios'
import {SEND_URL} from './CONFIG'

export var message = ''

const sendEmailRV = async (email, setemailcolor)=>{
    const getEmailState = await Axios.post(`${SEND_URL}/authApi/validate-email/`, {'email': email})

    console.log(getEmailState)
    if(getEmailState.data.email_valid != undefined && getEmailState.data.email_valid == "True" ){
        message = ''
        return true    
    }else{
        message = getEmailState.data.email_error
        setemailcolor('red')
        return false
    }

}

export const validateEmail = (email, setemailcolor)=>{
    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)) {
        return sendEmailRV(email, setemailcolor)
        //console.log(getEmailState)
    }else{
        return false
    }
}

export const validateFullName = (fn) =>{
    if( fn.length <6 ){
        return false
    }else{
        return true
    }
}

export const validatePassword = (pwd) => {
    if( pwd.length <6 ){
        return false
    }else{
        return true
    }
}

export const validatePhone = (phone) => {
    if( phone.length < 10 || phone.length > 11){
        return false
    }else{
        return true
    }
}