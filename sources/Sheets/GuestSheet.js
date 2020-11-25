import React from 'react'
import {Platform, StyleSheet} from 'react-native'

const PRIMARY_COLOR = "#2abd61"
const SECONDARY_COLOR = ""
const TERTIARY_COLOR = ""

export const GuestTemplate = StyleSheet.create({
    bgContainer: {
        width: '100%',
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,255,0,0.25)',
        position: 'relative',
    },
    WelcomImageView: {
        position: 'absolute',
        top: '15%',
        //left: '33%',
        alignItems: 'center',
        width:'100%',
    },
    WelcomImage: {
        width: 126,
        height: 128,
    },
    WelcomeButtonContain: {
        position: 'absolute',
        bottom: '5%',
        width: "100%",
        alignItems: 'center',
    },
    WButton: {
        color: 'white',
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: '39%',
        paddingVertical: 18,
        marginBottom: 15,
        borderRadius: 25,
        overflow: 'hidden',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    Dcontainer: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.06)',
        alignItems: 'center',
    },
    DImagecontainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 25,
    },
    DFieldcontainer: {
        backgroundColor: 'rgba(255,255,255,0.26)',
        width: '100%',
        flex: 1,
        borderRadius: 25,
        padding:8,
    },
    fieldCover: {
        position: 'relative'
    },
    fieldText: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        marginVertical: 9,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        ...Platform.select({
            ios: {
                paddingVertical: 15
            }
        }),
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.3)',
        zIndex: -1,
    },
    fieldTextIconV: {
        position: 'absolute',
        top:17,
        ...Platform.select({
            ios: {
                top:21,
            }
        }),
        right:10,
    },
    fieldTextIcon: {
        fontSize:20,
        color: 'lightgrey',
        elevation: 10,
    },
    redirectLink: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 15,
        fontSize: 15,
        textShadowOffset: {width:1, height: 1},
        textShadowColor: 'black',
        textShadowRadius: 8
    }

})