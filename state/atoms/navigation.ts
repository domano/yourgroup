import {atom} from "jotai";
import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/react/outline";

export const navigationState = atom(
[
        { name: 'Team', href: '/yourgroup', icon: UsersIcon, current: false },
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Projects', href: '#', icon: FolderIcon, current: false },
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        { name: 'Documents', href: '#', icon: InboxIcon, current: false },
        { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
    ]
)

export const userNavigationState = atom(
[
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ]
)