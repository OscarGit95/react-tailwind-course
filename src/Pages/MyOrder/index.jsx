import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    const params = useParams()
    const indexOrderPath = Number(params.id)
    console.log(indexOrderPath)
    return (
        <Layout>
            <div className='flex justify-center items-center relative w-80 mb-8'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            imageUrl={product.images[0]}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder