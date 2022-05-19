import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import app from '../../../firebase.init';
import './SpotDetail.css';


const auth = getAuth(app);

const SpotDetail = () => {
    const [spotData, setSpotData] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/spots")
        .then(res => res.json())
        .then(data => setSpotData(data));
    }, []);

    const {id} = useParams();
    
    const spot = spotData.find(data => data._id === id) || {};

    console.log(spot);
    console.log(id);
    
    return (
      <div>
        <Container>
          <Row>
            <Col md={8}>
              <img src={spot.img} alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <h2 className="font-weight-bold darkIndigoText">{spot.title}</h2>
            </Col>
            <Col>
              <h2 className="font-weight-bold indigoText text-right">
                {spot.price}
              </h2>
            </Col>
          </Row>
          <p className="text-secondary">
            {spot.details}., {spot.duration} Bedroom, Semi-furnished, Luxurious,
            South facing Spot for Orders in Rangs Malancha, Melbourne.
          </p>
          <h3 className="font-weight-bold darkIndigoText">Price Detail -</h3>
          <p className="text-secondary">
            fees/tour: BDT5500 (negotiable) <br />
            Service Charge : 8,000/= Tk per package, subject to change <br />
            Insurance : BDT 5000.
          </p>
        </Container>
      </div>
    );
};

export default SpotDetail;