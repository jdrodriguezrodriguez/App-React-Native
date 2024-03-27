import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './views/home/home';
import {RegisterScreen } from './views/register/register';

//Creamos la funcion compreba la rutas de vagacion
//y la exportamos para usarla donde necesitemos
export type RootStackParamList = {
    HomeScreen: undefined,
    RegisterScreen: undefined,
}

//Le pasamos la funcion recine creada
const Stack = createNativeStackNavigator<RootStackParamList>();


//Ahora reemplazamos MyStack por App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          
          
        }}>

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{title: '              CORDIAL SALUDO'}}
          />

            <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen}
            options={{
              headerShown: true,
              title:'Nuevo usuario'
            }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;