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

export default function launch({ data }) {
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
                            <div className="accordion">
                                {/* Fairings */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Fairings</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Reused */}
                                                <dt className="title">Reused</dt>
                                                {data && data.fairings ?
                                                    (
                                                        `${data.fairings.reused}` ?
                                                            (
                                                                <dd>{`${data.fairings.reused}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There are no fairings</dd>
                                                    )
                                                }

                                                {/* Recovery attempt */}
                                                <dt className="title">Recovery attempt</dt>
                                                {data && data.fairings ?
                                                    (
                                                        `${data.fairings.recovery_attempt}` ?
                                                            (
                                                                <dd>{`${data.fairings.recovery_attempt}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There are no fairings</dd>
                                                    )
                                                }

                                                {/* Recovered */}
                                                <dt className="title">Recovered</dt>
                                                {data && data.fairings ?
                                                    (
                                                        `${data.fairings.recovered}` ?
                                                            (
                                                                <dd>{`${data.fairings.recovered}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There are no fairings</dd>
                                                    )
                                                }

                                                {/* Ships */}
                                                <dt className="title">Ships</dt>
                                                {data && data.fairings ?
                                                    (
                                                        data.fairings.ships.length !== 0 ?
                                                            (
                                                                <dd>
                                                                    <ul>
                                                                        {data.fairings.ships.map((ship, index) => (
                                                                            <li key={index}>{`${ship}`}</li>
                                                                        ))}
                                                                    </ul>
                                                                </dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There are no fairings.</dd>
                                                    )
                                                }
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Links */}
                            <div className="accordion">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Links</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Patch */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Patch</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    <dt>Small ver.</dt>
                                                                    <dd>
                                                                        <Container>
                                                                            <div className="image">
                                                                                <Image width="300" height="300" padding="10px" src={data.links.patch.small} title="Picture displayer" ></Image>
                                                                            </div>
                                                                        </Container>
                                                                    </dd>

                                                                    <dt>Large ver.</dt>
                                                                    <dd>
                                                                        <Container>
                                                                            <div className="image">
                                                                                <Image width="500" height="500" padding="10px" src={data.links.patch.large} title="Picture displayer" ></Image>
                                                                            </div>
                                                                        </Container>
                                                                    </dd>
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                                {/* Reddit */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Reddit</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* Campaign */}
                                                                    <dt className="title">Campaign</dt>
                                                                    {data && data.links.reddit ?
                                                                        (
                                                                            data.links.reddit.campaign ?
                                                                                (
                                                                                    <dd><a href={data.links.reddit.campaign} target="_blank" rel="noopener noreferrer">{data.links.reddit.campaign}</a></dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There are no Reddit links.</dd>
                                                                        )
                                                                    }

                                                                    {/* Launch */}
                                                                    <dt className="title">Launch</dt>
                                                                    {data && data.links.reddit ?
                                                                        (
                                                                            data.links.reddit.launch ?
                                                                                (
                                                                                    <dd><a href={data.links.reddit.launch} target="_blank" rel="noopener noreferrer">{data.links.reddit.launch}</a></dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There are no Reddit links.</dd>
                                                                        )
                                                                    }

                                                                    {/* Media */}
                                                                    <dt className="title">Media</dt>
                                                                    {data && data.links.reddit ?
                                                                        (
                                                                            data.links.reddit.media ?
                                                                                (
                                                                                    <dd><a href={data.links.reddit.media} target="_blank" rel="noopener noreferrer">{data.links.reddit.media}</a></dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There are no Reddit links.</dd>
                                                                        )
                                                                    }

                                                                    {/* Recovery */}
                                                                    <dt className="title">Recovery</dt>
                                                                    {data && data.links.reddit ?
                                                                        (
                                                                            data.links.reddit.recovery ?
                                                                                (
                                                                                    <dd><a href={data.links.reddit.recovery} target="_blank" rel="noopener noreferrer">{data.links.reddit.recovery}</a></dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There are no Reddit links.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Flickr */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Flickr</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* Small */}
                                                                    <dt className="title">Small</dt>
                                                                    {data && data.links ?
                                                                        (
                                                                            data.links.flickr ?
                                                                                (
                                                                                    data.links.flickr.small.length !== 0 ?
                                                                                        (
                                                                                            <dd>
                                                                                                <ul>
                                                                                                    {data.links.flickr.small.map((pic) => (
                                                                                                        <Container>
                                                                                                            <div className="image">
                                                                                                                <Image width="300" height="300" padding="10px" src={`${pic}`} title="Picture displayer" ></Image>
                                                                                                            </div>
                                                                                                        </Container>
                                                                                                    ))}
                                                                                                </ul>
                                                                                            </dd>
                                                                                        ) : (
                                                                                            <dd>N/A</dd>
                                                                                        )
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )
                                                                        ) : (
                                                                            <dd>There are no links.</dd>
                                                                        )
                                                                    }

                                                                    {/* Original */}
                                                                    <dt className="title">Original</dt>
                                                                    {data && data.links ?
                                                                        (
                                                                            data.links.flickr ?
                                                                                (
                                                                                    data.links.flickr.original.length !== 0 ?
                                                                                        (
                                                                                            <dd>
                                                                                                <ul>
                                                                                                    {data.links.flickr.original.map((pic) => (
                                                                                                        <Container>
                                                                                                            <div className="image">
                                                                                                                <Image width="300" height="300" padding="10px" src={`${pic}`} title="Picture displayer" ></Image>
                                                                                                            </div>
                                                                                                        </Container>
                                                                                                    ))}
                                                                                                </ul>
                                                                                            </dd>
                                                                                        ) : (
                                                                                            <dd>N/A</dd>
                                                                                        )
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )
                                                                        ) : (
                                                                            <dd>There are no links.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            </dl>

                                            {/* Presskit */}
                                            <div>
                                                <dt className='title'>Presskit:</dt>
                                                {data && data.links ?
                                                    (
                                                        data.links.presskit ?
                                                            (
                                                                <dd>{`${data.links.presskit}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )
                                                    ) : (
                                                        <dd>There are no links.</dd>
                                                    )
                                                }
                                            </div>

                                            {/* Webcast */}
                                            <div>
                                                <dt className='title'>Webcast:</dt>
                                                {data && data.links ?
                                                    (
                                                        `${data.links.webcast}` ?
                                                            (
                                                                <dd>
                                                                    <Container>
                                                                        <div className="video">
                                                                            <iframe width="480" height="270" src={`https://www.youtube-nocookie.com/embed/${data.links.youtube_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                                                                        </div>
                                                                    </Container>
                                                                </dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )
                                                    ) : (
                                                        <dd>There are no links.</dd>
                                                    )
                                                }
                                            </div>

                                            {/* Youtube ID */}
                                            <div>
                                                <dt className='title'>Youtube ID:</dt>
                                                {data && data.links ?
                                                    (
                                                        `${data.links.youtube_id}` ?
                                                            (
                                                                <dd>{`${data.links.youtube_id}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )
                                                    ) : (
                                                        <dd>There are no links.</dd>
                                                    )
                                                }
                                            </div>

                                            {/* Article */}
                                            <div>
                                                <dt className='title'>Article:</dt>
                                                {data && data.links ?
                                                    (
                                                        `${data.links.article}` ?
                                                            (
                                                                <dd>
                                                                    <a href={data.links.article} target="_blank" rel="noopener noreferrer">{data.links.article}</a>
                                                                </dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )
                                                    ) : (
                                                        <dd>There are no links.</dd>
                                                    )
                                                }
                                            </div>

                                            {/* Wikipedia */}
                                            <div>
                                                <dt className='title'>Wikipedia:</dt>
                                                {data && data.links ?
                                                    (
                                                        `${data.links.wikipedia}` ?
                                                            (
                                                                <dd>
                                                                    <a href={data.links.wikipedia} target="_blank" rel="noopener noreferrer">{data.links.wikipedia}</a>
                                                                </dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )
                                                    ) : (
                                                        <dd>There are no links.</dd>
                                                    )
                                                }
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Static Fire Date (UTC) */}
                            <div>
                                <dt className='title'>Static Fire Date (UTC):</dt>
                                {data && data.static_fire_date_utc ?
                                    (
                                        <dd>{data.static_fire_date_utc}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Static Fire Date (Unix) */}
                            <div>
                                <dt className='title'>Static Fire Date (UnixC):</dt>
                                {data && data.static_fire_date_unix ?
                                    (
                                        <dd>{data.static_fire_date_unix}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Net */}
                            <div>
                                <dt className='title'>Net:</dt>
                                {data && `${data.net}` ?
                                    (
                                        <dd>{`${data.net}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Window */}
                            <div>
                                <dt className='title'>Window:</dt>
                                {data && `${data.window}` ?
                                    (
                                        <dd>{`${data.window}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Rocket */}
                            <div>
                                <dt className='title'>Rocket:</dt>
                                {data && `${data.rocket}` ?
                                    (
                                        <dd>
                                            <Link href={`/rockets/${data.rocket}`}>{`${data.rocket}`}</Link>
                                        </dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Success */}
                            <div>
                                <dt className='title'>Success:</dt>
                                {data && `${data.success}` ?
                                    (
                                        <dd>{`${data.success}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Failures */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Failures</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.failures ?
                                                    (data.failures.length !== 0 ?
                                                        (
                                                            data.failures.map((fail) => (
                                                                <li key={fail.time}>
                                                                    Time: {fail.time} <br></br>
                                                                    Altitude: {fail.altitude} <br></br>
                                                                    Reason: {fail.reason} <br></br>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no failures.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Details */}
                            <div>
                                <dt className='title'>Details:</dt>
                                {data && data.details ?
                                    (
                                        <dd>{data.details}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Crew */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Crew</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.crew ?
                                                    (data.crew.length !== 0 ?
                                                        (
                                                            data.crew.map((member, index) => (
                                                                <li key={index}>{member}</li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There is no crew.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Ships */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Ships</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.ships ?
                                                    (data.ships.length !== 0 ?
                                                        (
                                                            data.ships.map((ship, index) => (
                                                                <li key={index}>
                                                                    <Link href={`/ships/${ship}`}>{`${ship}`}</Link>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no ships.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Capsules */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Capsules</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.capsules ?
                                                    (data.capsules.length !== 0 ?
                                                        (
                                                            data.capsules.map((capsule, index) => (
                                                                <li key={index}>{capsule}</li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no capsules.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Payloads */}
                            <div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Payloads</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.payloads ?
                                                    (data.payloads.length !== 0 ?
                                                        (
                                                            data.payloads.map((payload) => (
                                                                <li>
                                                                    <Link href={`/payloads/${payload}`}>{`${data.payloads}`}</Link>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no ships.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Launchpad */}
                            <div>
                                <dt className='title'>Launchpad:</dt>
                                {data && data.launchpad ?
                                    (
                                        <dd>
                                            <Link href={`/launchpads/${data.launchpad}`}>{`${data.launchpad}`}</Link>
                                        </dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Flight number */}
                            <div>
                                <dt className='title'>Flight Number:</dt>
                                {data && data.flight_number ?
                                    (
                                        <dd>{data.flight_number}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Date UTC */}
                            <div>
                                <dt className='title'>Date (UTC):</dt>
                                {data && data.date_utc ?
                                    (
                                        <dd>{data.date_utc}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Date Unix */}
                            <div>
                                <dt className='title'>Date (Unix):</dt>
                                {data && data.date_unix ?
                                    (
                                        <dd>{data.date_unix}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Date Local */}
                            <div>
                                <dt className='title'>Date (Local):</dt>
                                {data && data.date_local ?
                                    (
                                        <dd>{data.date_local}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Date Precision */}
                            <div>
                                <dt className='title'>Date (Precision):</dt>
                                {data && data.date_precision ?
                                    (
                                        <dd>{data.date_precision}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Upcoming */}
                            <div>
                                <dt className='title'>Upcoming:</dt>
                                {data && `${data.upcoming}` ?
                                    (
                                        `${data.upcoming}` ?
                                            (
                                                <dd>{`${data.upcoming}`}</dd>
                                            ) : (
                                                <dd>N/A</dd>
                                            )

                                    ) : (
                                        <dd>There is no upcoming.</dd>
                                    )
                                }
                            </div>

                            {/* Cores */}
                            <div className="accordion">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Cores</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.cores ?
                                                    (data.cores.length !== 0 ?
                                                        (
                                                            data.cores.map((c, index) => (
                                                                <li key={index}>
                                                                    Core: <Link href={`/cores/${c.core}`}>{`${c.core}`}</Link> <br></br>
                                                                    Flight: {`${c.flight}`} <br></br>
                                                                    Gridfins: {`${c.gridfins}`} <br></br>
                                                                    Legs: {`${c.legs}`} <br></br>
                                                                    Reused: {`${c.reused}`} <br></br>
                                                                    Landing attempt: {`${c.landing_attempt}`} <br></br>
                                                                    Landing success: {`${c.landing_success}`} <br></br>
                                                                    Landing type: {`${c.landing_type}`} <br></br>
                                                                    Landpad: {`${c.landing_type}`} <br></br>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no cores.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Auto-update */}
                            <div>
                                <dt className='title'>Auto update:</dt>
                                {data && `${data.auto_update}` ?
                                    (
                                        `${data.auto_update}` ?
                                            (
                                                <dd>{`${data.auto_update}`}</dd>
                                            ) : (
                                                <dd>N/A</dd>
                                            )

                                    ) : (
                                        <dd>There is no auto update.</dd>
                                    )
                                }
                            </div>

                            {/* TBD */}
                            <div>
                                <dt className='title'>TBD:</dt>
                                {data && `${data.tbd}` ?
                                    (
                                        `${data.tbd}` ?
                                            (
                                                <dd>{`${data.tbd}`}</dd>
                                            ) : (
                                                <dd>N/A</dd>
                                            )

                                    ) : (
                                        <dd>There is no TBD.</dd>
                                    )
                                }
                            </div>

                            {/* Launch library id */}
                            <div>
                                <dt className='title'>Launch library ID:</dt>
                                {data && data.launch_library_id ?
                                    (
                                        <dd>{data.launch_library_id}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* ID */}
                            <div>
                                <dt className='title'>ID:</dt>
                                {data && data.id ?
                                    (
                                        <dd>{data.id}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>
                        </dl >
                        <Link href='/launches/page/1'>Back to all launches...</Link>
                    </Typography >
                </CardContent >
            </Card >

        </>
    )
}

export async function getStaticProps({ params }) {
    const data = await getIndLaunchData(params.id);
    return {
        props: { data },
        revalidate: 86400
    };
}

async function getIndLaunchData(id) {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/launches/` + id);
    console.log(`Fetched a launch (getStaticProps): ${data.name}`);
    return data;
}

async function getLaunchData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/launches/`);
    return data;
}

export async function getStaticPaths() {
    const data = await getLaunchData();
    const paths = data.map((launch) => {
        return {
            params: { id: launch.id.toString() }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}