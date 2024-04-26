// import React from 'react';
// import { Link,Outlet } from 'react-router-dom';

// const MainNav = () => {
//   const linkStyle = {
    
//     marginRight: '50px', // Adjust this value to control the spacing between links
//     textDecoration: 'none',
//     color: 'black'
//   };

//   const hoverStyle = {
//     backgroundColor: 'grey',
//     textDecoration: 'underline'
//   };

//   return (
//     <div className="d-flex justify-content-center">
     
//       <Link to="/all" style={linkStyle} activeStyle={hoverStyle}>All</Link>
//       <Link to="/fullstack" style={linkStyle} activeStyle={hoverStyle}>Full Stack Web Development</Link>

      
//       <Link to="/datascience" style={linkStyle} activeStyle={hoverStyle}>Data Science</Link>
//       <Link to="/cybersecurity" style={linkStyle} activeStyle={hoverStyle}>Cyber Security</Link>
//       <Link to="/career" style={linkStyle} activeStyle={hoverStyle}>Career</Link>
//       <Outlet />
//     </div>
//   );
// };

// export default MainNav;


import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const MainNav = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/all">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/full_stack_web_development">Full Stack Web Development</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data_science">Data Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber_security">Cyber Security</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="col-md-9 col-sm-12 m-4">
      <Outlet />
    </div>

    </div>
  );
};

export default MainNav;

