import React, {Fragment} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import classNames from "../../util/classNames";
import {useAtom} from "jotai";
import {sidebarState} from "../../state/atoms/sidebar";
import {navigationState} from "../../state/atoms/navigation";
import MobileSidebarItem from "../atoms/mobileSidebarItem";
import Image from "next/image";
function MobileSidebar(props) {
    const [sidebarOpen, setSidebarOpen] = useAtom(sidebarState)
    const [navigation, setNavigation] = useAtom(navigationState)

    return (
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                </button>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 flex items-center px-4">
                            <Image
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                                alt="Workflow"
                                height={50} width={300}
                            />
                        </div>
                        <div className="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav className="px-2 space-y-1">
                                {navigation.map((item) => (
                                    <MobileSidebarItem key={item.name} {...item}/>
                                ))}
                            </nav>
                        </div>
                    </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default MobileSidebar;