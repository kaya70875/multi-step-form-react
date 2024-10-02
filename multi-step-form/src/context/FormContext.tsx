import { createContext, useContext, useEffect, useState } from "react";

interface FormContextType {
    formData: FormData;
    setFormData: (data: FormData) => void;
}

export interface FormData {
    plan: string;
    billing: string;
    addOns: {
        title : string;
        price : string;
    }[];
}

const FormContext = createContext<FormContextType | null>(null);

const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [formData, setFormData] = useState<FormData>(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : {
            plan: 'Arcade',
            billing: 'Monthly',
            addOns: [],
        };
    });

    useEffect(() => {
        localStorage.setItem('formData' , JSON.stringify(formData));
    } , [formData]);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
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