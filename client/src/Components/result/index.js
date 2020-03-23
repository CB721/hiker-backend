import React from "react";
import { Row, Col } from "../Grid";
import StarRatings from 'react-star-ratings';
import "./style.scss";

function Result(props) {
    function openHikeDetails(event, link) {
        event.preventDefault();
        window.open(link, '_blank');
    }
    return (
        <div className="result">
            <Row>
                <Col size="sm-3">
                    <img
                        src={props.result.imgSqSmall}
                        alt={props.result.name}
                        className="result-img"
                        onClick={(event) => openHikeDetails(event, props.result.url)}
                    />
                </Col>
                <Col size="sm-6">
                    <Row>
                        <Col size="12">
                            <p className="hike-name">{props.result.name}</p>
                        </Col>
                        <Col size="12">
                            <p className="hike-description">{props.result.summary}</p>
                        </Col>
                    </Row>
                </Col>
                <Col size="sm-3">
                    <Row>
                        <Col size="12">
                            <StarRatings
                                rating={Math.floor(props.result.stars)}
                                numberOfStars={5}
                                starDimension="1rem"
                                starRatedColor="rgb(238, 238, 238)"
                                starEmptyColor="rgba(238, 238, 238, 0)"
                                name='averageRating'
                            />
                        </Col>
                        <Col size="12">
                            {props.button}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Result;