import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./showCaseCards.css";

// @ts-ignore
import ChoroplethImageUrl from "../../../static/img/geovistoIcons/choropleth.png";
// @ts-ignore
import MarkerImageUrl from "../../../static/img/geovistoIcons/marker.png";
// @ts-ignore
import ConnectionImageUrl from "../../../static/img/geovistoIcons/connection.png";
// @ts-ignore
import HeatImageUrl from "../../../static/img/geovistoIcons/test.png";
// @ts-ignore
import DotImageUrl from "../../../static/img/geovistoIcons/dot.png";
// @ts-ignore
import BubbleImageUrl from "../../../static/img/geovistoIcons/bubble.png";
// @ts-ignore
import SpikeImageUrl from "../../../static/img/geovistoIcons/spike.png";
import Link from "@docusaurus/Link";

/**
 * This file contains implementation of tile showcase of Geovisto tools for landing page
 *
 * @author Tomas Koscielniak
 */
export const GeovistoShowcase = (): JSX.Element => (
    <Container fluid='xl'>
        <Row>
            <Col xs={8} className="mx-auto ">
                <Row className="g-4">
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">
                                    Choropleth
                                </Card.Title>
                                <Card.Img
                                    variant="bottom"
                                    className="images"
                                    src={ChoroplethImageUrl}
                                />
                                <Link to="/docs/tools/choropleth">
                                    <Button variant="default">
                                        Show more!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">
                                    Marker
                                </Card.Title>
                                <Card.Img
                                    variant="bottom"
                                    className="images"
                                    src={MarkerImageUrl}
                                    width={180}
                                />
                                <Link to="/docs/tools/marker">
                                    <Button variant="default">
                                        Show more!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">
                                    Connection
                                </Card.Title>
                                <Card.Img
                                    variant="bottom"
                                    className="images"
                                    src={ConnectionImageUrl}
                                />
                                <Link to="/docs/tools/connection">
                                    <Button variant="default">
                                        Show more!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Heat</Card.Title>
                                <Card.Img
                                    variant="bottom"
                                    className="images"
                                    src={HeatImageUrl}
                                />
                                <Link to="/docs/tools/heat">
                                    <Button variant="default">
                                        Show more!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Dot</Card.Title>
                                <Card.Img
                                    variant="bottom"
                                    className="images"
                                    src={DotImageUrl}
                                />
                                <Link to="/docs/tools/dot">
                                    <Button variant="default">
                                        Show more!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">
                                    Bubble
                                </Card.Title>
                                <Card.Img
                                    variant="bottom"
                                    className="images"
                                    src={BubbleImageUrl}
                                />
                                <Link to="/docs/tools/bubble">
                                    <Button variant="default">
                                        Show more!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">
                                    Spike
                                </Card.Title>
                                <Card.Img
                                    variant="bottom"
                                    className="images"
                                    src={SpikeImageUrl}
                                />
                                <Link to="/docs/tools/spike">
                                    <Button variant="default">
                                        Show more!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

export default GeovistoShowcase;
