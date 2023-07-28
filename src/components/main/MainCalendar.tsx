import Link from "next/link";
import { useState } from 'react'
import moment from 'moment'
import{
addMonths,
subMonths,
startOfMonth,
endOfMonth,
startOfWeek,
endOfWeek,
addDays
} from 'date-fns'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Calendar(){
  // new Date 한국시간으로 변경
  const offset = 1000 * 60 * 60 * 9
  const koreaNow = new Date((new Date()).getTime() + offset)

  //현재 달 state에 저장!
  const [currentDate, setCurrentDate] = useState(koreaNow)
  const currentYear = moment(currentDate).format ('YYYY')
  const currentMonth = moment(currentDate).format('MM')
  const currentDayForm = moment(currentDate).format('YYYY.MM.DD')

  //버튼 클릭시 월 바뀌는 로직
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  //일주일 표시
  const Weeks = () => {
    const days = []
    const date = ['일','월','화','수','목','금','토']

    //0부터 해당되는 인덱스의 요일을 days에 입력
    for(let i=0; i<7; i++){
      days.push(
        <div className="grow border-r-2 last:border-0 bg-mainGray pl-1.5" key={i}>
          {date[i]}
        </div>
      )
    }
    return(
      <div className="flex">{days}</div>
    )
  }

  const RenderDays = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(currentDate)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate;
    let formattedDate = ''

    while(day<=endDate){
      for(let i=0; i<7; i++){
        formattedDate = moment(day).format('D')
        let checkedMonth = moment(day).format('MM')
        let today = moment(day).format('YYYY.MM.DD') === currentDayForm
        days.push(
          <div
            className={`h-[7.5rem] grow border box-border last:border-r-0
            ${today ? `bg-primary text-white` : null}
            hover:bg-primaryHover hover:text-white`}
            key={formattedDate}>
            { checkedMonth === currentMonth ?
              (
                <div className="w-6 h-6 pt-1.5 pl-1.5">
                  {formattedDate}
                </div>
              )
            :
              (
                <div className="w-6 h-6 pt-1.5 pl-1.5 text-mainGray">
                {formattedDate}
              </div>
              )
            }

          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div
          className="flex"
          key={formattedDate}>
          {days}
        </div>
      )
      days = [];
    }

    return (
      <div className="border">
        <div>
          {rows}
        </div>
      </div>
    )
  }

  return(
    <>
      <Link href='/'>Go To Home</Link>
      <div>
        {/* 헤더(년.월 형식 + 월 변경 버튼) */}
        <div className="flex h-20 text-3xl">
          <ChevronLeftIcon
            className="w-10 h-10 top-0 bottom-0 m-auto cursor-pointer text-primary pl-1.5"
            onClick={prevMonth} />
          <div className="text-center grow top-0 bottom-0 m-auto">{currentYear}.{currentMonth}</div>
          <ChevronRightIcon
            className="w-10 h-10 top-0 bottom-0 m-auto cursor-pointer text-primary pr-1.5"
            onClick={nextMonth} />
        </div>
        {/* 요일부분 */}
        <div><Weeks/></div>
        <div>
          <RenderDays/>
        </div>
      </div>
    </>
  )

}