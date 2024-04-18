import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Footer = () => {
  return (

    <>

    <div style={{paddingTop:'10vh'}} className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="head-footer1">
            <h1>Furniro.</h1>
          </div>
          <div className="footer-para">
            <p>400 University Drive Suite 200 Coral Gables, <br></br>FL 33134 USA</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="head-footer2">
            <h1>Links</h1>
          </div>

          <div className="links-2">
          <div class="navbar-nav">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Shop</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Contact</a>
      </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="head-footer2">
            <h1>Help</h1>
          </div>

          <div className="links-2">
          <div class="navbar-nav">
        <a class="nav-link" href="#">Payment Options</a>
        <a class="nav-link" href="#">Returns</a>
        <a class="nav-link" href="#">Privacy Policies</a>
      </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="head-footer-2">
            <h1>Newsletter</h1>
          </div>
          <TextField id="standard-basic" label="Enter Your Email Address" variant="standard" />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer