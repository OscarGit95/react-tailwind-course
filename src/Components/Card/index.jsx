import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDetail) => {
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
        context.openProductDetail()
    }
    const addProductsToCart = (productData) => {
        context.setCartProducts((prevCartProducts) => [...prevCartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = (data) => {
        const isInCart = context.cartProducts.some(product => product.id === data.data.id)

        return (
            isInCart 
            ? 
            <button 
                className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <CheckIcon className='h-6 w-6 text-white'/>
            </button>
            :
            <button 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(e) => {
                    e.stopPropagation();
                    addProductsToCart(data.data)
                }}
            >
                <PlusIcon className='h-6 w-6 text-black'/>
            </button>
        )
    }

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data?.category?.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data?.images[0]} alt={data.data?.name} />
                {
                    renderIcon(data)
                }
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card
