import { useForm, SubmitHandler } from "react-hook-form";

interface SignUp {
  firstName: string;
  lastName: string;
  age: number;
}

export function SignUp() {
  const { register, handleSubmit } = useForm<SignUp>();
  const onSubmit: SubmitHandler<SignUp> = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}