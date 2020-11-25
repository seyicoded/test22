import React from 'react'
import {Platform, StyleSheet} from 'react-native'

export const PRIMARY_COLOR = '#2abd61'

export const userstyles = StyleSheet.create({
    Hcontainer:{
        height: 60,
        backgroundColor: PRIMARY_COLOR,
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    HCartIcon: {
        position: 'absolute',
        right: 20,
        top: 28,
        flexDirection: 'row',
    },
    HSearchIcon: {
        paddingRight: 15,
    },
    HTitle: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 1,
        textShadowColor: 'black',
    },
    HSearchBack: {
        position: 'absolute',
        top: 28,
        left: 15,
    },
    HomeSContainer: {
        flex: 1,
        position: 'relative',
    },
    FGitemContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(245,245,245,1)',
        height: 190,
        borderRadius: 4,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: {width: 1, height: 1},
        ...Platform.select({
            android: {
                elevation: 5,
                position: 'relative',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 1.8,
            }
        })
    },
    FGitemImage: {
        height: 100,
    },
    FGitemTitle: {
        marginHorizontal: 5
    },
    FGitemPrice: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    ItemDetailImage: {
        height: 250,
    },
    ItemDetailTItle: {
        padding: 8,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        textTransform: 'uppercase'
    },
    ItemDetailTime: {
        textAlign: 'center',
        paddingHorizontal: 8
    },
    ItemDetailPrice: {
        textAlign: 'right',
        padding: 12,
        fontWeight: 'bold',
        fontSize: 33,
    },
    ItemDetailFooterContainer: {
        backgroundColor: 'rgba(250,250,250,0.1)',
        height: 55,
        position: 'relative'
    },
    ItemDetailFooterButton: {
        padding: 10,
        margin: 10,
        backgroundColor: PRIMARY_COLOR,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 4,
        overflow: 'hidden'
    },
    BCategoryItemStyle: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    BCategoryItemIconStyle: {
        color: 'green',
        position: 'absolute',
        right: 18,
        top: 25,
        fontSize: 14
    },
})