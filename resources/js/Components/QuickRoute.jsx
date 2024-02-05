import { Link } from "@inertiajs/react"

const QuickRoute = ({routes}) => {
    const params = window.location.pathname.trim().split('/');
    const currentRoute  = params[params.length -1]

    const isThisRoute  = (name,operation = not) => {
        switch (operation) {
            case 'not':
                return String(name).toLocaleLowerCase() !== currentRoute
            case 'equal' :
                return String(name).toLocaleLowerCase() === currentRoute

        }
    }

    return (
        <>
            <nav className="flex gap-2 my-1">
                {routes.map((route,i) => (
                    <div key={`${route.route} ${route.id}`} className="flex gap-2">
                        {route && (
                            <>
                            <Link
                           className={`${isThisRoute(route.show,"equal") && 'text-blue-600 font-bold'}`}
                            href={route.route}
                            >
                                {route.show}
                            </Link>
                            {isThisRoute(route.show,"not") && 
                                (
                                    <p>
                                        &#62;
                                    </p>
                                )
                            }
                            </>
                        )}
                    </div>
                ))}
            </nav>
        </>
    )
}

export default QuickRoute;