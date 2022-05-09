import React from "react";
import {
    Button,
    Card,
    Row, Col,
    Container,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './showCaseCards.css'
// @ts-ignore
import ChoroplethImageUrl from '@site/static/img/geovistoIcons/choropleth.png';
import MarkerImageUrl from '@site/static/img/geovistoIcons/marker.png';
import ConnectionImageUrl from '@site/static/img/geovistoIcons/connection.png';
import Link from "@docusaurus/Link";
export default function GeovistoShowcase(): JSX.Element {
    return (
    <Container>
        <Row>
            <Col/>
            <Col xs={8} className="mx-auto">
                <Row className="g-4">
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Choropleth</Card.Title>
                                <Card.Img variant="bottom" className="images" src={ChoroplethImageUrl} />
                                <Link to="/docs/tools/choropleth">
                                    <Button variant="default">Show more!</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Marker</Card.Title>
                                <Card.Img variant="bottom" className="images" src={MarkerImageUrl} width={180}/>
                                <Link to="/docs/tools/marker">
                                    <Button variant="default">Show more!</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Connection</Card.Title>
                                <Card.Img variant="bottom" className="images" src={ConnectionImageUrl} />
                                <Link to="/docs/tools/connection">
                                    <Button variant="default">Show more!</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col/>
        </Row>
    </Container>
);
}