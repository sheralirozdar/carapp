import React from 'react';
import { connect } from 'react-redux';
import { selectCarType } from '../actions';

const CarSelector = ({ selectCarType }) => {
  const handleCarTypeChange = (event) => {
    selectCarType(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">Select a Car Type</h5>
              <select
                className="form-select mb-3"
                onChange={handleCarTypeChange}
              >
                <option value="electrical">Electric Car</option>
                <option value="2 wheels">Motorcycle</option>
                <option value="sport">Sports Car</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { selectCarType })(CarSelector);

