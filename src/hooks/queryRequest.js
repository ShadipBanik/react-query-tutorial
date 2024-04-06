import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'

const apiRequest=(url)=>{
    return axios.get(`http://localhost:4000/${url}`)
  }
export const QueryRequest =(routeName,url,slug) => {
  const onSuccess=(data)=>{
    console.log("perform side affect after data fethcing",data)
  }
  const onError=(error)=>{
    console.log("perform side affect after encountering error",error)
  }
  return useQuery({
     queryKey:[routeName,slug],
     queryFn:()=>apiRequest(url),
     onSuccess:onSuccess,
     onError:onError,
     refetchOnMount:true,
     refetchOnWindowFocus:'always'

  })
}
const infiniteRequest=({pageParam=1})=>{
  return axios.get(`http://localhost:4000/colors?_per_page=3&_page=${pageParam}&`)
}
  export const InfiniteQueryRequest =(routeName,url,slug) => {
    const onSuccess=(data)=>{
      console.log("perform side affect after data fethcing",data)
    }
    const onError=(error)=>{
      console.log("perform side affect after encountering error",error)
    }
    return useInfiniteQuery ({
       queryKey:[routeName],
       queryFn:infiniteRequest,
       getNextPageParam:(_lastPage,pages)=>{
        console.log(pages)
        if(pages.length<pages.data.data.last){
          return pages.length+1
        }else{
          return undefined
        }

       }
  
    })
  } 
