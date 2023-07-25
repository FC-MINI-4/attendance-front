import Link from 'next/link';
import React from 'react';

export default function signin() {
  return (
    <>
      <div className="text-4xl">sign-in</div>
      <div>
        <Link href="/">Go to Home</Link>
      </div>
    </>
  );
}
