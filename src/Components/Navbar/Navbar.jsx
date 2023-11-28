import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { BsCart4 } from "react-icons/bs";


 function Navbar () {
   const activeStyle = "underline underline-offset-3";
   const context = useContext(ShoppingCartContext);
    
   return (
        <nav className=" bg-teal-300 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light h-16">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/"
                    onClick={() => context.setSearchByCategory()}
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" 
                    onClick={() => context.setSearchByCategory('clothes')}
                    className = {({  isActive  })  =>
		                isActive  ?  activeStyle :  undefined
	                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" 
                    onClick={() => context.setSearchByCategory('electronics')}
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" 
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" 
                    onClick={() => context.setSearchByCategory('toys')}
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" 
                    onClick={() => context.setSearchByCategory('others')}
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    ejempo@gmail.com
                </li>
                <li>
                    <NavLink to="/my-orders" 
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                       My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account"
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in"
                    className = {({  isActive  })  =>
                    isActive  ?  activeStyle :  undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className=" text-center ">
                    <BsCart4 />{context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
 }

 export {Navbar}