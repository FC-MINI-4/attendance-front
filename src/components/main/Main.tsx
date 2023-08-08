import Calendar from '@/components/main/MainCalendar';
import MainHeader from '@/components/main/MainHeader';
import SideMenu from '@/components/main/MainSideMenu';
import { modalState } from '@/recoil/common/modal';
import { useRecoilState } from 'recoil'

export default function Main(){
  const [isModalShow] = useRecoilState(modalState)

  return(
  <>
    <div className='w-screen h-screen relative'>
      <div className='absolute top-0 left-0 w-full shadow-md'>
        <MainHeader/>
      </div>
      <div className='w-11/12 absolute top-[7rem] left-0 right-0 mx-auto'>
        <div className='absolute top-0 left-0 w-1/6 pt-10'>
          <SideMenu/>
        </div>
        <div className='absolute top-0 right-0 w-5/6'>
          <Calendar/>
        </div>
      </div>
    </div>
  </>
  )
}