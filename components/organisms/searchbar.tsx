import React from 'react';
import {BellIcon, MenuAlt2Icon} from "@heroicons/react/outline";
import {SearchIcon} from "@heroicons/react/solid";
import {Menu, Transition} from "@headlessui/react";
import {useRecoilState} from "recoil";
import {sidebarState} from "../../state/atoms/sidebar";
import UserMenu from "../molecules/userMenu";
import Image from "next/image";

function Searchbar(props) {
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState)

    return (
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
            </button>
            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                    <form className="w-full flex md:ml-0" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                            <div
                                className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5" aria-hidden="true"/>
                            </div>
                            <input
                                id="search-field"
                                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                placeholder="Search"
                                type="search"
                                name="search"
                            />
                        </div>
                    </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                    <button
                        type="button"
                        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button
                                className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    width={50}
                                    height={50}

                                />
                            </Menu.Button>
                        </div>
                        <UserMenu/>
                    </Menu>
                </div>
            </div>
        </div>


    );
}

export default Searchbar;