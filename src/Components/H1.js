import { useState,useEffect } from "react"
function H1(props) {

    useEffect(() => {
        alert('Welcome to the page')
    }, [])


    let [count,setcounter] = useState(0);
    function addnumber(){
        setcounter(count + 1)
    }
    function decreasenumber(){
        setcounter(count - 1)
    }


  return (
    <>
    <div style={{gap:'16px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
        <button style={{border:'none',outline:'none',padding:'10px',backgroundColor:'tomato',color:'#fff'}} onClick={addnumber}>Add Value</button>
        <h1 style={{color:'#555'}}>{count}</h1>
        <button style={{border:'none',outline:'none',padding:'10px',backgroundColor:'tomato',color:'#fff'}} onClick={decreasenumber}>Decrease Value</button>
    </div>
    
       
    <h1>My name is {props.name} i am a {props.religion} my details are {props.details}</h1>
    </>
  )
}

export default H1