import Image from 'next/image';

export default function MemberHeader() {
  return (
    <div className="h-24 flex justify-between px-24 border-b shadow-sm">
      <div className="top-0 bottom-0 my-auto text-3xl font-bold">
        <Image src={'/logo.png'} width={150} height={150} alt="logo" />
      </div>
    </div>
  );
}
