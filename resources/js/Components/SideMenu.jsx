import { Link, useForm } from "@inertiajs/react";
import NavItem from "./NavItem";

const SideMenu = ({url, isShow}) =>{
    const {post} = useForm()

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    }

    return (
        <>
            <div className={`${isShow ? 'translate-x-0' : 'translate-x-[-100%]'} bg-blue-100 w-[18rem] fixed top-0 left-0 bottom-0 transition-all duration-200`}>
                <section className="py-8 px-4 flex flex-col justify-between h-full">
                    <div className="flex flex-col">
                        <div className="title-section my-8">
                            <h3 className="text-xl text-slate-900 font-bold ">
                                Admin Panel
                            </h3>
                        </div>

                        <nav>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <NavItem
                                    name = 'Item'
                                    route = '/item'
                                    isActive = {url.startsWith('/item')}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                        </svg>
                                    </NavItem>
                                </li>
                                <li>
                                    <NavItem
                                    name = 'Category'
                                    route = {route('category')}
                                    isActive = {url.startsWith('/category')}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>

                                    </NavItem>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex">
                        <form
                         onSubmit = {handleLogout}
                        >
                            <button
                            className="text-red-400 font-bold"
                            >
                                Logout
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SideMenu;