import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function launchpads({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>Launchpads</title>
                </Head>
            </div>
        </>
    )
}

async function getLaunchpadData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/launchpads`);
    return data;

}

export async function getStaticProps() {
    const data = await getLaunchpadData();
    return {
        props: { data },
        revalidate: 86400
    };
}