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
    const [titleFilter, setTitleFilter] = useState('')
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByUser = (items, titleFilter, categoryFilter) => {
        const title = titleFilter.toLowerCase().trim();  
        const category = categoryFilter ? categoryFilter.toLowerCase().trim() : '';
        
        const search =  items?.filter(item => {
            const itemTitle = item.title?.toLowerCase().trim() || '';
            const matchesTitle = itemTitle.includes(title)
            const itemCategory = item.category?.name?.toLowerCase().trim() || '';
            const matchesCategory = !category || itemCategory === category;

            return matchesTitle && matchesCategory
        })

        return search;
    }
  
    
    //Search products by categories
    const [categories, setCategories] = useState([])
    const [categoryFilter, setCategoryFilter] = useState(undefined)
    const getCategoriesByAPI = (data) => {
        setCategories(Array.from(new Set(data?.map(item => item.category.name))))
    }
    useEffect(() => {
        getCategoriesByAPI(items)
    }, [items])

    //Filter
    useEffect(() => {
        setFilteredItems(filteredItemsByUser(items, titleFilter, categoryFilter)) 
    }, [items, titleFilter, categoryFilter])

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
            titleFilter,
            setTitleFilter,
            filteredItems,
            categories,
            categoryFilter,
            setCategoryFilter
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}