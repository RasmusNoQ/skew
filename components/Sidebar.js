import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink';
import {
    HomeIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
} from '@heroicons/react/outline'

const Links = [
    {text:"Home",Icon:{HomeIcon},active:true},
    {text:"Home",Icon:{HashtagIcon},active:false},
    {text:"Home",Icon:{BellIcon},active:false},
    {text:"Home",Icon:{InboxIcon},active:false},
    {text:"Home",Icon:{BookmarkIcon},active:false},
    {text:"Home",Icon:{ClipboardListIcon},active:false},
    {text:"Home",Icon:{UserIcon},active:false},
    {text:"Home",Icon:{DotsCircleHorizontalIcon},active:false},
]



function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col items-center 
    xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
            <Image src="https://rb.gy/ogau5a" width={30} height={30}/>
        </div>
        <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24 '>
          <SidebarLink text="Home" Icon={HomeIcon} active/>
          <SidebarLink text="Explore" Icon={HashtagIcon} active/>
          <SidebarLink text="Notifications" Icon={BellIcon} active/>
          <SidebarLink text="Messages" Icon={InboxIcon} active/>
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active/>
          <SidebarLink text="Lists" Icon={ClipboardListIcon} active/>
          <SidebarLink text="Profile" Icon={UserIcon} active/>
          <SidebarLink text="More..." Icon={DotsCircleHorizontalIcon} active/>
        </div>  
        <button className='hidden xl:inline ml-auto bg-[#1d9bf0] text-white w-56 h-[52px] rounded-full
        text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>Tweet</button>
        <div className='text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto'>
          <img src="https://pbs.twimg.com/profile_images/1372814171105021958/L_xX9tQs_400x400.jpg"
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"/>
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">Daniel Lucas</h4>
            <p className="text-[#6e767d]">firebase1875</p>
          </div>
          <DotsHorizontalIcon className='h-5 hidden xl:inline ml-10'/>
        </div>
    </div>
  )
}

export default Sidebar