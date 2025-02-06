import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common'
import VerticalCard from '../components/VerticalCard'

/**
 * SearchProduct component fetches and displays products based on the search query from the URL.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @example
 * // Usage example:
 * // <SearchProduct />
 * 
 * @description
 * This component uses the `useLocation` hook to get the search query from the URL.
 * It fetches the products from the API based on the search query and displays the results.
 * If the data is loading, it shows a loading message. If no data is found, it shows a "No Data Found" message.
 * Otherwise, it displays the search results using the `VerticalCard` component.
 * 
 * @function
 * @name SearchProduct
 * 
 * @hook
 * @name useLocation
 * @description Gets the search query from the URL.
 * 
 * @hook
 * @name useState
 * @description Manages the state for `data` and `loading`.
 * 
 * @hook
 * @name useEffect
 * @description Fetches the products when the component mounts or when the search query changes.
 * 
 * @async
 * @function
 * @name fetchProduct
 * @description Fetches the products from the API based on the search query.
 * 
 * @returns {Promise<void>}
 */
const SearchProduct = () => {
    const query = useLocation()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    console.log("query",query.search)

    const fetchProduct = async()=>{
        setLoading(true)
        const response = await fetch(SummaryApi.searchProduct.url+query.search)
        const dataResponse = await response.json()
        setLoading(false)

        setData(dataResponse.data)
    }

    useEffect(()=>{
        fetchProduct()
    },[query])

  return (
    <div className='container mx-auto p-4'>
      {
        loading && (
          <p className='text-lg text-center'>Loading ...</p>
        )
      }
 
      <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

      {
        data.length === 0 && !loading && (
           <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
        )
      }


      {
        data.length !==0 && !loading && (
          <VerticalCard loading={ loading} data={data}/>
        )
      }

    </div>
  )
}

export default SearchProduct