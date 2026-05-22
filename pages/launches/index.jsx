import axios from 'axios';
import Head from 'next/head';

export default function launches({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>Launches</title>
                </Head>
            </div>
        </>
    )
}

async function getLaunchData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/launches`);
    return data;

}

export async function getStaticProps() {
    const data = await getLaunchData();
    return {
        props: { data },
        revalidate: 86400
    };
}