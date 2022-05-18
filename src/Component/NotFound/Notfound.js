import React from 'react';
import './Notfound.css'
import notfound from '../../Images/404.jpg';

const Notfound = () => {
    return (
      <div>
        <img className="notfound-img" src={notfound} alt="" />
        <br />

        <a href="/" className="btn btn-warning py-3 px-5 m-5">
          go home
        </a>
      </div>
    );
};

export default Notfound;