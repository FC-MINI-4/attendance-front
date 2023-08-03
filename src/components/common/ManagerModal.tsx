import { manageState } from "@/recoil/common/modal"
import { useRecoilState } from 'recoil'
import { useEffect, useRef } from 'react'

export default function ManageModal(){
  const [isManageShow, setIsManageShow] = useRecoilState(manageState)

  const modalRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    function handleOutside(e: Event) {
      // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsManageShow(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [modalRef])

  return(
    <>
      <div className="w-screen h-screen bg-black/40 fixed top-0 left-0 z-10">
        <div 
          className="w-1/3 h-80 bg-white absolute top-0 left-0 bottom-0 right-0 m-auto"
          ref={modalRef}>
          <div className="w-4/5 h-80 border-2 ">
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div> 
    </>
  )
}