import axios from 'axios';
import { Accordion } from "react-bootstrap";
import Head from 'next/head';
import Link from 'next/link';

import {
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@mui/material';

export default function cores({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>{`${data.serial}`}</title>
                </Head>
            </div>

            <div>
                <Link href="/">
                    <h1>SpaceX App</h1> {/* clickable so the user can return to the homepage */}
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
                    title={`${data.serial}`}
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
                            {/* Block */}
                            <div>
                                <dt className='title'>Block:</dt>
                                {data && `${data.block}` ?
                                    (
                                        <dd>{`${data.block}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Reuse count */}
                            <div>
                                <dt className='title'>Reuse count:</dt>
                                {data && `${data.reuse_count}` ?
                                    (
                                        <dd>{`${data.reuse_count}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* RTLS attempts */}
                            <div>
                                <dt className='title'>RTLS attempts:</dt>
                                {data && `${data.rtls_attempts}` ?
                                    (
                                        <dd>{`${data.rtls_attempts}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* ASDS attempts */}
                            <div>
                                <dt className='title'>ASDS attempts:</dt>
                                {data && `${data.asds_attempts}` ?
                                    (
                                        <dd>{`${data.asds_attempts}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* ASDS landings */}
                            <div>
                                <dt className='title'>ASDS landings:</dt>
                                {data && `${data.asds_landings}` ?
                                    (
                                        <dd>{`${data.asds_landings}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Last update */}
                            <div>
                                <dt className='title'>Last update:</dt>
                                {data && `${data.last_update}` ?
                                    (
                                        <dd>{`${data.last_update}`}</dd>
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

                            {/* Serial */}
                            <div>
                                <dt className='title'>Serial:</dt>
                                {data && `${data.serial}` ?
                                    (
                                        <dd>{`${data.serial}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
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
                        <Link href='/cores/page/1'>Back to all cores...</Link>
                    </Typography>
                </CardContent >
            </Card>
        </>
    )
}

export async function getStaticProps({ params }) {
    const data = await getIndCoresData(params.id);
    return {
        props: { data },
        revalidate: 86400
    };
}

async function getIndCoresData(id) {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/cores/` + id);
    console.log(`Fetched a launch (getStaticProps): ${data.name}`);
    return data;
}

async function getCoresData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/cores/`);
    return data;
}

export async function getStaticPaths() {
    const data = await getCoresData();
    const paths = data.map((core) => {
        return {
            params: { id: core.id.toString() }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}