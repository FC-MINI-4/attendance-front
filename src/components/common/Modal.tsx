interface IModalProps {
  title: string // 모달 제목
  IsCheckBoxShow: boolean //checkbox 표시 여부
  IsTextBoxShow: boolean //사유 input 표시 여부
  submit: string // 제출버튼 내용
}

export default function ApproveModal(modalProps : IModalProps){

  const MakeCheckBox = () =>{
    const box = []
    const checkBoxContents = ['반차(오전)', '반차(오후)' , '연차' , '경조휴가']

    for(let i=0; i<4; i++){
      box.push(
        <div
          key={i}
          className="px-2">
          <input type="checkbox"/>{checkBoxContents[i]}
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
        <form className="w-3/12 h-72 bg-white absolute top-0 left-0 bottom-0 right-0 m-auto">
          <div className="py-3">
            {modalProps.title}
          </div>
          <div>
            <div className="flex justify-center items-center pb-6"> 
              {modalProps.IsCheckBoxShow ? <MakeCheckBox/> : null}
            </div>
            <div className="flex justify-between items-center w-5/6 mx-auto pb-6">
              <div>datepicker</div>
              <div>datepicker</div>
            </div>
            <div className="flex justify-center items-center pb-6">
              {modalProps.IsTextBoxShow
                ? <textarea placeholder="사유" cols={60} rows={3} className="w-5/6 border border-modalBorder"></textarea>
                : null
              }

            </div>
            <div className="flex justify-center items-center">
              <input
                type="submit" value={modalProps.submit}
                className="border cursor-pointer w-5/6"/>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}