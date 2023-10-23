import React from 'react';
import { connect } from 'react-redux';
import { selectCarType } from '../actions';
import { carData } from '../data/cars';

const CarDetails = ({ car }) => {
  return (
    <div className="container">
      {car ? (
        <div className="row mt-3">
          {carData[car].map((carObject, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card">
                <img src={carObject.image} alt={carObject.name} className="card-img-top" style={{height: "100%"}}/>
                <div className="card-body">
                  <h5 className="card-title">{carObject.name}</h5>
                  <p className="card-text">Parts: {carObject.parts.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-3">Please select a car type</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  car: state.car.selectedCarType
});

export default connect(mapStateToProps)(CarDetails);
