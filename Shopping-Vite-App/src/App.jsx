import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import { useEffect ,useState} from 'react'
const App = () => {
  const [items,setItems]=useState([]);
  useEffect(()=>{
const fetchResults=async()=>{
  try {
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    setItems(data);
  } catch (error) {
    console.log(error.message);
  }
}
fetchResults();
  },[])
  return (
    <>
     <Navbar />
     <div className='grid grid-cols-3 gap-3 w-11/12 mx-auto p-5'> 
   
{items.map((e)=>(
  <Card key={e.id} title={e.title} price={e.price} imgurl={e.image}/>
))}
    </div>
    </>
    
  )
}

export default App;