import React from "react";
import {
    Button,
    Card,
    CardGroup,
    Row, Col,
    Container,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
// @ts-ignore
import ChoroplethImageUrl from '@site/static/img/geovistoIcons/choropleth.png';
import MarkerImageUrl from '@site/static/img/geovistoIcons/marker.png';
import ConnectionImageUrl from '@site/static/img/geovistoIcons/connection.png';
export default function GeovistoShowcase(): JSX.Element {
    return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs={8}>
                <Row className="g-4">
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Choropleth</Card.Title>
                                <Card.Img variant="bottom" className="images" src={ChoroplethImageUrl} />
                                <Button variant="primary">Show more!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Marker</Card.Title>
                                <Card.Img variant="bottom" className="images" src={MarkerImageUrl} width={180}/>
                                <Button variant="primary">Show more!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cards">
                            <Card.Body>
                                <Card.Title className="titles">Connection</Card.Title>
                                <Card.Img variant="bottom" className="images" src={ConnectionImageUrl} />
                                <Button variant="primary">Show more!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    </Container>
);
}