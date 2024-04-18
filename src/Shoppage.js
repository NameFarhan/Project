import Navbar from "./Components/Navbar"
import './Shoppage.css'
import arrow from './Components/Images/Vector.svg'
import icon1 from './Components/Images/1.svg'
import icon2 from './Components/Images/2.svg'
import icon3 from './Components/Images/3.svg'
import img1 from './Components/Images/1-product.jpg'
import img2 from './Components/Images/2-product.jpg'
import img3 from './Components/Images/3-product.jpg'
import img4 from './Components/Images/4-product.jpg'
import guaranteeicon1 from './Components/Images/1-shop.svg'
import guaranteeicon2 from './Components/Images/2-shop.svg'
import guaranteeicon3 from './Components/Images/3-shop.svg'
import guaranteeicon4 from './Components/Images/4-shop.svg'
import Footer from './Components/footer'



const proucts = [
    {
        name:'Syltherine',
        details:'Stylish cafe chair',
        price:'Rp 2.500.000',
        image:img1,
        discount:30,
        overlinedtext:'Rp 3.500.000'

    },
     {
         name:'Leviosa',
         details:'Stylish cafe chair',
         price:'Rp 2.500.000',
         image:img2
     },
     {
         name:'Lolito',
         details:'Luxury big sofa',
         price:'Rp 7.000.000',
         image:img3,
         discount:50,
         overlinedtext:'Rp 14.000.000'
     },
     {
         name:'Respira',
         details:'Outdoor bar table and stool',
         price:'Rp 500.000',
         image:img4,
         new:'New'
     },
     {
        name:'Syltherine',
        details:'Stylish cafe chair',
        price:'Rp 2.500.000',
        image:img1,
        discount:30,
        overlinedtext:'Rp 3.500.000'
    },
     {
         name:'Leviosa',
         details:'Stylish cafe chair',
         price:'Rp 2.500.000',
         image:img2
     },
     {
         name:'Lolito',
         details:'Luxury big sofa',
         price:'Rp 7.000.000',
         image:img3,
         discount:50,
         overlinedtext:'Rp 14.000.000'

     },
     {
         name:'Respira',
         details:'Outdoor bar table and stool',
         price:'Rp 500.000',
         image:img4,
         new:'New'

     },
     {
        name:'Syltherine',
        details:'Stylish cafe chair',
        price:'Rp 2.500.000',
        image:img1,
        discount:30,
        overlinedtext:'Rp 3.500.000'

    },
     {
         name:'Leviosa',
         details:'Stylish cafe chair',
         price:'Rp 2.500.000',
         image:img2
     },
     {
         name:'Lolito',
         details:'Luxury big sofa',
         price:'Rp 7.000.000',
         image:img3,
         discount:50,
         overlinedtext:'Rp 14.000.000'

     },
     {
         name:'Respira',
         details:'Outdoor bar table and stool',
         price:'Rp 500.000',
         image:img4,
         new:'New'

     },
     {
        name:'Syltherine',
        details:'Stylish cafe chair',
        price:'Rp 2.500.000',
        image:img1,
        discount:30,
        overlinedtext:'Rp 3.500.000'


    },
     {
         name:'Leviosa',
         details:'Stylish cafe chair',
         price:'Rp 2.500.000',
         image:img2
     },
     {
         name:'Lolito',
         details:'Luxury big sofa',
         price:'Rp 7.000.000',
         image:img3,
         discount:50,
         overlinedtext:'Rp 14.000.000'

     },
     {
         name:'Respira',
         details:'Outdoor bar table and stool',
         price:'Rp 500.000',
         image:img4,
         new:'New'

     }
];

function Shoppage() {
  return (

    <>
    <Navbar/>

    <div className="Background">
        <div className="content">
            <h2 className="Shop">Shop</h2>
            <div className="spans" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <span className="bold-span">Home</span>
                <span> <img src={arrow}/></span>
                <span>Shop</span>
            </div>
        </div>
    </div>

    <div style={{marginBottom:'6vh'}} className="filter-options">
        <div style={{display:'flex',flexDirection:'row',padding:'0 2vw',height:'100%'}} className="flexxer">
            <div className="width-50-1">
                <div className="first-box">
                    <ul style={{display:'flex',alignItems:'center'}}>
                         <img style={{width:'25px',height:'25px'}} src={icon1}/>
                        <span style={{fontSize:'20px',marginRight:'25px'}}>Filter</span>
                        <img style={{width:'28px',height:'28px'}} src={icon2}/>
                        <img style={{width:'24px',height:'24px'}} src={icon3}/>
                        <div style={{color:'#706E6E',marginLeft:'2vw',width:'3px',height:'37px'}} className="vr"></div>
                        <div style={{display:'flex',justifyContent:'center',fontSize:'16px',color:'#000000',marginLeft:'2.5vw'}}>
                        Showing 1–16 of 32 results
                        </div>
                    </ul>
                </div>
            </div>
            <div className="width-50-2">
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}} className="flexxer">
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="second-box">
                        <span style={{fontSize:'20px'}}>Show</span>
                        <div style={{height:'55px',fontSize:'20px',fontWeight:'400',width:'55px',backgroundColor:'#FFFFFF',color:'#9F9F9F',padding:'14px 17px',marginLeft:'15px'}}>
                            16
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'25px'}} className="second-box">
                        <span style={{fontSize:'20px'}}>Short By</span>
                        <div style={{height:'55px',fontSize:'20px',fontWeight:'400',width:'188px',backgroundColor:'#FFFFFF',color:'#9F9F9F',padding:'14px 17px',marginLeft:'15px'}}>
                            Default
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

