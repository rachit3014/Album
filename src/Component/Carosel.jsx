import { useState } from "react"

export default function Carousel ({album}){
    // const album=props.album
    const[albums,setAlbums]=useState(album) 
    const[title,setTitle]=useState("")

//  function to update album list from api and from state 
 async function toupdate(e)
 {
    e.preventDefault()
    const id=e.target[0].value
    console.log(id)

    const response= await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
        method:"PUT",
        headers:{
            'Content-type': 'application/json',
        },
        body:JSON.stringify({
            title:title
        })


    })
    const newdata=albums.map(item=>{
            if(item.id==id)
            {
                return({...item,title:title})
            }
            else{
                return item
            }

    })
    setAlbums(newdata)
    setTitle("")

 } 
//  function to delete album list from api and from state 
async function todelete(id)
    {       
        const response=await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
            method:"DELETE"
        })
        const modifiedData = albums.filter(element => {
            if (element.id != id) {
                return [element];
            }
           
        });
        setAlbums([...modifiedData])

    }
    return (
    <>
        <div id={`carouselExampleDark${album[0].userId}`} className="carousel carousel-dark slide w-25"  data-bs-ride="carousel" style={{"borderRadius": "34px","cursor": "pointer","margin": "20px 32px","minWidth": "300px"}} >
            <div className="carousel-indicators "> 
                 <button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="3" aria-label="Slide 4"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="4" aria-label="Slide 5"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="5" aria-label="Slide 6"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="6" aria-label="Slide 7"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="7" aria-label="Slide 8"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="8" aria-label="Slide 9"></button>
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="9" aria-label="Slide 10"></button> 
                < button type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide-to="10" aria-label="Slide 11"></button> 

            </div>
                <div className="carousel-inner" style={{"borderRadius":"12px"}}>
  

                    {
                           albums.map((item,k)=>{
                            return(
                                
                                
                                
                                
                                ( (k===0))?
                                  
                                         <div className="carousel-item active"  key={k} data-bs-interval="1000">
                                         {(k==0&&item.userId==1 )&& <img  src="https://image.freepik.com/free-vector/beach-night-illustration-with-moonlight-cloudy-sky_104785-50.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==2 ) && <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Free-Photos-HD-Nature-Pictures.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==3 ) && <img src="https://cdn.wallpapersafari.com/77/97/rRhwIk.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==4 )&& <img src="https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1991&q=80" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==5 ) && <img src="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==6 ) && <img src="https://wallpapercave.com/wp/wp2848043.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==7)&&<img src="https://images.pexels.com/photos/706137/pexels-photo-706137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==8 ) && <img src="http://www.desert-motors.com/cpg/albums/tempphotos/1972-Dino-GT/IMG_2568-wm.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==9 ) && <img src="https://conversations.wf.com/wp-content/uploads/2018/10/couple-sunset-over-city-510x251.png" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {(k==0&&item.userId==10 ) && <img src="https://static4.depositphotos.com/1000347/275/v/450/depositphotos_2753860-stock-illustration-palm-trees-over-the-water.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         
                                          <div className="carousel-caption  d-md-block" style={{"backgroundColor":"rgba(240,248,255,0.9)","padding": "10px", "borderRadius": "12px"}}>
                                             <h4 className="display-6">Album {item.userId}</h4>
                                           <h4 className="display-6">Title {item.id}</h4>

                                               <p>{item.title}</p>
                                               <div className="d-flex flex-row justify-content-evenly py-3" style={{"position":"relative"}} >
                                                 <button type="button" onClick={()=>todelete(item.id)} className="btn btn-outline-danger">Delete</button>
                                                   <button  className="btn btn-outline-dark" type="submit" data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample">
                                                                Modify
                                                    </button>
                                                            
                                                        <div className="collapse" id={`collapseExample${item.id}`} style={{"top":"-176%","position":"absolute"}}>
                                                            <div className="card card-body" style={{"width":"100%"}}>   
                                                               <form onSubmit={toupdate} >
                                                               <input type="text" value={item.id} hidden />
                                                                    <div className="mb-3">
                                                                            <label htmlFor="formGroupExampleInput" className="form-label"> Enter Body</label>
                                                                            <input value={title} type="text"onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="formGroupExampleInput" placeholder="Enter Your Body"/>
                                                                        </div>
                                                                            <div className="modal-footer d-flex flex-row justify-content-evenly"style={{"margin":"20px"}}>
                                                                                <button className="btn btn-success" type="submit" data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-square-check"></i></button>
                                                                                <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-square-xmark"></i></button>

                                                                            </div>
                                                               </form>
                                                            </div>  
                                                        </div>

                                                </div>
                                          </div>                         
                                      </div> :
                                      <div className="carousel-item " key={k} data-bs-interval="3000">
                                        
                                         {item.userId==1 && k>0 && <img  src="https://image.freepik.com/free-vector/beach-night-illustration-with-moonlight-cloudy-sky_104785-50.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>11 && item.id<=20 &&  <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Free-Photos-HD-Nature-Pictures.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>21 && item.id<=30 &&  <img src="https://cdn.wallpapersafari.com/77/97/rRhwIk.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>31 && item.id<=40 &&  <img src="https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1991&q=80" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>41 && item.id<=50 &&  <img src="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>51 && item.id<=60 &&  <img src="https://wallpapercave.com/wp/wp2848043.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>61 && item.id<=70 &&  <img src="https://images.pexels.com/photos/706137/pexels-photo-706137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>71 && item.id<=80 &&  <img src="http://www.desert-motors.com/cpg/albums/tempphotos/1972-Dino-GT/IMG_2568-wm.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>81 && item.id<=90 &&  <img src="https://conversations.wf.com/wp-content/uploads/2018/10/couple-sunset-over-city-510x251.png" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                         {item.id>91 && item.id<=100 &&  <img src="https://static4.depositphotos.com/1000347/275/v/450/depositphotos_2753860-stock-illustration-palm-trees-over-the-water.jpg" className="d-block w-100 " alt="..." style={{"height": "350px","width": "500px"}}/>}
                                           <div className="carousel-caption  d-md-block" style={{"backgroundColor":"rgba(240,248,255,0.9)","padding": "10px", "borderRadius": "12px"}}>
                                           <h4 className="display-6">Album {item.userId}</h4>
                                           <h4 className="display-6">Title {item.id}</h4>
                                              <p> {item.title}</p>
                                               <div className="d-flex flex-row justify-content-evenly py-3" style={{"position":"relative"}} >
                                                 <button type="button"onClick={()=>todelete(item.id)} className="btn btn-outline-danger">Delete</button>
                                                   <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample">
                                                                Modify
                                                    </button>                                                            
                                                        <div className="collapse" id={`collapseExample${item.id}`} style={{"top":"-176%","position":"absolute"}}>
                                                            <div className="card card-body" style={{"width":"100%"}}>   
                                                               <form onSubmit={toupdate}>
                                                               <input type="text" value={item.id} hidden />
                                                               <div className="mb-3">

                                                                    <label htmlFor="formGroupExampleInput" className="form-label"> Enter Body</label>
                                                                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}}type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Body"/>
                                                                    </div>
                                                                    <div className="modal-footer d-flex flex-row justify-content-evenly"style={{"margin":"20px"}}>
                                                                    <button className="btn btn-success" type="submit" data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-square-check"></i></button>
                                                                    <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-square-xmark"></i></button>

                                                                    </div>

                                                               </form>
                                                            </div>  
                                                        </div>
                                                                                                          
                                

                                                </div>
           
                                             </ div>
                                         </div>
                                      

  
                               )
                            })
                    }

          
                </div>

                  
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`}data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleDark${album[0].userId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
        </div>  

                
    </>

    )
     
}