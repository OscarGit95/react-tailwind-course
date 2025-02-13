import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
    const context = useContext(ShoppingCartContext)
    const {category} = useParams()
    // console.log(category)
    const renderView = () => {
        const itemsToRender = context.searchByTitle?.length > 0 ? context.filteredItems : context.items
        return(
            itemsToRender?.length > 0
            ?
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        itemsToRender?.map(item => (
                            <Card key={item.id} data={item}/>
                        ))
                    }
                </div>
            :
                <div className='w-full flex justify-center'>
                    <p className='font-medium text-xl'>No Results Found 😔</p>
                </div>
        )
    }

    return (
        <Layout>
            <div className='flex justify-center items-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl mb-4'>Exclusive Products</h1>
            </div>
            <input 
                type='text' 
                name='' 
                id='' 
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
                placeholder='Search a product'
                onChange={(e) => context.setSearchByTitle(e.target.value)}
            />
            {
                renderView()
            }
            <ProductDetail />
        </Layout>
    )
}

export default Home