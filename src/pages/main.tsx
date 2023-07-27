import Calendar from '@/components/main/MainCalendar';
import Link from 'next/link';

export default function main(){
  return(
  <div className='w-screen h-screen position'>
    <div className='absolute top-[10rem] right-0'>
      <Calendar/>
    </div>
  </div>
  )
}
