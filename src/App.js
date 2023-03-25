import './App.css';
import { getdata,updatedata ,listdata,deletedata} from './action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { MdDelete,MdEdit } from 'react-icons/md';

function App() {

  const [pop1,setPop1]=useState(false)
  const [pop2,setPop2]=useState(false)
  const [pop3,setPop3]=useState(false)
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const[id,setId]=useState("")
  const [val,setVal]=useState("")
  const [isSuccess,setIsSuccess]=useState(false)


  const dispatch=useDispatch()
  const {products} =useSelector((state)=>state.listReducer)
   const {success}=useSelector((state)=>state.dataReducer)
   useEffect(()=>{
    if (success){
      setIsSuccess(true)
    }
    else
    setIsSuccess(false)
   },[success,dispatch()])
   

   
    //  console.log(value);
   const Confirm =(status)=>{
    
    return(
      <div>
        <p>{status}SuccessFull!!!.....</p>
        <button onClick={()=>{
          setIsSuccess(false)
        }}></button>
      </div>
    )
   }
 const create = (e) =>{
  const data={
    title:title,
    description:description
  }
 
  dispatch(getdata(data))
  dispatch(listdata())
  setPop1(false)
 }
 const deleted =(e)=>{

   const data={
      id:id
   }
   
   dispatch(deletedata(data))
   dispatch(listdata())
   
   setPop2(false)
 }
 const update =(e)=>{
 

  const data={
     id:id,
     title:title,
     description:description
  }
  dispatch(updatedata(data))
  dispatch(listdata())
  setPop3(false)
  
}
 
  useEffect(()=>{
    dispatch(listdata())
    
  },[])
  return (
    <div className="App">
      
      <div>
        {isSuccess?<Confirm/>:''}
        
        {pop1?
        <div className='p1_container'>

              <div className='content'>
              
              
                <label>Title</label>
              <input value={title} onChange={(e)=>{
                setTitle(e.target.value)
              }}></input> <br/>
              <label>Discription</label>
              <input value={description} onChange={(e)=>{
                setDescription(e.target.value)
              }}></input>   
            </div>
                        
          <div className='p1_base'>
            <button onClick={()=>{setPop1(false)}} >Cancel</button>
            <button onClick={()=>{setVal('CREATE')}}>Create</button>
          </div >
  
        </div>:''
 }
      </div>
      <div>
        {pop2?
        <div className='p1_container'>

            <div className='content'>
              <label>ID</label>
              {/* <input value={id} onChange={(e)=>{
                setId(e.target.value)
              }}></input>         */}
            </div>
                        
          <div className='p1_base'>
            <button onClick={()=>{setPop2(false)}} >Cancel</button>
            <button onClick={()=>{setVal('Delete')}}><MdDelete/></button>
          </div >
  
        </div>:''
 }
      </div>
      <div>
        {pop3?
        <div className='p1_container'>

            <div className='content'>
              <label>ID</label>
              {/* <input value={id} onChange={(e)=>{
                setId(e.target.value)
              }}></input> <br/> */}
                <label>Title</label>
              <input value={title} onChange={(e)=>{
                setTitle(e.target.value)
              }}></input> <br/>
              <label>Discription</label>
              <input value={description} onChange={(e)=>{
                setDescription(e.target.value)
              }}></input>   
            </div>
                        
          <div className='p1_base'>
            <button onClick={()=>{setPop3(false)}} >Cancel</button>
            <button onClick={()=>{setVal('Update')}}>Update</button>
          </div >
  
        </div>:''
 }
      </div>
      <div className='button_container'>
        <button onClick={()=>{setPop1(true)}} className='create_button'>CREATE</button>
        {/* <button onClick={()=>{setPop2(true)}} className='delete_button'>Delete</button>
        <button onClick={()=>{setPop3(true)}} className='update_button'>Update</button> */}

        
      </div>
      <div className='list'>
       
      {
        products.map((item,index)=>{
         if(index<=products.length/1000){
          return(
            <div className='list_content'>
              <li>{item.title} <MdDelete onClick={()=>{setPop2(true);setId(item._id)}}/> <MdEdit onClick={()=>{setPop3(true);setId(item._id)}} /> </li>
              
            </div>
          )
         }
         
   
      })
    }
      </div>

      
    </div>
  );
}

export default App;
