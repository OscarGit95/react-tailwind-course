import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import NavItem from './nav-item'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavItem to="/" activeStyle={undefined}>
                        Shopi
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/" activeStyle={activeStyle}>
                        All
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/clothes" activeStyle={activeStyle}>
                        Clothes
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/electronics" activeStyle={activeStyle}>
                        Electronics
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/furnitures" activeStyle={activeStyle}>
                        Furnitures
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/toys" activeStyle={activeStyle}>
                        Toys
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/others" activeStyle={activeStyle}>
                        Others
                    </NavItem>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    oscar@shopi.com
                </li>
                <li>
                    <NavItem to="/my-orders" activeStyle={activeStyle}>
                        My Orders
                    </NavItem>
                </li>
                <li>
                   <NavItem to="/my-account" activeStyle={activeStyle}>
                        My Account
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/sign-in" activeStyle={activeStyle}>
                        Sign In
                    </NavItem>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'/> 
                    <div>
                        {context.count}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar