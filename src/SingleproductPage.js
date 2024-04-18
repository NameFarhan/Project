

import './SingleproductPage.css'
import Navbar from './Components/Navbar'
import icon1 from './Components/Images/Vector.svg'
import asgardsofa from './Components/Images/Asgaard sofa 3.svg'
import sideimg1 from './Components/Images/1-side.svg'
import sideimg2 from './Components/Images/2-side.svg'
import sideimg3 from './Components/Images/3-side.svg'
import sideimg4 from './Components/Images/4-side.svg'
import fbicon from './Components/Images/akar-icons_facebook-fill.svg'
import linkedinicon from './Components/Images/akar-icons_linkedin-box-fill.svg'
import twitter from './Components/Images/ant-design_twitter-circle-filled.svg'
import bed1 from './Components/Images/1-bed.svg'
import bed2 from './Components/Images/2-bed.svg'





function SingleproductPage() {
  return (
    <>
    <Navbar/>    

    <div className='after-navbar'>
        <div style={{display:'flex',flexDirection:'row',gap:'20px',marginTop:'20px'}}>
            <p>Home</p>
            <span><img src={icon1}/></span>
            <p>Shop</p>
            <span><img src={icon1}/></span>
            <div style={{height:'37px',width:'1px',position:'relative',bottom:'5px',left:'10px'}} className='vr'></div>
            <p style={{fontSize:'16px',color:'#000',marginLeft:'20px'}}>Asgard Sofa</p>
        </div>
    </div>

    <div className='single-product'>
        <div className='Wrapperofsingleproduct' style={{display:'flex',flexDirection:'row',justifyContent:'center',height:'100%'}}>
            <div className='single-product-width-1'>
                <div className='images-single-product'>
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <div className='side-images'>
                        <div className='side-image-1'>   
                        <img className='img-3-single' style={{marginBottom:'10px'}} src={sideimg1}/>
                        </div>
                        <div className='side-image-1'>   
                        <img className='side-image-2' src={sideimg2}/>

                        </div>
                        <div className='side-image-1'>   
                        <img className='img-3' src={sideimg3}/>

                        </div>
                        <div className='side-image-1'>   
                        <img src={sideimg4}/>

                        </div>
                    </div>
                    <div style={{display:'flex',alignItems:'center'}} className='side-image'>
                        <img style={{width:'100%',height:'391px'}} src={asgardsofa}/>
                    </div>

                    </div>
                </div>
            </div>
            <div className='single-product-width-2'>
                <div style={{display:'flex',flexDirection:'column'}} className='details-single-product'> 
                <h2 style={{fontWeight:'400'}} className='headofsingle'>Asgaard sofa</h2>
                <p style={{color:'#9F9F9F',fontSize:'24px',fontWeight:'500'}}>Rs. 250,000.00</p>
                <div style={{display:'flex',flexDirection:'row'}} className='ratings'>
                    <div className='stars'>
                    <i style={{color:'#FFC700'}} class="fa-solid fa-star"></i>
                    <i style={{color:'#FFC700'}} class="fa-solid fa-star"></i>
                    <i style={{color:'#FFC700'}} class="fa-solid fa-star"></i>
                    <i style={{color:'#FFC700'}} class="fa-solid fa-star"></i>
                    <i style={{color:'#FFC700'}} class="fa-solid fa-star-half"></i>
                    </div>
                    <div style={{marginLeft:'12px',width:'1.5px',height:'37px',position:'relative',bottom:'4px'}} className='vr'></div>
                    <p style={{fontSize:'13px',color:'#9F9F9F',fontWeight:'400',marginLeft:'24px',position:'relative',top:'4px'}}>5 Customer Review</p>
                </div>
                <div style={{textAlign:'left'}} className='paragraph'>
                    <h6 style={{fontSize:'13px',color:'#000',textAlign:'left'}}>Setting the bar as one of the loudest speakers in its class, the <br/> Kilburn is a compact, stout-hearted hero with a well-balanced <br/> audio which boasts a clear midrange and extended highs for a <br/> sound.</h6>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:'3vh'}} className='Size-Single'>
                    <p style={{color:'#9F9F9F',fontSize:'14px',fontWeight:'400'}}>Size</p>
                    <div style={{display:'flex',flexDirection:'row',gap:'15px'}} className='buttons'>
                        <button style={{backgroundColor:'#B88E2F'}}>L</button>
                        <button style={{backgroundColor:'#F9F1E7',color:'#000'}}>XL</button>
                        <button style={{backgroundColor:'#F9F1E7',color:'#000'}}>XS</button>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:'3vh'}} className='color'>
                    <p style={{color:'#9F9F9F',fontSize:'14px'}}>Color</p>
                    <div style={{display:'flex',flexDirection:'row',gap:'15px'}}>
                    <input type="color" id="favcolor" name="favcolor" value="#816DFA"/>
                    <input style={{backgroundColor:'#000000'}} type="color" id="favcolor" name="favcolor" value="#000000"/>
                    <input style={{backgroundColor:'#B88E2F'}} type="color" id="favcolor" name="favcolor" value="#B88E2F"/>

                    </div>
                </div>
                <div style={{marginTop:'5vh',marginBottom:'5vh',display:'flex',flexDirection:'row',gap:'15px'}} className='shop-buttons'>
                    <div style={{width:'123px',height:'64px',backgroundColor:'#FFFFFF',border:'1px solid #9F9F9F',borderRadius:'10px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',fontSize:'16px',gap:'35px'}} className='flexxer-1-single'>
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'215px',height:'64px',border:'1px solid black',borderRadius:'15px'}} className='flexxer-2-single'>
                        Add To Cart
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'215px',height:'64px',border:'1px solid black',borderRadius:'15px',gap:'10px'}} className='flexxer-3-single'>
                        <div>+</div>
                        <div>Compare</div>
                    </div>

                </div>

                    <hr/>


                    <div className='Tags-single-product' style={{display:'flex',flexDirection:'column',color:'#9F9F9F',marginTop:'3vh'}}>
                        <div style={{marginTop:'7px',marginBottom:'7px'}} className='line-1-single'>
                            <span>SKU</span>:<span> SS001</span>
                        </div>
                        <div style={{marginTop:'7px',marginBottom:'7px'}} className='line-2-single'>
                            <span>Category</span>:<span> Sofas</span>
                        </div>
                        <div style={{marginTop:'7px',marginBottom:'7px'}} className='line-3-single'>
                            <span>Tags</span>:<span> Sofa, Chair, Home, Shop</span>
                        </div>
                        <div style={{marginTop:'7px',marginBottom:'7px'}} className='line-4-single'>
                            <span>Share</span>:<span><img src={fbicon}/><img src={linkedinicon}/><img src={twitter}/></span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <div className='sectionendhr' style={{marginTop:'5vh'}}>
        <hr/>
    </div>

    <div className='Section-2-singleproduct'>
        <div style={{gap:'40px',display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'5vh'}} className='headofsingleproduct2'>
            <div style={{fontSize:'24px',fontWeight:'500'}}>Description</div>
            <div style={{fontSize:'24px',fontWeight:'500',color:'#9F9F9F'}}>Additional Information</div>
            <div style={{fontSize:'24px',fontWeight:'500',color:'#9F9F9F'}}>Reviews [5]</div>
        </div>

        <div className='para-1-single'>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        </div>

        <div className='paraofsingleproduct2'>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>

        <div className='Bed-images-single'>
            <div style={{display:'flex',flexDirection:'row',gap:'40px'}}>
                <div className='Bed-1-image'>
                    <img src={bed1}/>
                </div>
                <div className='Bed-2-image'>
                    <img src={bed2}/>
                </div>
            </div>
        </div>
    </div>
    <div className='sectionendhr' style={{marginTop:'5vh'}}>
        <hr/>
    </div>

    <div className='Some-products-singleproduct'>
        <div style={{marginTop:'5vh',marginBottom:'3.7vh'}} className='headofsingleproduct'>
            <h3 style={{fontSize:'36px',fontWeight:'400',textAlign:'center'}}>Related Products</h3>
        </div>

    </div>
    </>
  )
}

export default SingleproductPage