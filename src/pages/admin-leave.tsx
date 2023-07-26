import React from 'react';
import Header from '@/components/admin/AdminHeader';
import Main from '@/components/admin/AdminMain';

export default function adminLeave() {
  return (
    <div className="w-full h-screen bg-mainGray flex items-center mx-auto ">
      <Main page="admin-leave" />
    </div>
  );
}
