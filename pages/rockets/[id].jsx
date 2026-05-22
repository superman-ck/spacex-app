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

export default function rockets({ data }) {
    return (
        <>
            <div>
                <Head>
                    <title>{`${data.name}`}</title>
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
                                {/* Height */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Height</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Meters */}
                                                <dt className="title">Meters:</dt>
                                                {data && data.height ?
                                                    (
                                                        data.height.meters ?
                                                            (
                                                                <dd>{`${data.height.meters}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no height.</dd>
                                                    )
                                                }

                                                {/* Feet */}
                                                <dt className="title">Feet:</dt>
                                                {data && data.height ?
                                                    (
                                                        data.height.feet ?
                                                            (
                                                                <dd>{`${data.height.feet}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no height.</dd>
                                                    )
                                                }
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            <div className="accordion">
                                {/* Diameter */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Diameter</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Meters */}
                                                <dt className="title">Meters:</dt>
                                                {data && data.diameter ?
                                                    (
                                                        data.diameter.meters ?
                                                            (
                                                                <dd>{`${data.diameter.meters}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no diameter.</dd>
                                                    )
                                                }

                                                {/* Feet */}
                                                <dt className="title">Feet:</dt>
                                                {data && data.diameter ?
                                                    (
                                                        data.diameter.feet ?
                                                            (
                                                                <dd>{`${data.diameter.feet}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no diameter.</dd>
                                                    )
                                                }
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            <div className="accordion">
                                {/* Mass */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Mass</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* kg */}
                                                <dt className="title">kg:</dt>
                                                {data && data.mass ?
                                                    (
                                                        data.mass.kg ?
                                                            (
                                                                <dd>{`${data.mass.kg}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no mass.</dd>
                                                    )
                                                }

                                                {/* lb */}
                                                <dt className="title">lb:</dt>
                                                {data && data.mass ?
                                                    (
                                                        data.mass.lb ?
                                                            (
                                                                <dd>{`${data.mass.lb}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no mass.</dd>
                                                    )
                                                }
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            <div className="accordion">
                                {/* First stage */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>First stage</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Thrust sea level */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Thrust Sea Level</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* kN */}
                                                                    <dt className="title">kN</dt>
                                                                    {data && data.first_stage.thrust_sea_level ?
                                                                        (
                                                                            data.first_stage.thrust_sea_level.kN ?
                                                                                (
                                                                                    <dd>{`${data.first_stage.thrust_sea_level.kN}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust sea level.</dd>
                                                                        )
                                                                    }

                                                                    {/* lbf */}
                                                                    <dt className="title">lbf</dt>
                                                                    {data && data.first_stage.thrust_sea_level ?
                                                                        (
                                                                            data.first_stage.thrust_sea_level.lbf ?
                                                                                (
                                                                                    <dd>{`${data.first_stage.thrust_sea_level.lbf}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust sea level.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Thrust vacuum */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Thrust Vacuum</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* kN */}
                                                                    <dt className="title">kN</dt>
                                                                    {data && data.first_stage.thrust_vacuum ?
                                                                        (
                                                                            data.first_stage.thrust_vacuum.kN ?
                                                                                (
                                                                                    <dd>{`${data.first_stage.thrust_vacuum.kN}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust vacuum.</dd>
                                                                        )
                                                                    }

                                                                    {/* lbf */}
                                                                    <dt className="title">lbf</dt>
                                                                    {data && data.first_stage.thrust_vacuum ?
                                                                        (
                                                                            data.first_stage.thrust_vacuum.lbf ?
                                                                                (
                                                                                    <dd>{`${data.first_stage.thrust_vacuum.lbf}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust vacuum.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Reusable */}
                                                <dt className="title">Reusable:</dt>
                                                {data && data.first_stage ?
                                                    (
                                                        `${data.first_stage.reusable}` ?
                                                            (
                                                                <dd>{`${data.first_stage.reusable}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no first stage.</dd>
                                                    )
                                                }

                                                {/* Engines */}
                                                <dt className="title">Engines:</dt>
                                                {data && data.first_stage ?
                                                    (
                                                        data.first_stage.engines ?
                                                            (
                                                                <dd>{`${data.first_stage.engines}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no first stage.</dd>
                                                    )
                                                }

                                                {/* Fuel amount tons */}
                                                <dt className="title">Fuel amount tons:</dt>
                                                {data && data.first_stage ?
                                                    (
                                                        data.first_stage.fuel_amount_tons ?
                                                            (
                                                                <dd>{`${data.first_stage.fuel_amount_tons}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no first stage.</dd>
                                                    )
                                                }

                                                {/* Burn time (sec) */}
                                                <dt className="title">Burn time (sec):</dt>
                                                {data && data.first_stage ?
                                                    (
                                                        data.first_stage.burn_time_sec ?
                                                            (
                                                                <dd>{`${data.first_stage.burn_time_sec}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no first stage.</dd>
                                                    )
                                                }

                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            <div className="accordion">
                                {/* Second stage */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Second stage</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Thrust */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Thrust</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* kN */}
                                                                    <dt className="title">kN</dt>
                                                                    {data && data.second_stage.thrust ?
                                                                        (
                                                                            data.second_stage.thrust.kN ?
                                                                                (
                                                                                    <dd>{`${data.second_stage.thrust.kN}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust.</dd>
                                                                        )
                                                                    }

                                                                    {/* lbf */}
                                                                    <dt className="title">lbf</dt>
                                                                    {data && data.second_stage.thrust ?
                                                                        (
                                                                            data.second_stage.thrust.lbf ?
                                                                                (
                                                                                    <dd>{`${data.second_stage.thrust.lbf}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Payloads */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Payloads</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* Composite fairing */}
                                                                    <div className="sub-accordion">
                                                                        <Accordion>
                                                                            <Accordion.Item eventKey="0">
                                                                                <Accordion.Header>Composite Fairing</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                    <dl>
                                                                                        <div className="sub-accordion">
                                                                                            {/* Height */}
                                                                                            <Accordion>
                                                                                                <Accordion.Item eventKey="0">
                                                                                                    <Accordion.Header>Height</Accordion.Header>
                                                                                                    <Accordion.Body>
                                                                                                        <dl>
                                                                                                            {/* Meters */}
                                                                                                            <dt className="title">Meters:</dt>
                                                                                                            {data && data.second_stage ?
                                                                                                                (
                                                                                                                    data.second_stage.payloads && data.second_stage.payloads.composite_fairing ?
                                                                                                                        (
                                                                                                                            data.second_stage.payloads.composite_fairing.height && data.second_stage.payloads.composite_fairing.height.meters ?
                                                                                                                                (
                                                                                                                                    <dd>{`${data.second_stage.payloads.composite_fairing.height.meters}`}</dd>
                                                                                                                                ) : (
                                                                                                                                    <dd>N/A</dd>
                                                                                                                                )
                                                                                                                        ) : (
                                                                                                                            <dd>N/A</dd>
                                                                                                                        )
                                                                                                                ) : (
                                                                                                                    <dd>There is no second stage.</dd>
                                                                                                                )
                                                                                                            }

                                                                                                            {/* Feet */}
                                                                                                            <dt className="title">Feet:</dt>
                                                                                                            {data && data.second_stage ?
                                                                                                                (
                                                                                                                    data.second_stage.payloads && data.second_stage.payloads.composite_fairing ?
                                                                                                                        (
                                                                                                                            data.second_stage.payloads.composite_fairing.height && data.second_stage.payloads.composite_fairing.height.feet ?
                                                                                                                                (
                                                                                                                                    <dd>{`${data.second_stage.payloads.composite_fairing.height.feet}`}</dd>
                                                                                                                                ) : (
                                                                                                                                    <dd>N/A</dd>
                                                                                                                                )
                                                                                                                        ) : (
                                                                                                                            <dd>N/A</dd>
                                                                                                                        )
                                                                                                                ) : (
                                                                                                                    <dd>There is no second stage.</dd>
                                                                                                                )
                                                                                                            }
                                                                                                        </dl>
                                                                                                    </Accordion.Body>
                                                                                                </Accordion.Item>
                                                                                            </Accordion>
                                                                                        </div>

                                                                                        <div className="sub-accordion">
                                                                                            {/* Diameter */}
                                                                                            <Accordion>
                                                                                                <Accordion.Item eventKey="0">
                                                                                                    <Accordion.Header>Diameter</Accordion.Header>
                                                                                                    <Accordion.Body>
                                                                                                        <dl>
                                                                                                            {/* Meters */}
                                                                                                            <dt className="title">Meters:</dt>
                                                                                                            {data && data.second_stage ?
                                                                                                                (
                                                                                                                    data.second_stage.payloads && data.second_stage.payloads.composite_fairing ?
                                                                                                                        (
                                                                                                                            data.second_stage.payloads.composite_fairing.diameter && data.second_stage.payloads.composite_fairing.diameter.meters ?
                                                                                                                                (
                                                                                                                                    <dd>{`${data.second_stage.payloads.composite_fairing.diameter.meters}`}</dd>
                                                                                                                                ) : (
                                                                                                                                    <dd>N/A</dd>
                                                                                                                                )
                                                                                                                        ) : (
                                                                                                                            <dd>N/A</dd>
                                                                                                                        )
                                                                                                                ) : (
                                                                                                                    <dd>There is no second stage.</dd>
                                                                                                                )
                                                                                                            }

                                                                                                            {/* Feet */}
                                                                                                            <dt className="title">Feet:</dt>
                                                                                                            {data && data.second_stage ?
                                                                                                                (
                                                                                                                    data.second_stage.payloads && data.second_stage.payloads.composite_fairing ?
                                                                                                                        (
                                                                                                                            data.second_stage.payloads.composite_fairing.diameter && data.second_stage.payloads.composite_fairing.diameter.feet ?
                                                                                                                                (
                                                                                                                                    <dd>{`${data.second_stage.payloads.composite_fairing.diameter.feet}`}</dd>
                                                                                                                                ) : (
                                                                                                                                    <dd>N/A</dd>
                                                                                                                                )
                                                                                                                        ) : (
                                                                                                                            <dd>N/A</dd>
                                                                                                                        )
                                                                                                                ) : (
                                                                                                                    <dd>There is no second stage.</dd>
                                                                                                                )
                                                                                                            }
                                                                                                        </dl>
                                                                                                    </Accordion.Body>
                                                                                                </Accordion.Item>
                                                                                            </Accordion>
                                                                                        </div>
                                                                                    </dl>
                                                                                </Accordion.Body>
                                                                            </Accordion.Item>
                                                                        </Accordion>
                                                                    </div>



                                                                    {/* option 1 */}
                                                                    <dt className="title">Option 1</dt>
                                                                    {data && data.second_stage.payloads ?
                                                                        (
                                                                            data.second_stage.payloads.option_1 ?
                                                                                (
                                                                                    <dd>{`${data.second_stage.payloads.option_1}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There are no payloads.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Reusable */}
                                                <dt className="title">Reusable:</dt>
                                                {data && data.second_stage ?
                                                    (
                                                        `${data.second_stage.reusable}` ?
                                                            (
                                                                <dd>{`${data.second_stage.reusable}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no second stage.</dd>
                                                    )
                                                }

                                                {/* Engines */}
                                                <dt className="title">Engines:</dt>
                                                {data && data.second_stage ?
                                                    (
                                                        data.second_stage.engines ?
                                                            (
                                                                <dd>{`${data.second_stage.engines}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no second stage.</dd>
                                                    )
                                                }

                                                {/* Fuel amount tons */}
                                                <dt className="title">Fuel amount tons:</dt>
                                                {data && data.second_stage ?
                                                    (
                                                        data.second_stage.fuel_amount_tons ?
                                                            (
                                                                <dd>{`${data.second_stage.fuel_amount_tons}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no second stage.</dd>
                                                    )
                                                }

                                                {/* Burn time (sec) */}
                                                <dt className="title">Burn time (sec):</dt>
                                                {data && data.second_stage ?
                                                    (
                                                        data.second_stage.burn_time_sec ?
                                                            (
                                                                <dd>{`${data.second_stage.burn_time_sec}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There is no second stage.</dd>
                                                    )
                                                }
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            <div className="accordion">
                                {/* Engines */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Engines</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* ISP */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>ISP</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* Sea level */}
                                                                    <dt className="title">Sea level</dt>
                                                                    {data && data.engines.isp ?
                                                                        (
                                                                            data.engines.isp.sea_level ?
                                                                                (
                                                                                    <dd>{`${data.engines.isp.sea_level}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no ISP.</dd>
                                                                        )
                                                                    }

                                                                    {/* Vacuum */}
                                                                    <dt className="title">Vacuum</dt>
                                                                    {data && data.engines.isp ?
                                                                        (
                                                                            data.engines.isp.vacuum ?
                                                                                (
                                                                                    <dd>{`${data.engines.isp.vacuum}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no ISP.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Thrust Sea Level */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Thrust Sea Level</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* kN */}
                                                                    <dt className="title">kN</dt>
                                                                    {data && data.engines.thrust_sea_level ?
                                                                        (
                                                                            data.engines.thrust_sea_level.kN ?
                                                                                (
                                                                                    <dd>{`${data.engines.thrust_sea_level.kN}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust sea level.</dd>
                                                                        )
                                                                    }

                                                                    {/* lbf */}
                                                                    <dt className="title">lbf</dt>
                                                                    {data && data.engines.thrust_sea_level ?
                                                                        (
                                                                            data.engines.thrust_sea_level.lbf ?
                                                                                (
                                                                                    <dd>{`${data.engines.thrust_sea_level.lbf}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust sea level.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Thrust Vacuum */}
                                                <div className="sub-accordion">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Thrust Vacuum</Accordion.Header>
                                                            <Accordion.Body>
                                                                <dl>
                                                                    {/* kN */}
                                                                    <dt className="title">kN</dt>
                                                                    {data && data.engines.thrust_vacuum ?
                                                                        (
                                                                            data.engines.thrust_vacuum.kN ?
                                                                                (
                                                                                    <dd>{`${data.engines.thrust_vacuum.kN}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust vacuum.</dd>
                                                                        )
                                                                    }

                                                                    {/* lbf */}
                                                                    <dt className="title">lbf</dt>
                                                                    {data && data.engines.thrust_vacuum ?
                                                                        (
                                                                            data.engines.thrust_vacuum.lbf ?
                                                                                (
                                                                                    <dd>{`${data.engines.thrust_vacuum.lbf}`}</dd>
                                                                                ) : (
                                                                                    <dd>N/A</dd>
                                                                                )

                                                                        ) : (
                                                                            <dd>There is no thrust vacuum.</dd>
                                                                        )
                                                                    }
                                                                </dl>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                                {/* Number */}
                                                <div>
                                                    <dt className="title">Number:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.number ?
                                                                (
                                                                    <dd>{`${data.engines.number}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There is no second stage.</dd>
                                                        )
                                                    }
                                                </div>

                                                {/* Type */}
                                                <div>
                                                    <dt className="title">Type:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.type ?
                                                                (
                                                                    <dd>{`${data.engines.type}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There are no engines.</dd>
                                                        )
                                                    }
                                                </div>

                                                {/* Version */}
                                                <div>
                                                    <dt className="title">Version:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.version ?
                                                                (
                                                                    <dd>{`${data.engines.version}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There are no engines.</dd>
                                                        )
                                                    }
                                                </div>

                                                {/* Layout */}
                                                <div>
                                                    <dt className="title">Layout:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.layout ?
                                                                (
                                                                    <dd>{`${data.engines.layout}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There are no engines.</dd>
                                                        )
                                                    }
                                                </div>

                                                {/* Engine loss max */}
                                                <div>
                                                    <dt className="title">Engine loss max:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.engine_loss_max ?
                                                                (
                                                                    <dd>{`${data.engines.engine_loss_max}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There are no engines.</dd>
                                                        )
                                                    }
                                                </div>

                                                {/* Propellant 1 */}
                                                <div>
                                                    <dt className="title">Propellant 1:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.propellant_1 ?
                                                                (
                                                                    <dd>{`${data.engines.propellant_1}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There are no engines.</dd>
                                                        )
                                                    }
                                                </div>

                                                {/* Propellant 2 */}
                                                <div>
                                                    <dt className="title">Propellant 2:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.propellant_2 ?
                                                                (
                                                                    <dd>{`${data.engines.propellant_2}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There are no engines.</dd>
                                                        )
                                                    }
                                                </div>

                                                {/* Thrust to weight */}
                                                <div>
                                                    <dt className="title">Thrust to weight:</dt>
                                                    {data && data.engines ?
                                                        (
                                                            data.engines.thrust_to_weight ?
                                                                (
                                                                    <dd>{`${data.engines.thrust_to_weight}`}</dd>
                                                                ) : (
                                                                    <dd>N/A</dd>
                                                                )

                                                        ) : (
                                                            <dd>There are no engines.</dd>
                                                        )
                                                    }
                                                </div>
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Landing legs */}
                            <div className="accordion">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Landing legs</Accordion.Header>
                                        <Accordion.Body>
                                            <dl>
                                                {/* Number */}
                                                <dt className="title">Number:</dt>
                                                {data && data.landing_legs ?
                                                    (
                                                        data.landing_legs.number ?
                                                            (
                                                                <dd>{`${data.landing_legs.number}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There are no landing legs.</dd>
                                                    )
                                                }

                                                {/* Material */}
                                                <dt className="title">Material:</dt>
                                                {data && data.landing_legs ?
                                                    (
                                                        data.landing_legs.material ?
                                                            (
                                                                <dd>{`${data.landing_legs.material}`}</dd>
                                                            ) : (
                                                                <dd>N/A</dd>
                                                            )

                                                    ) : (
                                                        <dd>There are no landing legs.</dd>
                                                    )
                                                }
                                            </dl>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Payload weights */}
                            <div className="accordion">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Payload weights</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {data && data.payload_weights ?
                                                    (data.payload_weights.length !== 0 ?
                                                        (
                                                            data.payload_weights.map((pw) => (
                                                                <li>
                                                                    ID: {pw.id} <br></br>
                                                                    Name: {pw.name} <br></br>
                                                                    kg: {pw.kg} <br></br>
                                                                    lb: {pw.lb} <br></br>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                    ) : (
                                                        <li>There are no payload weights.</li>
                                                    )
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Flickr images */}
                            <div className="accordion">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Flickr images</Accordion.Header>
                                        <Accordion.Body>
                                            {data && data.flickr_images ?
                                                (
                                                    data.flickr_images.length !== 0 ?
                                                        (
                                                            <ul>
                                                                {data.flickr_images.map((pic) => (
                                                                    <Container>
                                                                        <div className="image">
                                                                            <Image width="300" height="300" padding="10px" src={`${pic}`} title="Picture displayer" ></Image>
                                                                        </div>
                                                                    </Container>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <li>N/A</li>
                                                        )
                                                ) : (
                                                    <li>N/A</li>
                                                )
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Name */}
                            <div>
                                <dt className="title">Name:</dt>
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
                                <dt className="title">Type:</dt>
                                {data && data.type ?
                                    (
                                        <dd>{`${data.type}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Active */}
                            <div>
                                <dt className="title">Active:</dt>
                                {data && data.active ?
                                    (
                                        `${data.active}` ?
                                            (
                                                <dd>{`${data.type}`}</dd>
                                            ) : (
                                                <dd>N/A</dd>
                                            )
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Stages */}
                            <div>
                                <dt className="title">Stages:</dt>
                                {data && data.stages ?
                                    (
                                        <dd>{`${data.stages}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Boosters */}
                            <div>
                                <dt className="title">Boosters:</dt>
                                {data && data.boosters ?
                                    (
                                        <dd>{`${data.boosters}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Cost per launch */}
                            <div>
                                <dt className="title">Cost per launch:</dt>
                                {data && data.cost_per_launch ?
                                    (
                                        <dd>{`${data.cost_per_launch}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Success rate (PCT) */}
                            <div>
                                <dt className="title">Success rate (PCT):</dt>
                                {data && data.success_rate_pct ?
                                    (
                                        <dd>{`${data.success_rate_pct}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* First flight */}
                            <div>
                                <dt className="title">First flight:</dt>
                                {data && data.first_flight ?
                                    (
                                        <dd>{`${data.first_flight}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Country */}
                            <div>
                                <dt className="title">Country:</dt>
                                {data && data.country ?
                                    (
                                        <dd>{`${data.country}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Company */}
                            <div>
                                <dt className="title">Company:</dt>
                                {data && data.company ?
                                    (
                                        <dd>{`${data.company}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Wikipedia */}
                            <div>
                                <dt className="title">Wikipedia:</dt>
                                {data && data.wikipedia ?
                                    (
                                        <dd><a href={data.wikipedia} target="_blank" rel="noopener noreferrer">{data.wikipedia}</a></dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* Description */}
                            <div>
                                <dt className="title">Description:</dt>
                                {data && data.description ?
                                    (
                                        <dd>{`${data.description}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>

                            {/* ID */}
                            <div>
                                <dt className="title">ID:</dt>
                                {data && data.id ?
                                    (
                                        <dd>{`${data.id}`}</dd>
                                    ) : (
                                        <dd>N/A</dd>
                                    )
                                }
                            </div>
                        </dl>
                        <Link href='/rockets/page/1'>Back to all rockets...</Link>
                    </Typography>
                </CardContent >
            </Card>
        </>
    )
}

export async function getStaticProps({ params }) {
    const data = await getIndRocketsData(params.id);
    return {
        props: { data },
        revalidate: 86400
    };
}

async function getIndRocketsData(id) {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/rockets/` + id);
    console.log(`Fetched a rocket (getStaticProps): ${data.name}`);
    return data;
}

async function getRocketsData() {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/rockets/`);
    return data;
}

export async function getStaticPaths() {
    const data = await getRocketsData();
    const paths = data.map((rocket) => {
        return {
            params: { id: rocket.id.toString() }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}