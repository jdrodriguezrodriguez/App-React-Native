import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid, KeyboardType } from 'react-native';
import { styles_r } from '/Users/juand/OneDrive/Documentos/Programming/Native/my-app/src/presentacion/styles/styles';

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image, 
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
    return (
        <View style={styles_r.formInput}>
            <Image 
            style={styles_r.formIcon}
            source={image}>
            </Image>

            <TextInput
                style={styles_r.formTextInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={text => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}/>
        </View>
    )
} 
