import React, { useRef } from 'react';
import AdminTopNav from './AdminTopNav';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
      const getRef = useRef();
      const toggleHandler = () => {
            getRef.current.classList.toggle('close');
      }
      return (
            <div className='admin_main_container'>
                  <Sidebar getRef={getRef} />
                  <div className='admin_hero_section'>
                        <AdminTopNav handler={toggleHandler} />
                        <div className="container mx-auto">
                              {children}
                        </div>
                  </div>
            </div>
      );
};

export default AdminLayout;