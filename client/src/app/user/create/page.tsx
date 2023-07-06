
import CreateForm from '@/components/CreateForm';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

async function handleSubmit(data:FormData) {

}

export default function Create() {

  return (
    <section>
        <h1 className='text-center font-bold text-white text-6xl pt-20 mb-10'>Create Item</h1>
        <CreateForm />
    </section>
  )
}
