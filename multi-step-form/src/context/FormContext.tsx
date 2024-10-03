import { createContext, useContext, useEffect, useState } from "react";

interface FormContextType {
    formData: FormData;
    formSubmitted: boolean;
    setFormSubmitted: (submitted: boolean) => void;
    setFormData: (data: FormData) => void;
}

export interface FormData {
    name: string;
    email: string;
    phone: string;
    plan: string;
    billing: string;
    price : number;
    addOns: {
        title : string;
        price : number;
    }[];
}

const FormContext = createContext<FormContextType | null>(null);

const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [formData, setFormData] = useState<FormData>(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : {
            name: '',
            email: '',
            phone: '',
            plan: 'Arcade',
            billing: 'Monthly',
            addOns: [],
            price : 0,
        };
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        localStorage.setItem('formData' , JSON.stringify(formData));
    } , [formData]);

    return (
        <FormContext.Provider value={{ formData, setFormData  , formSubmitted, setFormSubmitted}}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
}

export default FormProvider;