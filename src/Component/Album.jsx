import { useEffect, useState } from "react"
import albumstyle from "../Assets/Album.module.css"
import Carousel from "./Carosel"
import ADD_Album from "./Addalbum"
import {getinitalState} from"../redux/reducers/albumReducer"
import { useDispatch, useSelector } from "react-redux"
import { albumSelector } from "../redux/reducers/albumReducer"
export default function Album (){

    const album=useSelector(albumSelector)

    const dispatch =useDispatch()
    const [newalbumdata,setNewalbumdata]=useState([])
    const [addnewalbum,setAddnewalbum]=useState(false)
    function newalbum(data)
    {
        console.log(data)
        setNewalbumdata([{data},...newalbumdata])
        setAddnewalbum(true)
       
    }
    useEffect(()=>{

    dispatch(getinitalState())

    },[])
 
 
    return(
        <>
            <header>
                <h1 className={albumstyle.albumH1}> <img src="https://cdn.onlinewebfonts.com/svg/img_296255.png" width={'100px'} alt="..." /> Lorem Ipsum Album </h1>
            </header>
            <div className={albumstyle.albumSection}>  
            <ADD_Album newalbum={newalbum}/>             
        
            {
                addnewalbum &&
            
                newalbumdata.map((element)=>{
                        return(
                            <>  
                               <div className="carousel carousel-dark slide w-25" data-bs-ride="carousel" style={{"borderRadius": "34px","cursor": "pointer","margin": "20px 32px","minWidth": "300px"}} >
                                   <div className="carousel-inner" style={{"borderRadius":"12px"}}>
                                         <img src="https://image.freepik.com/free-vector/beach-night-illustration-with-moonlight-cloudy-sky_104785-50.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>
                                         <div className="carousel-caption  d-md-block" style={{"backgroundColor":"rgba(240,248,255,0.9)","padding": "10px", "borderRadius": "12px"}}>
                                             <h4 className="display-6">Album {element.data.title}</h4>
                                             <h4 className="display-6">Title{element.data.id} </h4>
                                             <p>{element.data.body}</p>                                                 
                                         </div>
                                     </div>   
                                </div>                            
                            </>
                        )

                    })
                
       

            }
               
            {album.map((albums)=>{
                    return(<Carousel album={albums} />)
                })}

            </div>         
        </>
    )
}