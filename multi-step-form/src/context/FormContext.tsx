import { createContext, useContext, useState } from "react";

interface FormContextType {
    formData: FormData;
    setFormData: (data: FormData) => void;
}

export interface FormData {
    plan: string;
    billing: string;
    addOns: string[];
}

const FormContext = createContext<FormContextType | null>(null);

const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [formData, setFormData] = useState<FormData>({
        plan : 'Arcade',
        billing : 'Monthly',
        addOns : [],
    });

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