
// !! install the pack first

import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Button, View } from 'react-native';

//import Colors from '../constants/Colors';

const CustomHeaderButton = props => {

    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            IconSize={28}
            color={"orange"}
        //color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}

        />
    );
};

export default CustomHeaderButton;


const styles = StyleSheet.create({
    // btn: {
    //    margin:15,
    // }
});
