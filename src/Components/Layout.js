import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
  
  <h2 class="navbar-brand brand-name">
       <img class="img-responsive2" src="\logo.jpeg"/>
   </h2>
        
    <a class="navbar-brand" href="#">Education</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/course">Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/About">About US</a>
        </li>
        
       
      </ul>
      {/* <form class="d-flex" role="search">
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      </form> */}
    </div>
  </div>
</nav>


      
      
      
      
      
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          
        </ul>
      </nav> */}

      <Outlet />
      
      >
      
    </>
  )
};

export default Layout;