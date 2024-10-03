import React from 'react'
import { useFormContext } from '../../context/FormContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children} : React.PropsWithChildren) {

    const {formSubmitted} = useFormContext();

    if(!formSubmitted) {
        return <Navigate to="/" />
    }

  return children;
}