import { RecoilRoot } from 'recoil';
import MemberBoard from '@/components/member/MemberBoard';
import MemberDetail from '@/components/member/MemberDetail';
import MemberLayout from '@/components/member/MemberLayout';
import MemberSideBar from '@/components/member/MemberSideBar';

export default function Member() {
  return (
    <RecoilRoot>
      <MemberLayout>
        <div className=" w-full shadow-md"></div>
        <div className="flex  my-24">
          <div className="pb-10 ">
            <MemberBoard />
            <div className="mt-16 ">
              <MemberSideBar />
            </div>
          </div>
          <div className="">
            <MemberDetail />
          </div>
        </div>
      </MemberLayout>
    </RecoilRoot>
  );
}
