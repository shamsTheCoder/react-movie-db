import React from 'react';
import { Col, Row } from 'reactstrap';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';

const Movies = () => (
  <div className="Movies">
    <div className=' movie-container'>
      <h3 className='mb-4'>What's Popular</h3>
      <Row xs='2'>
        <Col className='mb-4'><MovieCard /></Col>
        <Col className='mb-4'><MovieCard /></Col>
        <Col className='mb-4 mt-4'><MovieCard /></Col>
        <Col className='mb-4 mt-4'><MovieCard /></Col>
      </Row>
    </div>
  </div>
);

export default Movies;
