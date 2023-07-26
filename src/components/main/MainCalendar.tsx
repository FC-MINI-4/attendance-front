import Link from "next/link";
import { useState } from 'react'
import moment from 'moment'
import {addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns'

export default function Calendar(){
  //현재 달 state에 저장!
  const [currentDate, setCurrentDate] = useState(new Date())
  const headerMonth = moment(currentDate).format('YYYY.MM')

  //버튼 클릭시 월 바뀌는 로직
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  //해당되는 첫째 날이 무슨요일인지
  //ex)
  // const getFirstDayIdx = ({ year, month }: GetDaysProps) => {
  //   return new Date(year, month, 1).getDay();
  // };

  //일주일 표시
  const Weeks = () => {
    const days = []
    const date = ['일','월','화','수','목','금','토']

    //0부터 해당되는 인덱스의 요일을 days에 입력
    for(let i=0; i<7; i++){
      days.push(
        <div className="grow border-r-2 last:border-0" key={i}>
          {date[i]}
        </div>
      )
    }
    return(
      <div className="border flex">{days}</div>
    )
  }

  const RenderDays = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(currentDate)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)


    return (
      <div className="border">
        <div>
          으으으으으으으으아강멀나ㅓㅁㄴ알
        </div>
      </div>
    )
  }

  return(
    <>
      <Link href='/'>Go To Home</Link>
      <div>
        {/* 헤더(년.월 형식 + 월 변경 버튼) */}
        <div className="flex">
          <button
            className="w-8 h-8 bg-sky-300"
            onClick={prevMonth}></button>
          <div className="text-center grow">{headerMonth}</div>
          <button
            className="w-8 h-8 bg-sky-300"
            onClick={nextMonth}></button>
        </div>
        {/* 요일부분 */}
        <div><Weeks/></div>
        <div><RenderDays/></div>
      </div>
    </>
  )

}