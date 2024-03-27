import { StyleSheet } from "react-native";
/*HOME:*/
  export const contenedor = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },

        imgfondo:{
          width: '100%',
          height: '100%',
        },

      //CONTENEDOR INPUT
        overlay: {
          position: 'absolute',
          width: '100%', 
          height: 350, 
          top: '60%',
          backgroundColor: '#0c1922',
          borderWidth: 1, 
          borderColor: '#black', 
          borderRadius: 20,
          opacity: 0.9, 
        },

        //CONTENEDOR TITULO
        overlay2: {
          position: 'absolute',
          width: '100%', 
          height: 160, 
          bottom: 696,
          backgroundColor: '#0c1922',
          borderWidth: 1, 
          opacity: 0.9, 
        },
      
        
  })

  //LOGO
  export const logo = StyleSheet.create({
    icono:{
      display: 'flex',
      position: 'absolute',

    },
    
    logoimg:{
      width: 150,
      height: 150,
      bottom: 260,
      left: 18,
    },

    //CONTAINER CENTRO

    contenedorRopa:{
      display: 'flex',
      position: 'absolute',
    },
    fondoRopa:{
      width: 500,
      height: 500,
      bottom: 64,
      borderRadius: 80,
      opacity: 0.6,
    }

  })


  //INPUT (FORMULARIO)
  export const input = StyleSheet.create({
      
      //USER
      user:{ 
        display: 'flex',
      },
      
      txtuser: {
        height: 40,
        width: '70%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 15,
        left: '18%',
        bottom: 15,
      },

      iconlogin:{
        position: 'relative',
        height: '30%',
        width: '20%',
        top: '37%',
        right: '1%',
      },
    
      //PASSWORD
      password:{
        display: 'flex',
      },

      iconpassword:{
        position: 'relative',
        height: '30%',
        width: '10%',
        bottom: '30%',
        left: '4%',
      },

      txtpassword:{
        height: 40,
        width: '70%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 15,
        left: '18%',
        bottom: '55%',
      }
    
  })


  //LETRA
  export const letter = StyleSheet.create({
      txtTitulo:{
        fontSize: 16,
        left: 20,
        textAlign: 'center',
        bottom: 40,
        width: '90%',
        color: 'white',
        padding: 7,
        backgroundColor: 'darkred',
        borderRadius: 10,
      },

      //TITULO PRINCIPAL
      titulo:{
        fontSize: 30,
        color: '#fff',
        left: 6,
        textAlign: 'center',
        bottom: 265,
      }
  })

  //BOTONES
  export const botton = StyleSheet.create({

    //BTN LOGIN
    btn:{
      display: 'flex',
      position: 'absolute',
      top: '61%',
      left: '35%',
      width: '30%',
    },

    customButton: {
      backgroundColor: '#f6be00' , 
      paddingVertical: 5,
      borderRadius: 5,
    },

    buttonText: {
      color: 'black', 
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },

    //BTN REGISTER
    newAccount:{
      display: 'flex',
      position: 'absolute',
      top: '74%',
      left: '35%',

    },

    subTxtCrearCuenta:{
      fontSize: 15,
      color: '#fff',
      textAlign: 'center',
    },

    subTxtRegistrar:{
      fontSize: 18,
      color: 'red',
      textAlign: 'center',
    },
    
    //LOGICA BTN
    textRegistro : {
      fontStyle: 'italic',
      color: 'red',
      fontWeight: 'bold',
      marginLeft: 10,
    },
    
    //BTN PERSONALIZADO  
    ButtonRound : {
      width: '100%',
      height: 50,
      backgroundColor: '#f6be00',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginTop: 20,
    },

    buttonRoundTexto : {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });

  export const styles_r = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      opacity: 0.7,
      bottom: '30%'
    },
    form: {
      width: '100%',
      height: '70%',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 30
    },
    formText: {
      fontWeight: 'bold',
      fontSize: 16
    },
    formIcon: {
      width: 25,
      height: 25,
      marginTop: 5
    },
    formInput: {
      flexDirection: 'row',
      marginTop: 30,
    },
    formTextInput: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#AAAAAA',
      marginLeft: 15
    },
    formRegister: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30
    },
    formRegisterText: {
      fontStyle: 'italic',
      color: 'orange',
      borderBottomWidth: 1,
      borderBottomColor: 'orange',
      fontWeight: 'bold',
      marginLeft: 10
    },
    logoContainer: {
      position: 'absolute',
      alignSelf: 'center',
      top: '5%',
      alignItems: 'center'
    },
    logoImage: {
      width: 100,
      height: 100
    },
    logoText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold'
    },
    scrollViewContainer: {
      flexGrow: 1,
      paddingBottom: 20 // Ajusta esto según sea necesario para evitar que el contenido se superponga en la parte inferior
    }
  });

  export const newStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
  });
    
  