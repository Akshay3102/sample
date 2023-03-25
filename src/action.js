import{TUTORIAL_REQUEST,TUTORIAL_SUCCESS,TUTORIAL_FAIL,UPDATE_REQUEST,UPDATE_SUCCESS,UPDATE_FAIL,LIST_REQUEST,LIST_SUCCESS,LIST_FAIL,DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAIL} from './constans'
const baseurl="https://uat.wincha-online.com"
export const getdata=(request)=>async (dispatch)=>{
    //   const {title,decription}=request
    try {
        dispatch({
            type:TUTORIAL_REQUEST
        })
        await fetch(`${baseurl}/api/tutorials/create`,{
            method:"POST",
            body:JSON.stringify({
                title:request.title,
                description:request.description
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json()).then((data)=>{
            dispatch({
                type:TUTORIAL_SUCCESS,
                payload:data.data
            })
            
        })
    } catch (error) {
        dispatch({
            type:TUTORIAL_FAIL,
            payload:error
        })
    }

}
export const updatedata=(request)=>async (dispatch)=>{
    try {
        dispatch({
            type:UPDATE_REQUEST
        })
        await fetch(`${baseurl}/api/tutorials/update`,{
            method:"PUT",
            body:JSON.stringify({
                   id:request.id,
                   title:request.title,
                   decription:request.description
                
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json()).then((data)=>{
            dispatch({
                type:UPDATE_SUCCESS,
                payload:data.data
            })
            
        })
    } catch (error) {
        dispatch({
            type:UPDATE_FAIL,
            payload:error.message
        })
    }

}

export const listdata=(request)=>async (dispatch)=>{
   
    try {
        dispatch({
            type:LIST_REQUEST
        })
        await fetch(`${baseurl}/api/tutorials/list`,{
            method:"GET",
           
           
        }).then(res=>res.json()).then((data)=>{
            dispatch({
                type:LIST_SUCCESS,
                payload:data.data
            })
            
            
        })
    } catch (error) {
        dispatch({
            type:LIST_FAIL,
            payload:error
        })
    }

}
export const deletedata=(request)=>async (dispatch)=>{
   
    try {
        dispatch({
            type:DELETE_REQUEST
        })
        await fetch(`${baseurl}/api/tutorials/delete`,{
            method:"POST",
            body:JSON.stringify({
                id:request.id
                
            
        }),
        headers:{
            "Content-Type":"application/json"
        }
           
        }).then(res=>res.json()).then((data)=>{
            dispatch({
                type:DELETE_SUCCESS,
                payload:data.data
            })
            
        })
    } catch (error) {
        dispatch({
            type:DELETE_FAIL,
            payload:error
        })
    }

}

