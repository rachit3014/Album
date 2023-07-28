// import ADD_album from"../src/Assets/Add_album.module.css"

import { useState } from "react"

export default function ADD_Album(props){
    
   const[addAlbum,setAddAlbum]=useState({id:"",title:"",body:""})
//  function to add album in state and api
  async  function addalbum(e)
   {
       
       e.preventDefault();
       const response= await fetch("https://jsonplaceholder.typicode.com/albums",{
           method:"POST",
           headers:{
            'Content-type': 'application/json',
        },
        body:JSON.stringify({
            title:addAlbum.title,
            body:addAlbum.body

        })


       })
    const data= await response.json()
       props.newalbum(data)

       setAddAlbum({id:"",title:"",body:""})


   }





    return(
        <>
             {/* <!-- Button trigger modal --> */}
                    <button type="button" className= "btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{"backgroundColor":"red","height":"350px","width":"350px"}} >
                    <h1>ADD ALBUM</h1>
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title display-7 text-center w-100" id="exampleModalLabel">ADD NEW ALBUM</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={addalbum}>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label"> Enter Album</label>
                                        <input type="text" value={addAlbum.title} onChange={(e)=>{setAddAlbum({id:Date.now(),title:e.target.value,body:addAlbum.body})}} className="form-control" id="formGroupExampleInput" placeholder="Enter your Album"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Enter Body</label>
                                        <input type="text" value={addAlbum.body} onChange={(e)=>{setAddAlbum({id:Date.now(),title:addAlbum.title,body:e.target.value})}} className="form-control" id="formGroupExampleInput2" placeholder="Enter your body"/>
                                    </div>
                                    <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>

                        
                        </div>
                </div>
            </div>




        </>
    )
}