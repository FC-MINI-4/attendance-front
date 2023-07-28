import Calendar from '@/components/main/MainCalendar';
import SideMenu from '@/components/main/MainSideMenu';

export default function main(){
  return(
  <div className='w-screen h-screen position'>
    <div className='absolute top-[8.5rem] left-0 w-1/6 pt-10 pl-3 pr-3'>
      <SideMenu/>
    </div>
    <div className='absolute top-[8.5rem] right-0 w-5/6'>
      <Calendar/>
    </div>
  </div>
  )
}