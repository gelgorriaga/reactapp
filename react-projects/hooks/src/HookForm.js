import React from 'react';
import useFormState from './Hooks/useFormState';

export default function HookForm(){
    const [email, updateEmail, resetEmail] = useFormState("");
    const [password, updatePassword, resetPassword] = useFormState("");
    return(
        <div>
            <h1>email value is: {email} & pw value is: {password}</h1>
            <input type='text' value = {email} onChange={updateEmail}/>
            <input type='password' value = {password} onChange={updatePassword}/>
            <button onClick={resetEmail}>reset email</button>
            <button onClick={resetPassword}>reset pw</button>
        </div>
    )
}