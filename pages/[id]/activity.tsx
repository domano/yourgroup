import React from 'react';
import {useRouter} from 'next/router'
import {useAtom} from "jotai";
import {groupState} from "../../state/atoms/group";
import Person from "../../components/molecules/person";

function Activity(props) {
    const router = useRouter()
    const [group, setGroup] = useAtom(groupState)
    const person = group.find(person => person.id === router.query["id"])

    return (
        <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
            {person && <Person {...person}/>}
        </div>
    );
}

export default Activity;