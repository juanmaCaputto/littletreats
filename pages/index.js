import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { Container } from "react-bootstrap";

import PackList from "../components/packs/PackList";
import MainLogo from "../components/layout/MainLogo";
import logo from "../images/logo-little.png";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Little Treats</title>
        <link rel="icon" href={logo} />
        <meta
          name="description"
          content="Galletitas personalizadas y hechas con amor! <3"
        />
      </Head>
      <MainLogo />
      <PackList packs={props.packs} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://capumotto:macanudo@cluster0.gnfcw.mongodb.net/packs?retryWrites=true&w=majority"
  );
  const db = client.db();

  const packsCollection = db.collection("packs");

  const packs = await packsCollection.find().toArray();

  client.close();

  return {
    props: {
      packs: packs.map((pack) => ({
        title: pack.title,
        price: pack.price,
        image: pack.image,
        description: pack.description,
        id: pack._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
