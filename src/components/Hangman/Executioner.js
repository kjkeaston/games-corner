import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Executioner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <form className="">
              <div className="form-group">
                <input 
                  value="" 
                  onChange=""
                  className="form-control" 
                  type="text" 
                  placeholder="Choose your word!" />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-outline-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Executioner;
