import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import MyForm from './MyForm';

function App() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      gender: 'male',
      hobbies: ['cooking', 'coding'],
    },
  });

  const onSubmit = (data) => console.log(data);
  const onError = (error) => console.log(error);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)}>
        <MyForm />
      </form>
    </FormProvider>
  );
}

export default App;
