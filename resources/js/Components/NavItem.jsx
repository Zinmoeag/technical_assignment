import { Link } from "@inertiajs/react";

const NavItem = ({children, name, route, isActive}) => {
    return (
        <>
        <Link 
        href={route} 
        className={`flex gap-4 ${isActive && 'bg-blue-600 text-white'} hover:bg-blue-600 hover:text-white rounded-lg px-2 py-2`}>
            <div className="icon">
                {children}
            </div>

            <p>{name}</p>
        </Link>
        </>
    )
}

export default NavItem;