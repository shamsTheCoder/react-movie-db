import React from 'react';
import { Col, Row } from 'reactstrap';
import './MovieCard.css';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const MovieCard = () => (
  <div className="MovieCard">
    <Row xs='2'>
      <Col className='movie-poster'>
        <img alt="Sample" src="https://www.themoviedb.org/t/p/w440_and_h660_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" />
      </Col>
      <Col className='card-content'>
        <h4>Dr. Strange</h4>
        <h6>
          In the Multiverse of Madness
        </h6>
        <p className='release-date'>
          Release Date: 22 Dec 2021
        </p>
        <p className='movie-rating'>
          <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> <BsStar />
        </p>
        <a className='read-more text-success'>Read more...</a>
      </Col>
    </Row>
  </div>
);

export default MovieCard;
