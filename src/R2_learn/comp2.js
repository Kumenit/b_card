import logo from './air.png';
import './comp2.css'
import grid from './grid.png'
import New_thing from './New Thing';
import star from './star.png'
function Page()
{
    return(
       <div>
        <Navbar />
       
        <Hero />
        <Card img="imgs/g1.jpg"
              rate={5.0}
              value="6"
              loc="A.A"
              d1="this the first discription"
              d2="this the second descriptipn"
         />
         <Card  img="imgs/g2.jpg"
               rate={7.0}
              value="10"
              loc="A.l"
              d1="this the 1 discription"
              d2="this the 2 descriptipn"
         />
        
       </div>
    )
}
const value_3={
      img:"imgs/g3.jpg",
         rate:10.1,
         value:"12",
         loc:"A.K",
         d1:"ralley i will discribe it and i totaly understand it",
         d2:"best of luck to me and you",
}

function Navbar()
{
  return(
    <div className='navabr'>
        <nav>
      
          <img className='img' src={logo}></img>
           <h1 id='h1'>airbnb</h1>
       
        </nav>

       
    </div>
  )
}
function Hero(){
  return(
    <div className='hero'>
    <img className='img2' src={grid}></img>
    <div className='ali'>
    <h1>Online Exprince</h1>
    <p>Join unique interactive activities led by one-of-a <br/>-kind  hosts—all without leaving home.</p>
    <h1>Kome</h1>
    </div>
    </div>
  )
}
function Card(values)
{
  return(
    <div className='card'>
       <img src={values.img} className="img_g1"/>
       
     <div className='sta'>
      <img src={star} className="star"></img>
      <span>{values.rate}</span>
      <span>({values.value}) .</span>
      <span>{values.loc}</span>
     </div>
     <div>
      <p><b>{values.d1}</b> for the first topic</p>
      <p>{values.d2}</p>
      
     </div>

    </div>
  );
}
const name=["kome","sofe"];
const c_name=name.map(function(item){
  return "<p>"+item+"</p>"
})
console.log(c_name)
/*
function Test({name,id}) 
{
  return(
    <div className='test'>
      
      <h1>work</h1>
     {name && <h1>Name:{name}</h1> }
      <h2>Id:{id}</h2>
    </div>
  )
}
*/
export default Page;