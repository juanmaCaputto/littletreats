import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import PackDetail from '../../components/packs/PackDetail';

function PackDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.packData.title}</title>
        <meta name='description' content={props.packData.description} />
      </Head>
      <PackDetail
        image={props.packData.image}
        title={props.packData.title}
        price={props.packData.price}
        description={props.packData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://capumotto:macanudo@cluster0.gnfcw.mongodb.net/packs?retryWrites=true&w=majority'
  );
  const db = client.db();

  const PacksCollection = db.collection('packs');

  const packs = await PacksCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: packs.map((pack) => ({
      params: { packId: pack._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single Pack

  const packId = context.params.packId;

  const client = await MongoClient.connect(
    'mongodb+srv://capumotto:macanudo@cluster0.gnfcw.mongodb.net/packs?retryWrites=true&w=majority'
  );
  const db = client.db();

  const packsCollection = db.collection('packs');

  const selectedPack = await packsCollection.findOne({
    _id: ObjectId(packId),
  });

  client.close();

  return {
    props: {
      packData: {
        id: selectedPack._id.toString(),
        title: selectedPack.title,
        address: selectedPack.address,
        image: selectedPack.image,
        description: selectedPack.description,
      },
    },
  };
}

export default PackDetails;
