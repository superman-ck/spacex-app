import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function rockets({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>Rockets</title>
                </Head>
            </div>
        </>
    )
}

async function getRocketData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/rockets`);
    return data;

}

export async function getStaticProps() {
    const data = await getRocketData();
    return {
        props: { data },
        revalidate: 86400
    };
}