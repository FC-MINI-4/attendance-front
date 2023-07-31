import { IModalProps } from "@/types/IModal"
import { DatePicker, Space } from "antd"
import { useEffect, useRef } from 'react'
import { modalState } from "@/recoil/common/atoms"
import { useRecoilState } from 'recoil'



export default function ApproveModal(modalProps : IModalProps){
  const [ isModalShow, setIsModalShow ] = useRecoilState(modalState)

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

  const MakeCheckBox = () =>{
    const box = []
    const checkBoxContents = ['반차(오전)', '반차(오후)' , '연차' , '경조휴가']

    for(let i=0; i<4; i++){
      box.push(
        <div
          key={i}
          className="px-3">
          <input type="checkbox"/>{checkBoxContents[i]}
        </div>
      )
    }

    return(
      <div className="flex">{box}</div>
    )
  }
  
  const { RangePicker } = DatePicker;

  const MyDatePicker: React.FC = () => (
    <Space direction="vertical" size={12} style={{width: '100%', margin:'auto', border:'1px solid A1A1A1'}}>
      <RangePicker style={{width:'100%'}}/>
    </Space>
  );

  return(
    <>
      <div className="w-screen h-screen bg-black/40 fixed top-0 left-0 z-10">
        <form
          className="w-1/3 h-80 bg-white absolute top-0 left-0 bottom-0 right-0 m-auto">
          <div ref={modalRef}>
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
                <MyDatePicker/>
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
          </div>
        </form>
      </div>
    </>

  )
}