{/* Products are here */}

<div className="container-card-container">
        {
            proucts.map((item) =>{
                return(
                <>    
                <div className="container-card" style={{display:'inline-block'}}>

                    <div style={{display:'flex',flexDirection:'column',position:'relative'}} className="single-card">
                    <div className="image-card">
                        <img style={{width:'100%',display:'block'}} src={item.image}/>
                    </div>
                    {
                        item.discount &&
                    <div style={{position:'absolute'}} className="discount-tag-shop">
                        -{item.discount}%
                    </div>
                    }
                    {
                        item.new &&
                    <div style={{position:'absolute'}} className="new-tag-shop">
                        <p>{item.new}</p>
                    </div>
                    }
                    <div className="image-content">
                        <h2 style={{color:'#3A3A3A',fontSize:'24px',fontWeight:'500'}}>{item.name}</h2>
                        <p style={{color:'#898989',fontSize:'16px',lineHeight:'150%',fontWeight:'600'}}>{item.details}</p>
                        <h2 style={{fontSize:'20px',color:'#3A3A3A',lineHeight:'150%',fontWeight:'600'}}>{item.price}</h2>
                        {
                            item.overlinedtext &&
                        <div className="paragraph-shop-2">
                            <p style={{textDecoration:'line-through',fontSize:'16px',color:'#B0B0B0'}}>{item.overlinedtext}</p>
                        </div>
                        }
                  </div>
                </div>
                </div>
</>

                )
                
            })
        }
        </div>


        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5vh',marginBottom:'10vh',gap:'40px'}} className="buttons">
            <div className="button-1">
                1
            </div>
            <div className="button-2">
                2
</div>
<div className="button-3">
    3
</div>
<div className="button-4">
    Next

</div>
        </div>


        <div className="guarantee-section">
            <div style={{display:'flex',flexDirection:'row',height:'100%',padding:'0 2.5vw'}} className="flexer">

                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}} className="width-25-1"> 
                <span> <img style={{width:'52px',height:'60px'}} src={guaranteeicon1}/></span>
                <div className="para-and-heading" style={{display:'flex',flexDirection:'column'}}>

                <h2 style={{color:'#242424',fontSize:'25px',fontWeight:'600',lineHeight:'150%'}}>High Quality</h2>
                <p style={{color:'#898989',fontSize:'20px',}}>crafted from top materials</p>
                </div>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',position:'relative',left:'25px'}} className="width-25-2"> 
                <span> <img style={{width:'52px',height:'60px'}} src={guaranteeicon2}/></span>
                <div className="para-and-heading" style={{display:'flex',flexDirection:'column'}}>

                <h2 style={{color:'#242424',fontSize:'25px',fontWeight:'600',lineHeight:'150%'}}>Warranty Protection</h2>
                <p style={{color:'#898989',fontSize:'20px',}}>Over 2 years</p>
                </div>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',position:'relative',left:'25px'}} className="width-25-3"> 
                <span> <img style={{width:'52px',height:'60px'}} src={guaranteeicon3}/></span>
                <div className="para-and-heading" style={{display:'flex',flexDirection:'column'}}>

                <h2 style={{color:'#242424',fontSize:'25px',fontWeight:'600',lineHeight:'150%'}}>Free Shipping</h2>
                <p style={{color:'#898989',fontSize:'20px',}}>Order over 150 $</p>
                </div>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}} className="width-25-4"> 
                <span> <img style={{width:'52px',height:'60px'}} src={guaranteeicon4}/></span>
                <div className="para-and-heading" style={{display:'flex',flexDirection:'column'}}>

                <h2 style={{color:'#242424',fontSize:'25px',fontWeight:'600',lineHeight:'150%'}}>24 / 7 Support</h2>
                <p style={{color:'#898989',fontSize:'20px',}}>Dedicated support</p>
                </div>
                </div>

            </div>
        </div>

        {/* footer is here */}

        <Footer/>



    </>
  )
}

export default Shoppage