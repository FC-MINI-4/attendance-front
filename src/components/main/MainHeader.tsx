export default function MainHeader(){
  return(
    <div className="h-32 flex justify-between px-16">
      <div className="top-0 bottom-0 my-auto text-3xl font-bold">
        <span className="text-primary">W</span>ork <span className="text-primary">M</span>anager
      </div>
      <div className="flex top-0 bottom-0 my-auto">
        <div className="w-12 h-12 rounded-full bg-mainGray mr-6">
          
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 font-bold">
            문현수님
          </div>
          <div className="pt-6">
            mhs0704123@naver.com
          </div>
          <div className="absolute top-0 right-0 text-primary font-bold">
            잔여연차:15
          </div>
        </div>
        <div className="ml-4 top-0 bottom-0 my-auto font-bold">
          로그아웃
        </div>
      </div>
    </div>
  )
}