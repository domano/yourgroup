import {atom} from "recoil";
import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/react/outline";

export const navigationState = atom({
    key: 'navigationState',
    default: [
        { name: 'Team', href: '/yourgroup', icon: UsersIcon, current: false },
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Projects', href: '#', icon: FolderIcon, current: false },
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        { name: 'Documents', href: '#', icon: InboxIcon, current: false },
        { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
    ]
})

export const userNavigationState = atom({
    key: 'userNavigationState',
    default: [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ]
})