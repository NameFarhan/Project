import logo from './Images/1.png'
import account from './Images/2.png'
import search from './Images/3.png'
import heart from './Images/4.png'
import cart from './Images/5.png'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand d-flex justify-content-center align-items-center" href="#">
      <img src={logo}/>
      <h1 className='logo-head'>Furniro</h1>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div style={{position:'relative',left:'45px'}} class="navbar-nav">
        <a class="nav-link" href="/home">Home</a>
        <a class="nav-link" href="/shop">Shop</a>
        <a class="nav-link" href="/about">About</a>
        <a class="nav-link" href="/contact">Contact</a>
      </div>
    </div>
    <div className='icons d-flex'> 

    <a href='#'>
    <img src={account}/>
    </a>
    <a href='#'>
    <img src={search}/>
    </a>
    <a href='#'>
    <img src={heart}/>
    </a>
    <a href='#'>
    <img src={cart}/>
    </a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar