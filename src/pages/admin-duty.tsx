import React from 'react';
import Header from '@/components/admin/AdminHeader';
import Main from '@/components/admin/AdminMain';

export default function adminDuty() {
  return (
    <div className="w-full h-screen bg-mainGray">
      <Header />
      <Main page="admin-duty" />
    </div>
  );
}
