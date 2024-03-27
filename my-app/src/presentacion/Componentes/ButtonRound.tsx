import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,  TouchableOpacity, ToastAndroid } from 'react-native';
import { contenedor, letter, botton, input, logo  } from '/Users/juand/OneDrive/Documentos/Programming/Native/my-app/src/presentacion/styles/styles';

interface Props {
        text: string;
        onLongPress: () => void;
      }

      export const ButtonRound = ({ text, onLongPress}: Props) => {
        return (
          <TouchableOpacity style={botton.ButtonRound} onLongPress={() => onLongPress()}>
            
            <Text style={botton.buttonRoundTexto}>{text}</Text>
          </TouchableOpacity>
        );
      };


