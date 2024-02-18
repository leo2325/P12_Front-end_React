import React from "react";

import { Link, useNavigate } from 'react-router-dom';

import '../../style/pages.css'

function ViewEmployees() {
    return (
      <div className="pagesContainer">
        <header className="pagesHeader">
          <h1>View Employees</h1>
        </header>
        <body>
            
        </body>
        <footer>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </footer>
      </div>
    );
  }
  
  export default ViewEmployees;