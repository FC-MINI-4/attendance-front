export default function MemberSideBar(){

  const Side = () => {
    const SideBar = []
    const sideList = ['마이페이지', '개인정보수정', '연차/반차 신청 리스트']
    
    for(let i=0; i < 3; i++){
      SideBar.push(
        <div
          key={i}
          className="before:content-[''] before:block before:w-1.5 before:h-6 before:bg-mainBlack before:absolute before:top-3.5 before:left-[10px] before:hover:bg-primary
          py-3.5 relative text-mainBlack pl-8 font-semibold cursor-pointer
          hover:text-primary"
        >
          {sideList[i]}
        </div>
      )
    }
    return(
    <>
      <div>{SideBar}</div>
    </>
    )
  }
  return(
    <div><Side/></div>
  )
}
