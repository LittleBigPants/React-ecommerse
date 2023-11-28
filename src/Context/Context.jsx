
import { createContext, useState, useEffect} from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    
    // shopping cart (item quantity)
    const [count, setCount] =useState (0)
    
    // product detail (open/close)
    const [isProductDetailOpen, setIsProductDetailOpen] =useState (false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // product detlail (showproduct)
    const [productToShow, setProductToShow] = useState ({
    title: "",
    price: "",
    description: "",
    images: [],
 })

    // shopping cart (add products to cart)
    const [cartProducts, setCartProducts] = useState ([])
    

    // CheckoutSideMenu (open/close)
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] =useState (false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // shopping cart (order)
    const [order, setOrder] = useState ([])

    // get products
    const [items, setItems] =useState (null)
    const [filteredItems, setFilteredItems] =useState (null)
    
    // get products by title
    const [searchByTitle, setSearchByTitle] =useState (null)
    
    // get products by catefory
    const [searchByCategory, setSearchByCategory] =useState (null)
   


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
      }, [])
    
    const filteredItemsByTitle = (items, searchByTitle) => {
        
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filteredItemsByCategory = (items, searchByCategory) => {
        
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    
    
    const filterBy = (searchType, searchByTitle, items, searchByCategory) => {

        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
            
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }
    
    useEffect(() => {
        if(searchByTitle && searchByCategory) 
        {setFilteredItems(filterBy( 'BY_TITLE_AND_CATEGORY', searchByTitle, items, searchByCategory ))}
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy( 'BY_TITLE', searchByTitle, items, searchByCategory ))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', searchByTitle, items, searchByCategory ))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, searchByTitle, items, searchByCategory ))

    }, [items, searchByTitle, searchByCategory])







      return(
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
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByTitle,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


