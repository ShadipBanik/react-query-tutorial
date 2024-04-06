import React, { useState } from 'react'
import { QueryRequest } from '../hooks/queryRequest'

export const RQpaginated = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const {isLoading,data,isError,error}= QueryRequest("colors",`colors?_page=${pageNumber}&_per_page=2`,pageNumber)

    if(isLoading){
        return <h2>Loading...</h2>
       }
     if(isError){
      return <h2>{error.message}</h2>
     }
  return (
    <div>
        <h2>RQ Paginated Colors</h2>
        {data?.data.data.map(res=>{
            return <div style={{marginLeft:"15px",fontSize:"18px",paddingBottom:"10px"}} key={res.id}>{res.label}</div>
        })}


     <button style={{marginLeft:"15px",padding:"10px"}} onClick={()=>setPageNumber(pageNumber-1)} disabled={pageNumber===1}>prev</button>
     <button style={{marginLeft:"15px",padding:"10px"}} onClick={()=>setPageNumber(pageNumber+1)}  disabled={pageNumber===data?.data.last}>next</button>
    </div>
  )
}
