import pro1 from './Images/1-product.jpg'
import pro2 from './Images/2-product.jpg'
import pro3 from './Images/3-product.jpg'
import pro4 from './Images/4-product.jpg'
import pro5 from './Images/5-product.jpg'
import pro6 from './Images/6-product.jpg'
import pro7 from './Images/7-product.jpg'
import pro8 from './Images/8-product.jpg'
import './Products.css'


const products = [
    {
        name:'Syltherine',
        details:'Stylish cafe chair',
        price:'2.500.000',
        image:pro1,
        discount: 30,
        overlinedtext:'Rp 3.500.000'
    },
    {
        name:'Leviosa',
        details:'Stylish cafe chair',
        price:'2.500.000',
        image:pro2,
    },
    {
        name:'Lolito',
        details:'Luxury Big Sofa',
        price:'7.000.000',
        image:pro3,
        discount: 50,
        overlinedtext:'Rp 14.000.000'

    },

    {
        name:'Respira',
        details:'Outdoor bar table and stool',
        price:'500.000',
        image:pro4,
        new:true
    },
    {
        name:'Grifo',
        details:'Night Lamp',
        price:'1.500.000',
        image:pro5,
    },
    {
        name:'Muggo',
        details:'Small mug',
        price:'150.000',
        image:pro6,
        new:true
    },
    {
        name:'Pingky',
        details:'Cute bed set',
        price:'7.000.000',
        image:pro7,
        discount: 50,
        overlinedtext:'Rp 14.000.000'
    },
    {
        name:'Potty',
        details:'Minimalist flower pot',
        price:'500.000',
        image:pro8,
        new:true
    }
]

 function Products() {
  return (
    products.map((item) => (
      <div style={{position:'relative'}}>
              <img src={item.image} />
              {
                item.discount &&
              <div className='discount-tag'>
                -{item.discount}%
              </div>
              }
              {
                item.new &&
<div style={{position:'absolute'}} className='new-tag'>
                <p>New</p>
              </div>
              }
              

              <div className="img-content-products">
                <h1>{item.name}</h1>
                <p className='para-pro'>{item.details}</p>
                <p className='price-pro'>Rp {item.price}</p>
                {
                    item.overlinedtext &&
                <div className='overlined-text'>
                    <p style={{color:'#B0B0B0',position:'relative',left:'10vw',bottom:'5.5vh',textDecoration:'line-through'}}>{item.overlinedtext}</p>
                </div>
                }
              </div>
              </div>        
      ))     
  )
}

export default Products