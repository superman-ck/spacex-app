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

export default function ships({ data }) {
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
                    titleTypographyProps={{ fontFamily: 'fantasy' }}
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
                            {/* Last AIS Update */}
                            <div>
                                <dt className='title'>Last AIS Update:</dt>
                                {data && data.last_ais_update ?
                                    (
                                        <dd>{`${data.last_ais_update}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Legacy ID */}
                            <div>
                                <dt className='title'>Legacy ID:</dt>
                                {data && `${data.legacy_id}` ?
                                    (
                                        <dd>{`${data.legacy_id}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Model */}
                            <div>
                                <dt className='title'>Model:</dt>
                                {data && data.model ?
                                    (
                                        <dd>{`${data.model}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Type */}
                            <div>
                                <dt className='title'>Type:</dt>
                                {data && data.type ?
                                    (
                                        <dd>{`${data.type}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* IMO */}
                            <div>
                                <dt className='title'>IMO:</dt>
                                {data && data.imo ?
                                    (
                                        <dd>{`${data.imo}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* MMSI */}
                            <div>
                                <dt className='title'>MMSI:</dt>
                                {data && data.mmsi ?
                                    (
                                        <dd>{`${data.mmsi}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* ABS */}
                            <div>
                                <dt className='title'>ABS:</dt>
                                {data && data.abs ?
                                    (
                                        <dd>{`${data.abs}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Class */}
                            <div>
                                <dt className='title'>Class:</dt>
                                {data && data.class ?
                                    (
                                        <dd>{`${data.class}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Mass (kg) */}
                            <div>
                                <dt className='title'>Mass (kg):</dt>
                                {data && data.mass_kg ?
                                    (
                                        <dd>{`${data.mass_kg}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Mass (lbs) */}
                            <div>
                                <dt className='title'>Mass (lbs):</dt>
                                {data && data.mass_lbs ?
                                    (
                                        <dd>{`${data.mass_lbs}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Year built */}
                            <div>
                                <dt className='title'>Year built:</dt>
                                {data && data.year_built ?
                                    (
                                        <dd>{`${data.year_built}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Home port */}
                            <div>
                                <dt className='title'>Home port:</dt>
                                {data && data.home_port ?
                                    (
                                        <dd>{`${data.home_port}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Status */}
                            <div>
                                <dt className='title'>Status:</dt>
                                {data && data.status ?
                                    (
                                        <dd>{`${data.status}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Speed (kn) */}
                            <div>
                                <dt className='title'>Speed (kn):</dt>
                                {data && data.speed_kn ?
                                    (
                                        <dd>{`${data.speed_kn}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Course (deg) */}
                            <div>
                                <dt className='title'>Course (deg):</dt>
                                {data && data.course_deg ?
                                    (
                                        <dd>{`${data.course_deg}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Latitude */}
                            <div>
                                <dt className='title'>Latitude:</dt>
                                {data && data.latitude ?
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
                                {data && data.longitude ?
                                    (
                                        <dd>{`${data.longitude}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Link */}
                            <div>
                                <dt className='title'>Link:</dt>
                                {data && data.link ?
                                    (
                                        <dd>
                                            <a href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</a>
                                        </dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Image */}
                            <div>
                                <dt className='title'>Image:</dt>
                                {data && data.image ?
                                    (
                                        <dd>
                                            <Container>
                                                <div className="image">
                                                    <Image width="300" height="200" padding="10px" src={data.image} title="Picture displayer" ></Image>
                                                </div>
                                            </Container>
                                        </dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Name */}
                            <div>
                                <dt className='title'>Name:</dt>
                                {data && data.name ?
                                    (
                                        <dd>{`${data.name}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Active */}
                            <div>
                                <dt className='title'>Active:</dt>
                                {data && `${data.active}` ?
                                    (
                                        <dd>{`${data.active}`}</dd>
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

                            {/* ID */}
                            <div>
                                <dt className='title'>ID:</dt>
                                {data && data.id ?
                                    (
                                        <dd>{`${data.id}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>
                        </dl>
                        <Link href='/ships/page/1'>Back to all ships...</Link>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export async function getStaticProps({ params }) {
    const data = await getIndShipsData(params.id);
    return {
        props: { data },
        revalidate: 86400
    };
}

async function getIndShipsData(id) {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/ships/` + id);
    console.log(`Fetched a ship (getStaticProps): ${data.name}`);
    return data;
}

async function getShipsData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/ships/`);
    return data;
}

export async function getStaticPaths() {
    const data = await getShipsData();
    const paths = data.map((ship) => {
        return {
            params: { id: ship.id.toString() }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}