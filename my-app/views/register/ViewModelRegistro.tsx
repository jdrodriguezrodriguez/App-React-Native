import React, { useState} from 'react';

import { ApiEnvios } from '../../src/Datos/origen/remote/api/apienvios';

const RegistroViewModel = () =>{

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

        const onChange = (property: string, value: any) =>{
            setValues({...values, [property]: value});
        }
        
        const register = async () =>{
            try{
                const response = await ApiEnvios.post('/users/create', values);
                console.log('RESPONSE: '+JSON.stringify(response));
            } catch (error){
                console.log('ERROR:' + error);
            }
        }
        

    return{
        ...values,
        onChange,
        register
    }
}

export default RegistroViewModel;