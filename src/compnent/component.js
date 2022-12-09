import './Main.css'
import profile from './bat.jpg'
import New_thing from '../R2_learn/New Thing';
function Page()
{
    return(
       
        <div className='main'>
         <Header />
         <br></br>
        <Main />
        
        <br></br>
        <New_thing />
        </div>
      
    );
}

function Header()
{
    return(
       <div className='Header'>
         <img src={profile}></img>
         <div className='text'>
         <h1>Kumenit Desta</h1>
         <h5 id="h5">Best bussines manager</h5>
         <p id="p1">sublime texr</p>
         </div>
         <button>Email</button>


       </div>

    );

}
function Main()
{
    return(
        <div className='center'>
         <h3>About</h3>
         <p id="p2">  Line 17:10:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
         <h3>Contact</h3>
         <p id="p2">src\compnent\component.jsLine 17:10:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>


        </div>
    );
}
export default Page;