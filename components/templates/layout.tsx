import React from 'react'
import DesktopSidebar from "../organisms/desktopSidebar";
import Searchbar from "../organisms/searchbar";
import MobileSidebar from "../organisms/mobileSidebar";

interface LayoutProps {

}

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {

    return (
        <>
            <div>
                <MobileSidebar/>
                <DesktopSidebar/>
                <div className="md:pl-64 flex flex-col flex-1">
                    <Searchbar/>
                    <main>
                        <div className="py-6">

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {props.children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
