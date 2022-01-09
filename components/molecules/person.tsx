import React from 'react';
import Image from "next/image";

const Person = ({name, imageUrl, role}) =>
    <div className="shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center justify-between -mt-16 mb-8">
            <Image alt="profil" src={imageUrl} height={100} width={100}
                   className="mx-auto object-cover rounded-full h-16 w-16 pt-5  border-2 border-white dark:border-gray-800"/>
            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                {name}
            </p>

            <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
                {role}
            </p>
        </div>
    </div>

export default Person;