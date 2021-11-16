// our-domain.com/new-Pack
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewPackForm from '../../components/Packs/NewPackForm';

function NewPackPage() {
  const router = useRouter();

  async function addPackHandler(enteredPackData) {
    const response = await fetch('/api/new-pack', {
      method: 'POST',
      body: JSON.stringify(enteredPackData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Pack</title>
        <meta
          name='description'
          content='Add your own cacks and create amazing networking opportunities.'
        />
      </Head>
      <NewPackForm onAddPack={addPackHandler} />
    </Fragment>
  );
}

export default NewPackPage;
