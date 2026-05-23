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

export default function payloads({ data }) {
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
                            <div className="accordion">
                                {/* Dragon */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Dragon</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Capsule */}
                                                <dt className="title">Capsule</dt>
                                                {data && data.dragon ?
                                                    (
                                                        data.dragon.capsule ?
                                                            (
                                                                <dd>{`${data.dragon.capsule}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no dragon.</dd>
                                                    )
                                                }

                                                {/* Mass returned kg */}
                                                <dt className="title">Mass returned (kg)</dt>
                                                {data && data.dragon ?
                                                    (
                                                        data.dragon.mass_returned_kg ?
                                                            (
                                                                <dd>{`${data.dragon.mass_returned_kg}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no dragon.</dd>
                                                    )
                                                }

                                                {/* Mass returned lbs */}
                                                <dt className="title">Mass returned (lbs)</dt>
                                                {data && data.dragon ?
                                                    (
                                                        data.dragon.mass_returned_lbs ?
                                                            (
                                                                <dd>{`${data.dragon.mass_returned_lbs}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no dragon.</dd>
                                                    )
                                                }

                                                {/* Flight time sec */}
                                                <dt className="title">Flight time (sec)</dt>
                                                {data && data.dragon ?
                                                    (
                                                        data.dragon.flight_time_sec ?
                                                            (
                                                                <dd>{`${data.dragon.flight_time_sec}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no dragon.</dd>
                                                    )
                                                }

                                                {/* Manifest */}
                                                <dt className="title">Manifest</dt>
                                                {data && data.dragon ?
                                                    (
                                                        data.dragon.manifest ?
                                                            (
                                                                <dd>{`${data.dragon.manifest}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no dragon.</dd>
                                                    )
                                                }

                                                {/* Water landing */}
                                                <dt className="title">Water landing</dt>
                                                {data && data.dragon ?
                                                    (
                                                        data.dragon.water_landing ?
                                                            (
                                                                <dd>{`${data.dragon.water_landing}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no dragon.</dd>
                                                    )
                                                }

                                                {/* Land landing */}
                                                <dt className="title">Land landing</dt>
                                                {data && data.dragon ?
                                                    (
                                                        data.dragon.land_landing ?
                                                            (
                                                                <dd>{`${data.dragon.land_landing}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no dragon.</dd>
                                                    )
                                                }
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
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

                            {/* Reused */}
                            <div>
                                <dt className='title'>Reused:</dt>
                                {data && `${data.reused}` ?
                                    (
                                        <dd>{`${data.reused}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Launch */}
                            <div>
                                <dt className='title'>Launch:</dt>
                                {data && data.payload ?
                                    (
                                        <dd>
                                            <Link href={`/payloades/${data.payload}`}>{`${data.payload}`}</Link>
                                        </dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Customers */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Customers</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.customers ?
                                                    (data.customers.length !== 0 ?
                                                        (
                                                            data.customers.map((customer) => (
                                                                <li>{`${customer}`}</li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no payloades.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* NORAD IDs */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>NORAD IDs</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.norad_ids ?
                                                    (data.norad_ids.length !== 0 ?
                                                        (
                                                            data.norad_ids.map((norad) => (
                                                                <li>{`${norad}`}</li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no NORAD IDs.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Nationalities */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Nationalities</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.nationalities ?
                                                    (data.nationalities.length !== 0 ?
                                                        (
                                                            data.nationalities.map((nationality) => (
                                                                <li>{`${nationality}`}</li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no nationalities.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Manufacturers */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Manufacturers</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.manufacturers ?
                                                    (data.manufacturers.length !== 0 ?
                                                        (
                                                            data.manufacturers.map((manufacturer) => (
                                                                <li>{`${manufacturer}`}</li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no manufacturers.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
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

                            {/* Orbit */}
                            <div>
                                <dt className='title'>Orbit:</dt>
                                {data && data.orbit ?
                                    (
                                        <dd>{`${data.orbit}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Reference system*/}
                            <div>
                                <dt className='title'>Reference system:</dt>
                                {data && data.reference_system ?
                                    (
                                        <dd>{`${data.reference_system}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Regime */}
                            <div>
                                <dt className='title'>Regime:</dt>
                                {data && data.regime ?
                                    (
                                        <dd>{`${data.regime}`}</dd>
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

                            {/* Semi major axis (km) */}
                            <div>
                                <dt className='title'>Semi major axis (km):</dt>
                                {data && data.semi_major_axis_km ?
                                    (
                                        <dd>{`${data.semi_major_axis_km}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Eccentricity */}
                            <div>
                                <dt className='title'>Eccentricity:</dt>
                                {data && data.eccentricity ?
                                    (
                                        <dd>{`${data.eccentricity}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Periapsis (km) */}
                            <div>
                                <dt className='title'>Periapsis (km):</dt>
                                {data && data.periapsis_km ?
                                    (
                                        <dd>{`${data.periapsis_km}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Apoapsis (km) */}
                            <div>
                                <dt className='title'>Apoapsis (km):</dt>
                                {data && data.apoapsis_km ?
                                    (
                                        <dd>{`${data.apoapsis_km}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Inclination deg */}
                            <div>
                                <dt className='title'>Inclination deg:</dt>
                                {data && data.inclination_deg ?
                                    (
                                        <dd>{`${data.inclination_deg}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Period (min) */}
                            <div>
                                <dt className='title'>Period (min):</dt>
                                {data && data.period_min ?
                                    (
                                        <dd>{`${data.period_min}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Lifespan (years) */}
                            <div>
                                <dt className='title'>Lifespan (years):</dt>
                                {data && data.lifespan_years ?
                                    (
                                        <dd>{`${data.lifespan_years}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Epoch */}
                            <div>
                                <dt className='title'>Epoch:</dt>
                                {data && data.epoch ?
                                    (
                                        <dd>{`${data.epoch}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Mean motion */}
                            <div>
                                <dt className='title'>Mean motion:</dt>
                                {data && data.mean_motion ?
                                    (
                                        <dd>{`${data.mean_motion}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* RAAN motion */}
                            <div>
                                <dt className='title'>RAAN motion:</dt>
                                {data && data.raan_motion ?
                                    (
                                        <dd>{`${data.raan_motion}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Argument of pericenter motion */}
                            <div>
                                <dt className='title'>Argument of pericenter:</dt>
                                {data && data.arg_of_pericenter ?
                                    (
                                        <dd>{`${data.arg_of_pericenter}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Mean anomaly */}
                            <div>
                                <dt className='title'>Mean anomaly:</dt>
                                {data && data.mean_anomaly ?
                                    (
                                        <dd>{`${data.mean_anomaly}`}</dd>
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
                        <Link href='/payloads/page/1'>Back to all payloads...</Link>
                    </Typography>
                </CardContent >
            </Card>
        </>
    )
}

export async function getStaticProps({ params }) {
    const data = await getIndPayloadsData(params.id);
    return {
        props: { data },
        revalidate: 86400
    };
}

async function getIndPayloadsData(id) {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/payloads/` + id);
    console.log(`Fetched a payload (getStaticProps): ${data.name}`);
    return data;
}

async function getPayloadsData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/payloads/`);
    return data;
}

export async function getStaticPaths() {
    const data = await getPayloadsData();
    const paths = data.map((payload) => {
        return {
            params: { id: payload.id.toString() }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}