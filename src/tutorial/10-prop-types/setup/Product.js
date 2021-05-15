import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({image,name,price}) => {
  const url = image && image.url;
  return <article className='product'>
    <img src={url || defaultImage} alt="" />
    <h4>{name || 'default name'}</h4>
    <p>{price || 3.99}</p>
    </article>;
};

//After setting the prop types and making them required we are going to have react scream at us 
//saying it was requried but is undefined 

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

//So to tackle we can have default props 

// Product.defaultProps = {
//   name:'Default name',
//   price: 3.99,
//   image: {
//     url: defaultImage
//   }
// }

//So now for the last product the image and the price was missing and now it renders the default values
export default Product;
