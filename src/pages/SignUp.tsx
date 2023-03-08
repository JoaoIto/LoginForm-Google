import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { Input } from "../components/Input";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const SignupForm: React.FC = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <Input label="Nome: " type="text" name="user.nome" placeholder="Insira seu nome completo: " required />
        <Input label="Email" type="email" name="user.email" placeholder="Insira seu melhor email: " required />
        <Input label="Idade" type="number" name="user.idade" placeholder="Insira sua idade (mínimo 18)" required />
        
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

