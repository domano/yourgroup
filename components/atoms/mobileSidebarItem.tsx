import React from 'react';
import classNames from "../../util/classNames";

function MobileSidebarItem(props) {
    return (
        <a
            key={props.name}
            href={props.href}
            className={classNames(
                props.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
        >
            <props.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                       aria-hidden="true"/>
            {props.name}
        </a>
    );
}

export default MobileSidebarItem;