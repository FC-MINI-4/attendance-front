import { IModalProps } from "@/types/IModal"
import { useState, useEffect, useRef, useMemo } from 'react'
import { modalState } from "@/recoil/common/atoms"
import { useRecoilState } from 'recoil'
import DatePicker from "react-datepicker"
import { format } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css';

export default function ApproveModal(modalProps : IModalProps){
  const [ isModalShow, setIsModalShow ] = useRecoilState(modalState)
  const [ startDate, setStartDate ] = useState<Date>(new Date())
  const [ endDate, setEndDate ] = useState<Date>(new Date())

  // const ExampleCustomInput = forwardRef(({ value, onClick }, ref : ICustomInput) => (
  //   <button className="example-custom-input" onClick={onClick} ref={ref}>
  //     {value}
  //   </button>
  // ));

  //잔여 연차보다 데이트피커로 선택한 날이 더 많을 경우
  useEffect(()=>{
    const elapsedMSec = endDate.getTime() - startDate.getTime()
    const elapsedDays = Math.abs(elapsedMSec/(1000*60*60*24)) + 1
    if(elapsedDays > 15){
      alert('선택일이 잔여 연차를 초과했습니다.')
      //시작일 기준 ~ +15일
      const a = new Date(endDate.setDate(startDate.getDate() + 14))
      setEndDate(a)
    }
    if(startDate === endDate){
      
    }
  },[startDate, endDate])

  // 모달 외부 클릭시 모달창 닫히게 하는 로직
  const modalRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    function handleOutside(e: Event) {
      // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalShow(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [modalRef])

  //체크박스
  const MakeCheckBox = () =>{
    const box = []
    const checkBoxContents = ['반차(오전)', '반차(오후)' , '연차' , '경조휴가']
    const checkboxes = document.getElementsByTagName('input')
    
    //체크 박스 하나만 클릭 가능하게
    const checkItem = (checkThis : HTMLInputElement) => {
      for(let i=0; i<checkboxes.length; i++){
        if(checkboxes[i] !== checkThis){
          checkboxes[i].checked = false
        }
      }
    }

    for(let i=0; i<4; i++){
      box.push(
        <div
          key={i}
          className="px-3">
          <input
            type="checkbox"
            onClick={(e)=>checkItem(e.target as HTMLInputElement)}
            value={checkBoxContents[i]}/>
            {checkBoxContents[i]}
        </div>
      )
    }

    return(
      <div className="flex">{box}</div>
    )
  }
  
  return(
    <>
      <div className="w-screen h-screen bg-black/40 fixed top-0 left-0 z-10">
        <div ref={modalRef}>
          <form
            className="w-1/3 h-80 bg-white absolute top-0 left-0 bottom-0 right-0 m-auto">

              <div className="before:content-[''] before:block before:w-4 before:h-10 before:bg-primary before:absolute before:top-0 before:left-0
              relative py-2 pl-6 shadow-md">
                {modalProps.title}
              </div>
              <div>
                <div className="flex justify-center items-center pt-4 pb-2"> 
                  {modalProps.IsCheckBoxShow
                    ? <MakeCheckBox/>
                    : null}
                </div>
                <div className="flex justify-between items-center w-[75%] mx-auto py-3">
                  <DatePicker
                    dateFormat={'yyyy/MM/dd'}
                    selected={startDate}
                    onChange={(date : Date)=>setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    />
                    <span>-</span>
                  <DatePicker
                    dateFormat={'yyyy/MM/dd'}
                    selected={endDate}
                    onChange={(date : Date)=>setEndDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    />
                </div>
                <div className="flex justify-center items-center py-3">
                  {modalProps.IsTextBoxShow
                    ? <textarea placeholder="사유" cols={60} rows={3} className="w-[75%] border rounded-md border-modalBorder pt-2 pl-2 outline-none"></textarea>
                    : null
                  }
                </div>
                <div className="flex justify-center items-center pt-2">
                  <input
                    type="submit" value={modalProps.submit}
                    className="border cursor-pointer w-[75%] h-9 bg-primary text-white rounded-md"/>
                </div>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}