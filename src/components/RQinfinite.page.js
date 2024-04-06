import React, { Fragment, useState } from 'react'
import { InfiniteQueryRequest} from './../hooks/queryRequest';


export const RQinfinite = () => {
    // const [pageNumber]=useState(1)
    const {isLoading,data,isError,error,fetchNextPage,hasNextPage,isFetching,isFetchingNextPage}= InfiniteQueryRequest('colors','colors')
    if(isLoading){
        return <h2>Loading...</h2>
       }
     if(isError){
      return <h2>{error.message}</h2>
     }
  return (
   <> 
    <div>
        <h2>RQ Infinite Colors</h2>
        {data?.pages.map((group,i)=>{
           return(  
            <Fragment key={i}>
              {group.data.data.map((color)=>(
                <h2 key={color.id}>{color.id} {color.label}</h2>
              ))}
            </Fragment>
           )
        })}
    </div>
    <div>
     <button style={{marginLeft:"15px",padding:"10px"}} onClick={()=>fetchNextPage()} disabled={!hasNextPage} >Load More</button>
    </div>
    <div> {isFetching && !isFetchingNextPage?'Fetching...':null}</div>
    </>
  )
}
