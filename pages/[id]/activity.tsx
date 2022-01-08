import React from 'react';
import {useRouter} from 'next/router'
import {useRecoilState} from "recoil";
import {groupState} from "../../state/atoms/group";


function Activity(props) {
    const router = useRouter()
    const [group, setGroup] = useRecoilState(groupState)
    const person = group.find(person => person.id === router.query["id"])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
                <div className="flex flex-col items-center justify-between p-4 -mt-16">
                        <img alt="profil" src={person.imageUrl /* TODO: continue here*/}
                             className="mx-auto object-cover rounded-full h-16 w-16 pt-5  border-2 border-white dark:border-gray-800"/>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                        Charlie
                    </p>
                    <p className="text-gray-400 text-xs mb-4">
                        Nantes
                    </p>
                    <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
                        Professional
                    </p>
                    <div className="rounded-lg p-2 w-full mt-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                            <p className="flex flex-col">
                                Articles
                                <span className="text-black dark:text-white font-bold">
                        34
                    </span>
                            </p>
                            <p className="flex flex-col">
                                Followers
                                <span className="text-black dark:text-white font-bold">
                        455
                    </span>
                            </p>
                            <p className="flex flex-col">
                                Rating
                                <span className="text-black dark:text-white font-bold">
                        9.3
                    </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;