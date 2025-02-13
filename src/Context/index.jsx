import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    //Products list
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    //Search products by title
    const [searchByTitle, setSearchByTitle] = useState('')
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(() => {
        (searchByTitle.length > 0) && setFilteredItems(filteredItemsByTitle(items, searchByTitle)) 
    }, [items, searchByTitle])
    
    //Search products by categories
    const [categories, setCategories] = useState([])
    const getCategoriesByAPI = (data) => {
        setCategories(Array.from(new Set(data?.map(item => item.category.name))))
    }
    useEffect(() => {
        getCategoriesByAPI(items)
    }, [items])

    //Shopping Cart . Counter
    const [count, setCount] = useState(0)
    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    //Checkout Side Menu. Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    //Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})
    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([])
    //Shopping Cart . Order 
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            categories
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}