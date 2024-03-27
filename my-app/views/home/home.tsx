import React from 'react';
import { Text, View, Image, TextInput,  TouchableOpacity } from 'react-native';
import { styles_r ,contenedor, letter, botton, input, logo, newStyle  } from '/Users/juand/OneDrive/Documentos/Programming/Native/my-app/src/presentacion/styles/styles';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import { ButtonRound } from '/Users/juand/OneDrive/Documentos/Programming/Native/my-app/src/presentacion/Componentes/ButtonRound';
import { RootStackParamList } from '../../App';
import HomeViewModel from './HomeViewModel';
import { CustomTextInput } from './CustomTextInput';

export const HomeScreen = () => { 
    const {email, password, onChange } = HomeViewModel();
    
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
    //APP:
    return (
        <View style={contenedor.container}>
            <Image
            source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/fondo.jpg')} 
            style={contenedor.imgfondo}
            />

            <View style={contenedor.overlay2}></View>
            
            <View style={logo.contenedorRopa}>
              <Image
              source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/fondo-input.jpg')} 
              style={logo.fondoRopa}
              />
            </View>

            <View style={logo.icono}>
              <Text style={letter.titulo} >BIENVENIDOS</    Text>
              <Image
              source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/principal.png')} 
              style={logo.logoimg}
              />
            </View>

        
              <View style={contenedor.overlay}>  
              
                <CustomTextInput
                  image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')}
                  placeholder='Correo electronico'
                  keyboardType='email-address'
                  property='email'
                  onChangeText={onChange}
                  value={email}
                  secureTextEntry={false}/>
                
                <View style={input.password}>
                  <CustomTextInput 
                    image={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/password.png')}
                    placeholder='contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}/>
                </View>
                
                <View style={{marginTop: 30}}>
                  <ButtonRound text='LOGIN' 
                  onLongPress={ () => {
                    console.log('Email:' + email);
                    console.log('Password:' + password);
                  }}/>
                </View>
                <View style={botton.newAccount}>
                    <Text style={botton.subTxtCrearCuenta}>¿No tienes cuenta?</Text>

                    <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen')}>
                        <Text style={botton.subTxtRegistrar}>Registrate</Text>
                    </TouchableOpacity>
                </View>

                
              </View>
        </View>
  );
}

  /*//BOTON PERSONALIZADO

      //FUNCION:
      <View>
            <ButtonRound 
              text=""
              onLongPress={() => ToastAndroid.show("Saludos", ToastAndroid.LONG)}
            />
          </View>*/


  /*//APP:
  
    return (
        <View style={contenedor.container}>
            <Image
            source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/fondo.jpg')} 
            style={contenedor.imgfondo}
            />

            <View style={contenedor.overlay2}></View>
            
            <View style={logo.contenedorRopa}>
              <Image
              source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/fondo-input.jpg')} 
              style={logo.fondoRopa}
              />
            </View>

            <View style={logo.icono}>
              <Text style={letter.titulo} >BIENVENIDOS</    Text>
              <Image
              source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/principal.png')} 
              style={logo.logoimg}
              />
            </View>

        
              <View style={contenedor.overlay}>

                <View style={input.user} >
                    <Image style={input.iconlogin} source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/login.png')} />
                    <Text style={letter.txtTitulo} >INGRESA TUS  DATOS</Text>
                    <TextInput style={input.txtuser} placeholder="Usuario"/>
                </View>

                <View style={input.password}>
                    <Image style={input.iconpassword} source={require('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/img/password.png')} />
                        <TextInput 
                        style={input.txtpassword} placeholder='Digite su contraseña' keyboardType='default' secureTextEntry={true}
                        />
                </View>

                <View style={botton.btn} >
                    <TouchableOpacity style={botton.customButton} onPress={() => {
                    }}>
                    
                        <Text style={botton.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={botton.newAccount}>
                    <Text style={botton.subTxtCrearCuenta}>¿No tienes cuenta?</Text>

                    <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen')}>
                        <Text style={botton.subTxtRegistrar}>Registrate</Text>
                    </TouchableOpacity>

                </View>

              </View>
        </View>
  );
  */