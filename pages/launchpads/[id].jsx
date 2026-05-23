import axios from 'axios';
import { Accordion, Container, Image } from "react-bootstrap";
import Head from 'next/head';
import Link from 'next/link';

import {
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@mui/material';

export default function launchpads({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>{`${data.name}`}</title>
                </Head>
            </div>

            <div>
                <Link href="/">
                    <div>
                <Link href="/">
                    <h1>SpaceX App</h1> {/* clickable so the user can return to the homepage */}
                </Link>
            </div> {/* clickable so the user can return to the homepage */}
                </Link>
            </div>

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
                    titleTypographyProps={{fontFamily: 'fantasy'}}
                    title={data.name}
                    sx={{
                        background: 'linear-gradient(90deg, #1230AE, #6C48C5, #C68FE6)',
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
                        <dl>
                            {/* Images */}
                            <div className="accordion">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Images</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                <dt>Large</dt>
                                                <dd>
                                                    <ul>
                                                        {data.images.large.map((pic) => (
                                                            <Container>
                                                                <div className="image">
                                                                    <Image width="300" height="300" padding="10px" src={`${pic}`} title="Picture displayer" ></Image>
                                                                </div>
                                                            </Container>
                                                        ))}
                                                    </ul>
                                                </dd>
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>


                            {/* Name */}
                            <div>
                                <dt className='title'>Name:</dt>
                                {data && `${data.name}` ?
                                    (
                                        <dd>{`${data.name}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Full name */}
                            <div>
                                <dt className='title'>Full name:</dt>
                                {data && `${data.full_name}` ?
                                    (
                                        <dd>{`${data.full_name}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Locality */}
                            <div>
                                <dt className='title'>Locality:</dt>
                                {data && `${data.locality}` ?
                                    (
                                        <dd>{`${data.locality}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Region */}
                            <div>
                                <dt className='title'>Region:</dt>
                                {data && `${data.region}` ?
                                    (
                                        <dd>{`${data.region}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Latitude */}
                            <div>
                                <dt className='title'>Latitude:</dt>
                                {data && `${data.latitude}` ?
                                    (
                                        <dd>{`${data.latitude}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Longitude */}
                            <div>
                                <dt className='title'>Longitude:</dt>
                                {data && `${data.longitude}` ?
                                    (
                                        <dd>{`${data.longitude}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Launch attempts*/}
                            <div>
                                <dt className='title'>Launch attempts:</dt>
                                {data && `${data.launch_attempts}` ?
                                    (
                                        <dd>{`${data.launch_attempts}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Launch successes*/}
                            <div>
                                <dt className='title'>Launch successes:</dt>
                                {data && `${data.launch_successes}` ?
                                    (
                                        <dd>{`${data.launch_successes}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Rockets */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Rockets</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.rockets ?
                                                    (data.rockets.length !== 0 ?
                                                        (
                                                            data.rockets.map((rocket) => (
                                                                <li>
                                                                    <Link href={`/rockets/${rocket}`}>{`${rocket}`}</Link>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no rockets.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Timezone */}
                            <div>
                                <dt className='title'>Timezone:</dt>
                                {data && `${data.timezone}` ?
                                    (
                                        <dd>{`${data.timezone}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Launches */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Launches</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.launches ?
                                                    (data.launches.length !== 0 ?
                                                        (
                                                            data.launches.map((launch) => (
                                                                <li>
                                                                    <Link href={`/launches/${launch}`}>{`${launch}`}</Link>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no launches.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Status */}
                            <div>
                                <dt className='title'>Status:</dt>
                                {data && `${data.status}` ?
                                    (
                                        <dd>{`${data.status}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Details */}
                            <div>
                                <dt className='title'>Details:</dt>
                                {data && `${data.details}` ?
                                    (
                                        <dd>{`${data.details}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* ID */}
                            <div>
                                <dt className='title'>ID:</dt>
                                {data && `${data.id}` ?
                                    (
                                        <dd>{`${data.id}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>
                        </dl>
                        <Link href='/launchpads/page/1'>Back to all launchpads...</Link>
                    </Typography>
                </CardContent >
            </Card>
        </>
    )
}

export async function getStaticProps({ params }) {
    const data = await getIndLaunchpadsData(params.id);
    return {
        props: { data },
        revalidate: 86400
    };
}

async function getIndLaunchpadsData(id) {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/launchpads/` + id);
    console.log(`Fetched a launchpad (getStaticProps): ${data.name}`);
    return data;
}

async function getLaunchpadsData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/launchpads/`);
    return data;
}

export async function getStaticPaths() {
    const data = await getLaunchpadsData();
    const paths = data.map((launchpad) => {
        return {
            params: { id: launchpad.id.toString() }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}