import axios from 'axios'
import { useQuery } from 'react-query'

const apiRequest=(url)=>{
    return axios.get(`http://localhost:4000/${url}`)
  }
export const QueryRequest =(routeName,url,id) => {
  const onSuccess=(data)=>{
    console.log("perform side affect after data fethcing",data)
  }
  const onError=(error)=>{
    console.log("perform side affect after encountering error",error)
  }
  return useQuery({
     queryKey:[routeName],
     queryFn:()=>apiRequest(url),
     onSuccess:onSuccess,
     onError:onError,
     refetchOnMount:true,
     refetchOnWindowFocus:'always'

  })
}
