import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function ships({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>Ships</title>
                </Head>
            </div>
        </>
    )
}

async function getShipData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/ships`);
    return data;

}

export async function getStaticProps() {
    const data = await getShipData();
    return {
        props: { data },
        revalidate: 86400
    };
}