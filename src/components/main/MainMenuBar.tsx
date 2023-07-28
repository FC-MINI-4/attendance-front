export default function MenuBar(){

  const Menu = () => {
    const menuBar = []
    const menuList = ['마이페이지', '연차/반차 등록', '당직 등록', '당직 및 연차 일정 관리']
    
    for(let i=0; i<4; i++){
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
    return(
    <>
      <div>{menuBar}</div>
    </>
    )
  }
  return(
    <div><Menu/></div>
  )
}