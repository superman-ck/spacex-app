import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import rocketNext from '../../../public/rocketNext.jpg';
import rocketPrev from '../../../public/rocketPrev.jpg';

import {
    Card,
    CardContent,
    CardHeader,
    Typography,
} from '@mui/material';

export default function ships({ data }) {
    console.log(data);

    return (
        <>
            <div>
                <Head>
                    <title>Ships</title>
                </Head>
            </div>
            <Link href="/">
                <h1>SpaceX App</h1>
            </Link>

            <Card
                variant='outlined'
                sx={{
                    width: 900,
                    height: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 5,
                    border: '1px solid #000957',
                    boxShadow:
                        '0 0 75px 25px rgba(88, 88, 88, 0.80), 0 0 25px 12.5px rgba(88, 88, 88, 0.80);'
                }}
            >
                <CardHeader
                    titleTypographyProps={{ fontFamily: 'fantasy', color: 'white' }}
                    title={"Ships"}
                    sx={{
                        background: 'linear-gradient(90deg, #222222, #444444, #555555)',
                        borderBottom: '10px solid gray',
                        font: 'icon',
                        textAlign: 'center',
                    }}
                />

                <CardContent>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='span'
                        sx={{
                            borderBottom: '1px solid #261FB3',
                            fontWeight: 'bold',
                            fontFamily: 'monospace'
                        }}
                    >

                        {/* List out 10 (max) ships with their serial id; clicking the list item would lead to its specific id page*/}
                        <div>
                            <ul>
                                {data.docs.map((ship) => (
                                    <li key={ship.id}>
                                        <Link href={`/ships/${ship.id}`}>
                                            Ship Name: {ship.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* If user is currently in the last page, hide next button */}
                        <div>
                            {data.hasNextPage ?
                                (
                                    <Link href={`${data.nextPage - 1}`}> {/* because the pages begin at 0 in paths, but begin at 1 in the api, we have to call the apiPage and "assign" that apiPage 1 page before it (ex. results at page 1 of the api is displayed at launches/page/0)  */}
                                        <button className='nextButton'>
                                            <Image
                                                src={rocketNext}
                                                width={45}
                                                height={45}
                                                className='rocketNext'>
                                            </Image>
                                        </button>

                                    </Link>
                                ) : (
                                    <button type="button" hidden></button>
                                )}
                        </div>

                        {/* If user is currently in the first page, hide previous button */}
                        <div>
                            {data.hasPrevPage ?
                                (
                                    <Link href={`${data.prevPage - 1}`}> {/* because the pages begin at 0 in paths, but begin at 1 in the api, we have to call the apiPage and "assign" that apiPage 1 page before it (ex. results at page 1 of the api is displayed at launches/page/0)  */}
                                        <button className='prevButton'>
                                            <Image
                                                src={rocketPrev}
                                                width={45}
                                                height={45}
                                                className='rocketPrev'>
                                            </Image>
                                        </button>
                                    </Link>
                                ) : (
                                    <button type="button" hidden></button>
                                )}
                        </div>

                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export async function getStaticProps({ params }) {
    const pageNo = parseInt(params.page);
    console.log(pageNo);
    const data = await getTenShipsData(pageNo); // call function with specific page number

    return {
        props: { data, pageNo },
        revalidate: 86400
    };
}

// get ten ships and their data
async function getTenShipsData(page) {
    let adjustedPage = 0;
    if (page === 0) {
        adjustedPage = 1;
    }
    else if (page > 0) {
        adjustedPage = page + 1;
    }
    const { data } = await axios.post(`https://api.spacexdata.com/v4/ships\\query`,
        {
            query: {},
            options: {
                page: adjustedPage,
                populate: []
            },
        }
    );
    return data;
}

// get all ships and their data
async function getShipsData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/ships`);
    return data;

}

export async function getStaticPaths() {
    const data = await getShipsData();
    const totalShips = data.length; // counts how many ships are listed in the api
    const totalPages = Math.ceil(totalShips / 10); // counts how many pages is necessary (10 ships per page)

    // pages begin at 0 (requirement)
    const paths = new Array(totalPages);
    for (let i = 0; i < totalPages; i++) {
        paths[i] = {
            params: { page: i.toString() }
        };
    }

    return {
        paths: paths,
        fallback: false
    };
}