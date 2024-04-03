import React from 'react'
import { QueryRequest } from '../hooks/queryRequest'
import { Link } from 'react-router-dom';


export const RqSuperHerosPage= () => {

 
  const {isLoading,data,isError,error} = QueryRequest('super-heros','superheroes');
  if(isLoading){
    return <h2>Loading...</h2>
   }
 if(isError){
  return <h2>{error.message}</h2>
 }
  return (
    <>
      <h2> Rq Super Heros</h2>
        {data?.data.map((res)=>{
          return <div key={res.id} ><Link to={'/rq-super-heros/'+res.id}>{res.name}</Link></div>
        })}
    </>
  )
}
