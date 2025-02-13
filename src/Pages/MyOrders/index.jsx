import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    
    return (
        <Layout>
            <div className='flex justify-center items-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl mb-4'>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard key={index} date={order.date} totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders