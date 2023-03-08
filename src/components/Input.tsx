import React from 'react';
import { useForm, FormProvider, Controller, useFormContext  } from 'react-hook-form';

interface Props {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

export const Input: React.FC<Props> = ({ label, type, name, placeholder, required }) => {
  const methods = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={methods.control}
        defaultValue=""
        render={({ field }) => <input {...field} type={type} placeholder={placeholder} required={required}/>}
      />
    </div>
  );
};
