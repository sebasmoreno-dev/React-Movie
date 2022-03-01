import React from 'react';
import  { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//styles
import { Image } from './Thum.styles';

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb'/>
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb'/>
    )}
  </div>
)

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clicked: PropTypes.bool,
}

export default Thumb;