import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function payloads({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>Payload</title>
                </Head>
            </div>
        </>
    )
}

async function getPayloadData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/payloads`);
    return data;

}

export async function getStaticProps() {
    const data = await getPayloadData();
    return {
        props: { data },
        revalidate: 86400
    };
}