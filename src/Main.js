
import react ,{useState}from "react";
import axios from "axios";
import './style.css'

import Card from "./Card";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")

        {
            if(search==''){axios.get('http://127.0.0.1:8080/showDetails')
            .then(res=>setData(res.data)) 
            .catch(err=>console.log(err))

            }
            else{
            axios.get('http://127.0.0.1:8080/pf/'+search)
            .then(res=>setData(res.data)) 
            .catch(err=>console.log(err))
            }
        }
    }
    return(
        <>
       
        <div className="im">

        </div>
        <div className="header">
            <div className="row1">
           
            </div>
            <div className="row2">
                <div className="nv">
            <a href='/Del' className="a1"><div>Delete</div></a>
                <a href='/Add' className="a1"><div>Add to library</div></a>
                <a href='/Mod' className="a1"><div>Modify library</div></a>
                </div>
                <h2>search books</h2>
                <div className="search">
                    <input type="text" placeholder="enter"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                    <button><i class="fas fa-search"></i></button>
                    
                </div>
               
                 
            </div>
        </div>
        <div className="container">
        {
                    <Card book={bookData}/>
              }  
        </div>
        </>
    )
}
export default Main;