import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function cores({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>Cores</title>
                </Head>
            </div>
        </>
    )
}

async function getCoreData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/cores`);
    return data;

}

export async function getStaticProps() {
    const data = await getCoreData();
    return {
        props: { data },
        revalidate: 86400
    };
}