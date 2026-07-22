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
                <div>
                <Link href="/">
                    <h1>SpaceX App</h1> {/* clickable so the user can return to the homepage */}
                </Link>
            </div>
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

export async function getServerSideProps({ params }) {
    const pageNo = parseInt(params.page) || 0;
    // console.log(pageNo);

    try {
        const data = await axios.post(
            `https://api.spacexdata.com/v4/ships/query`,
            {
                query: {},
                options: {
                    page: pageNo + 1,
                    limit: 10,
                    populate: []
                },
            }
        );

        // if data fetched is null or undefined
        if (!data) {
            return {
                notFound: true
            }
        }
        return {
            props: { data, pageNo },
            revalidate: 86400
        };
    } catch (e) { // handle other exceptions
        return {
            notFound: true
        };
    }
}