import SideMenu from "@/Components/SideMenu";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import {Link} from "@inertiajs/react";
import { UserDisplayText } from "@/Utilities";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PanelLayout = ({children})=>{
    const {
        url,
        props : {
            auth : {user}
        }
    } = usePage()

    const [isSideMenuShow, setIsSideMenuShow] = useState(true);

    const handleSideMenuToggle = () => {
        setIsSideMenuShow(prev => !prev)
    }

    return (
        <>
        <section className=''>
            <SideMenu
            isShow = {isSideMenuShow}
            url = {url}
            />
            <section className={`${isSideMenuShow ?'ms-[18rem]' : 'ms-none'} transition-all duration-200`}>
                <div className="px-8 py-4 border-slate-400 border-b-[0.02rem]">
                    <nav className="flex justify-between">
                        <div>
                            <button onClick={handleSideMenuToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <Link
                            href={route('profile.edit')}
                            >
                                <div className="w-[2.2rem] h-[2.2rem] bg-blue-400 rounded-full flex items-center justify-center overflow-hidden">
                                    <h3 className="uppercase text-[1.3rem] text-center font-bold  text-white">
                                        {UserDisplayText(user.name)}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>
                <section id="page" className="my-2 px-8">
                    <ToastContainer />
                    {children}
                </section>

            </section>
        </section>
        </>
    )
}

export default PanelLayout