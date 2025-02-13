import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    return (
        <div className='flex justify-between items-center mb-3 w-100 gap-4'>
            <figure className='flex-shrink-0 w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
            </figure>
            <p className='text-sm font-light flex-1 break-words'>{title}</p>
            <p className='text-lg font-medium w-20 text-right'>${price}</p>
            {
                handleDelete &&
                <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => handleDelete(id)}
                />
            }
        </div>
    )
}

export default OrderCard