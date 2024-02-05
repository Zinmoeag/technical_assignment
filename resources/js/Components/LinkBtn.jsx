import { Link } from "@inertiajs/react";

const Linkbtn = ({children, route, className}) => {
    return (
        <>
        <Link
        className={"bg-blue-600 px-6 py-2 text-white rounded-md "+ className}
        href={route}
        >
            {children}
        </Link>
        </>
    )
}

export default Linkbtn;