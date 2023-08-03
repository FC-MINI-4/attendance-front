import { manageState, modalState } from "@/recoil/common/modal"
import { useRecoilState } from 'recoil'
import ApproveModal from '@/components/common/ApproveModal'
import ManageModal from "@/components/common/ManagerModal"

export default function MenuBar(){
  const [isModalShow, setIsModalShow] = useRecoilState(modalState)
  const [isManageShow, setIsManageShow] = useRecoilState(manageState)

  const Menu = () => {
    const menuBar = []
    const menuList = ['마이페이지', '연차/반차 등록', '당직 등록', '당직 및 연차 일정 관리']
    
    for(let i=0; i<4; i++){
      if(i === 1){
        menuBar.push(
          <div
            key={i}
            className="before:content-[''] before:block before:w-1.5 before:h-6 before:bg-mainBlack before:absolute before:top-3.5 before:left-[-10px] before:hover:bg-primary
            py-3.5 relative text-mainBlack pl-4 font-semibold cursor-pointer
            hover:text-primary"
            onClick={()=>setIsModalShow(true)}
          >
            {menuList[i]}
          </div>
        )
      }else if(i === 2){
        menuBar.push(
          <div
            key={i}
            className="before:content-[''] before:block before:w-1.5 before:h-6 before:bg-mainBlack before:absolute before:top-3.5 before:left-[-10px] before:hover:bg-primary
            py-3.5 relative text-mainBlack pl-4 font-semibold cursor-pointer
            hover:text-primary"
            onClick={()=>setIsManageShow(true)}
          >
            {menuList[i]}
          </div>
        )
      }else{
        menuBar.push(
          <div
            key={i}
            className="before:content-[''] before:block before:w-1.5 before:h-6 before:bg-mainBlack before:absolute before:top-3.5 before:left-[-10px] before:hover:bg-primary
            py-3.5 relative text-mainBlack pl-4 font-semibold cursor-pointer
            hover:text-primary"
          >
            {menuList[i]}
          </div>
        )
      }
    }
    return(
    <>
      <div>{menuBar}</div>
    </>
    )
  }
  return(
    <>
      { isModalShow
        ? <ApproveModal
          title={'연차/반차 등록'}
          IsCheckBoxShow={true}
          IsTextBoxShow={true}
          submit={'승인 요청'}/>
        : null
      }
      { isManageShow
        ? <ManageModal/>
        : null
      }
      <div>
        <Menu/>
      </div>
    </>

  )
}