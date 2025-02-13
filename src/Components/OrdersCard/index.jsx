import { CalendarIcon, ShoppingBagIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { date, totalProducts, totalPrice } = props
    return (
        <div className='flex justify-between items-center border border-black p-4 rounded-lg mb-4 w-80'>
            <p className="flex flex-col">
                <span className='font-light flex items-center gap-2'><CalendarIcon className='w-4 h-4'/>{date}</span>
                <span className='font-light flex items-center gap-2'><ShoppingBagIcon className='w-4 h-4'/>{totalProducts} articles</span>
            </p>
            <p className='flex items-center gap-4'>
                <span className='font-medium text-xl'>${totalPrice}</span>
                <ChevronRightIcon className='w-4 h-4'/>
            </p>
        </div>
    )
}

export default OrdersCard