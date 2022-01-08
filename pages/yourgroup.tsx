import React from 'react';
import {useRecoilState} from "recoil";
import {groupState} from "../state/atoms/group";

const group = [
    {
        name: 'Leslie Alexander',
        email: 'lesliealexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

function Yourgroup(props) {
    const [group, setGroup] = useRecoilState(groupState)
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {group.map((person) => (
                <div
                    key={person.email}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <a href={`/${person.id}/activity`}className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{person.name}</p>
                            <p className="text-sm text-gray-500 truncate">{person.role}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Yourgroup;