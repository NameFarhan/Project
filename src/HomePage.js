import Navbar from './Components/Navbar'
import Afternavbar from './Components/Afternavbar'
import Browsetherange from './Components/Browsetherange';
import Products from './Components/Products';
import Footer from './Components/footer'
import Furniture from './Components/Furniture'
function Home() {
  return (
    <>
    <Navbar></Navbar>
<Afternavbar></Afternavbar>
<Browsetherange></Browsetherange>

<div className='head-product text-center'>
  <h1 style={{color:'#3A3A3A',fontSize:'40px',fontWeight:'700'}}>Our Products</h1>
</div>
<div className='products-section'>
        <div className="container">
          <div className="row"> {/* Apply flexbox */}
          <div className="col-md-3">  
<Products></Products>
</div>
          </div>
          </div>

          <div className='button text-center pb-5 pt-5'>
          <button style={{width:'245px',height:'48px',color:'#B88E2F',border:'1px solid #B88E2F',backgroundColor:'#fff',letterSpacing:'1px'}} type="button" class="btn btn-primary rounded-0">Show More</button>
          </div>
          </div>



<Furniture></Furniture>
<Footer></Footer>
    </>
  )
}

export default Home