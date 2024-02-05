import { Link } from "@inertiajs/react"

const Pagination = ({page}) => {

    const getLabelIcon = (text) =>{

        switch(text){
            case "Next &raquo;":
                return ">"
                break
            case "&laquo; Previous":
                return "<"
                break
            case "&#187;":
                return ">>"
                break
            case "&#171;":
                return "<<"
                break
            default : 
                return text
                
        }
    }

    return (
        <section className="flex justify-between my-6">
            <p className="text-slate-400 text-sm font-light">
                Showing {page.from} to {page.to} of {page.total} entries
            </p>
            <div className="flex gap-2 my-2">
                {page.links.map(page => (
                  
                    <Link
                    key={page.label}
                    href={page.url}
                    >
                        <div
                        className={`${page.active && 'bg-blue-600 text-white'} py-2 border-slate-400 border-[0.02rem] rounded-lg w-8 h-8 flex items-center justify-center`}
                        >
                            <p>
                                {getLabelIcon(page.label)}
                            </p>
                        </div>
                    </Link>
         
                ))}
            </div>
        </section>
    )
}

export default Pagination;