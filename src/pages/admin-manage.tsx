import React from 'react';
import Header from '@/components/admin/AdminHeader';
import Main from '@/components/admin/AdminMain';

export default function adminManage() {
  return (
    <div className="w-full h-screen bg-mainGray">
      <Header />
      <Main page="admin-manage" />
    </div>
  );
}
