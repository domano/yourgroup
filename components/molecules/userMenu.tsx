import React, {Fragment} from 'react';
import {Menu} from "@headlessui/react";
import classNames from "../../util/classNames";
import {useRecoilState} from "recoil";
import {userNavigationState} from "../../state/atoms/navigation";
import {Transition} from "@headlessui/react";


function UserMenu(props) {
    const [userNavigation, setUserNavigation] = useRecoilState(userNavigationState)

    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                        {({active}) => (
                            <a
                                href={item.href}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                )}
                            >
                                {item.name}
                            </a>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Transition>

    );
}

export default UserMenu;