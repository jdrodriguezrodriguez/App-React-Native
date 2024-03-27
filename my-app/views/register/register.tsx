import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, ToastAndroid, KeyboardType } from 'react-native';
import { styles_r} from '/Users/juand/OneDrive/Documentos/Programming/Native/my-app/src/presentacion/styles/styles';
import { ButtonRound } from '/Users/juand/OneDrive/Documentos/Programming/Native/my-app/src/presentacion/Componentes/ButtonRound';

import { CustomTextInput } from '../home/CustomTextInput';
import RegistroViewModel from './ViewModelRegistro';


export const RegisterScreen = () =>{

const {name, lastname, email, phone, password, confirmPassword, onChange } = RegistroViewModel();
     function register(): void {
          throw new Error('Function not implemented.');
     }

    return (
        <View style={styles_r.container}>
            <Image
            source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/fondo.jpg')} 
            style={styles_r.imageBackground}
            />
            
            <View style={styles_r.logoContainer}>
                <Image
                source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/agregar.png')} 
                style={styles_r.logoImage}
                />

                <Text style={styles_r.logoText} >SELECCIONA UNA IMAGEN</Text>
            </View >

            <View style={styles_r.form}>
                <Text style={styles_r.formText}>REGISTRARSE</Text>
                
                <CustomTextInput 
                        placeholder='Nombres'
                        keyboardType='default'
                        image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')}
                        property='name'
                        onChangeText={onChange}
                        value={name} secureTextEntry={false} />
               
               <CustomTextInput 
                        placeholder='Apellidos'
                        keyboardType='default'
                        image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/apellido.jpg')}
                        property='lastname'
                        onChangeText={onChange}
                        value={lastname} secureTextEntry={false} />

               <CustomTextInput 
                        placeholder='Correo electronico'
                        keyboardType='email-address'
                        image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')}
                        property='email'
                        onChangeText={onChange}
                        value={email} secureTextEntry={false} />
               
               <CustomTextInput 
                        placeholder='Telefono'
                        keyboardType='numeric'
                        image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')}
                        property='phone'
                        onChangeText={onChange}
                        value={phone} secureTextEntry={false} />
               
               <CustomTextInput 
                        placeholder='Contraseña'
                        keyboardType='default'
                        image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')}
                        property='password'
                        onChangeText={onChange}
                        value={password} secureTextEntry={true} />
               
               <CustomTextInput 
                        placeholder='Confirmar contraseña'
                        keyboardType='default'
                        image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')}
                        property='confirmPassword'
                        onChangeText={onChange}
                        value={confirmPassword} 
                        secureTextEntry={true} />
               
               <View style={{marginTop: 30}}>
                    <ButtonRound  text='CONFIRMAR' onLongPress={() => register() }/>
               </View>

            </View>
          </View>
    )
}
export default RegisterScreen

/*REGISTRO 
<View style={styles_r.formInput}>
                     <Image  style={styles_r.formIcon}
                     source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')} />

                     <TextInput style={styles_r.formTextInput} 
                     placeholder='Nombres' 
                     keyboardType='default'></TextInput>
                </View>
                
                <View style={styles_r.formInput}>
                     <Image  style={styles_r.formIcon}
                     source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/apellido.jpg')} />

                     <TextInput style={styles_r.formTextInput} 
                     placeholder='Apellido' 
                     keyboardType='default'></TextInput>
                </View>

                <View style={styles_r.formInput}>
                     <Image  style={styles_r.formIcon}
                     source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/email.jpg')} />

                     <TextInput style={styles_r.formTextInput} 
                     placeholder='Correo electronico' 
                     keyboardType='email-address'></TextInput>
                </View>

                <View style={styles_r.formInput}>
                     <Image  style={styles_r.formIcon}
                     source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/telefono.jpg')} />

                     <TextInput style={styles_r.formTextInput} 
                     placeholder='Telefono' 
                     keyboardType='numeric'></TextInput>
                </View>

                <View style={styles_r.formInput}>
                     <Image  style={styles_r.formIcon}
                     source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/contraseña.jpg')} />

                     <TextInput style={styles_r.formTextInput} 
                     placeholder='Contraseña' 
                     keyboardType='default'
                     secureTextEntry={true}></TextInput>
                </View>

                <View style={styles_r.formInput}>
                     <Image  style={styles_r.formIcon}
                     source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/contraseña.jpg')} />

                     <TextInput style={styles_r.formTextInput} 
                     placeholder='Confirmar contraseña' 
                     keyboardType='default'
                     secureTextEntry={true}></TextInput>
                </View>

                <View style={{marginTop:30}}>
                   <ButtonRound 
                    text="CONFIRMAR"
                    onLongPress={() => ToastAndroid.show("¡SALUDOS!", ToastAndroid.SHORT)}
                   /> 
                </View>*/