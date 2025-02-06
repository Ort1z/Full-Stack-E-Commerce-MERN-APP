import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Link } from 'react-router-dom'

/**
 * CategoryList component fetches and displays a list of product categories.
 * 
 * @component
 * @example
 * return (
 *   <CategoryList />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @description
 * This component fetches product categories from an API and displays them in a scrollable list.
 * While the data is being fetched, it shows loading placeholders.
 * 
 * @function
 * @name CategoryList
 * 
 * @hook
 * @name useState
 * @description Manages the state of category products and loading status.
 * 
 * @hook
 * @name useEffect
 * @description Fetches category products when the component mounts.
 * 
 * @async
 * @function
 * @name fetchCategoryProduct
 * @description Fetches category products from the API and updates the state.
 * 
 * @returns {Promise<void>}
 * 
 * @example
 * fetchCategoryProduct()
 * 
 * @constant
 * @name categoryLoading
 * @type {Array<null>}
 * @description An array used to render loading placeholders.
 * 
 * @constant
 * @name SummaryApi.categoryProduct.url
 * @type {string}
 * @description The API endpoint to fetch category products.
 */
const CategoryList = () => {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto p-4'>
           <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
            {

                loading ? (
                    categoryLoading.map((el,index)=>{
                            return(
                                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
                                </div>
                            )
                    })  
                ) :
                (
                    categoryProduct.map((product,index)=>{
                        return(
                            <Link to={"/product-category?category="+product?.category} className='cursor-pointer' key={product?.category}>
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                                    <img src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'/>
                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                            </Link>
                        )
                    })
                )
            }
           </div>
    </div>
  )
}

export default CategoryList