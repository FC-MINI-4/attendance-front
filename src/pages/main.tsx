import Calendar from '@/components/main/MainCalendar';
import SideMenu from '@/components/main/MainSideMenu';

export default function main(){
  return(
  <div className='w-screen h-screen position'>
    <div className='w-1/6 border-2 h-full'>
      <SideMenu/>
    </div>
    <div className='absolute top-[7rem] right-0 w-5/6'>
      <Calendar/>
    </div>
  </div>
  )
}
