
import browse1 from './Images/1-browse.jpg'
import browse2 from './Images/2-browse.jpg'
import browse3 from './Images/3-browse.jpg'

const Browsetherange = () => {
  return (
    <>
    <div className='padder-browse'>
    <div className='head-browse text-center'>
        <h1>Browse The Range</h1>
    </div>
    <div className='para-browse text-center'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className='images-section pt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='img'>
                        <img src={browse1}/>
                        <div className='img-content pt-5 text-center'>
                            <h1>Dining</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='img'>
                        <img src={browse2}/>
                        <div className='img-content pt-5 text-center'>
                            <h1>Living</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='img'>
                        <img src={browse3}/>
                        <div className='img-content pt-5 text-center'>
                            <h1>Bedroom</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Browsetherange