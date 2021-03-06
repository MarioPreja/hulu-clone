import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
                   <div className='flex flex-grow justify-evenly max-w-2xl'>
                        <HeaderItem title='HOME' Icon={HomeIcon}/>
                        <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
                        <HeaderItem title='verified' Icon={BadgeCheckIcon}/>
                        <HeaderItem title='collections' Icon={CollectionIcon}/>
                        <HeaderItem title='search' Icon={SearchIcon}/>
                        <HeaderItem title='Account' Icon={UserIcon}/>
                   </div>
                   <Image alt='logo' className='object-contain cursor-pointer' src='https://links.papareact.com/ua6' width={200} height={100}/>
        </header>
    )
}

export default Header
