import singelproimg1 from './Components/Images/1-product.jpg';
import singelproimg2 from './Components/Images/2-product.jpg';
import singelproimg3 from './Components/Images/3-product.jpg';
import singelproimg4 from './Components/Images/4-product.jpg';

function Relatedproducts() {

 const mingleproductsdata = [
  {
    image: singelproimg1,
    name: 'Syltherine',
    details: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    linethroughprice: 'Rp 3.500.000',
    discountedprice: 30
  },
  {
    image: singelproimg2,
    name: 'Leviosa',
    details: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
  },
  {
    image: singelproimg3,
    name: 'Lolito',
    details: 'Luxury Big Sofa',
    price: 'Rp 7.000.000',
    linethroughprice: 'Rp 14.000.000',
    discountedprice: 50
  },
  {
    image: singelproimg4,
    name: 'Respira',
    details: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    newtag: true
  }
];

  return (
    mingleproductsdata.map((mingledata)=>{
        return(
            <>
            <h1>This is heading in Related products . js</h1>
            </>
        )
    })
  )
}

export default Relatedproducts