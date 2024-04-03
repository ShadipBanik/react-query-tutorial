import React from 'react'
import { QueryRequest } from '../hooks/queryRequest'
import { useParams } from 'react-router-dom'

export const HeroDetails= () => {
   const {heroId}=useParams();
  const{isLoading,data,isError,error}=QueryRequest(`super-hero-${heroId}`,`superheroes/${heroId}`,heroId);

  if(isLoading){
    return <h2>Loading...</h2>
   }
 if(isError){
  return <h2>{error.message}</h2>
 }

  return (
    <div>
        <h2>{data?.data.name}</h2>
        <h3>{data?.data.alterEgo}</h3>
    </div>
  )
}
