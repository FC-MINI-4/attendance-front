import React, { ReactNode } from 'react';
import Main from '@/components/admin/AdminMain';
import Layout from '@/components/common/Layout';

export default function adminDuty() {
  return (
    <div className="w-full h-screen bg-mainGray flex items-center mx-auto">
      <Main page="admin-duty" />
    </div>
  );
}
