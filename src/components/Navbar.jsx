import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import avatar from '../data/avatar.jpg'
import Carts from './Carts'
import Chat from './Chat'
import UserProfile from './UserProfile'
import Notifications from './Notifications'
import{ useStateContext} from '../context/ContextProvider'
import  {TooltipComponent} from '@syncfusion/ej2-react-popups'

const NavButton = ({title, customFunc,icon, color, dotColor}) => (
  <TooltipComponent
    content={title}
    position='BottomCenter'
    >
    <button
      type='button'  
      onClick = {customFunc}
      style={{color}}
      className='relative rounded-full p-3 text-xl hover:bg-light-gray'
    >
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return() => window.removeEventListener('resize', handleResize)
  
  }, [])

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    } else{
      setActiveMenu(true)
    }
  
  }, [screenSize])

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton title='Menu' customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu/>}/>
      <div className='flex'>
        <NavButton 
          title='Cart' 
          customFunc={() => handleClick('cart')} 
          color={currentColor} 
          icon={<FiShoppingCart/>}
        />
        <NavButton 
          title='Chat' 
          dotColor='#03C9D7'
          customFunc={() => handleClick('chat')} 
          color={currentColor} 
          icon={<BsChatLeft/>}
        />
        <NavButton 
          title='Notification' 
          dotColor='rgb(254, 201, 15)'
          customFunc={() => handleClick('notification')} 
          color={currentColor} 
          icon={<RiNotification3Line/>}
        />
        <TooltipComponent
          content='Profile'
          position='BottomCenter'
        >
          <div
            className='flex gap-2 items-center p-1 cursor-pointer hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')} 
          >
            <img src={avatar} className='rounded-full w-8 h-8' alt='user profile'/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
            </p>
            <MdKeyboardArrowDown classNames='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Carts/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notifications/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar