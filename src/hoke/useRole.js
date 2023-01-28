
import bcrypt from 'bcryptjs';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';

export const UseRole = () => {
      const [userRole, setUserRole] = useState("Super-Admin");
      useEffect(() => {
            const { role } = parseCookies();
            const getRole = async () => {
                  const superAdmin = await bcrypt.compare("Super-Admin", role);
                  const Admin = await bcrypt.compare("Admin", role);
                  const Operation = await bcrypt.compare("Operation", role);
                  const CustomerService = await bcrypt.compare("Customer-Service", role);
                  if (superAdmin) {
                        setUserRole("Super-Admin");
                  } else if (Admin) {
                        setUserRole("Admin");
                  } else if (Operation) {
                        setUserRole("Operation");
                  } else if (CustomerService) {
                        setUserRole("Customer-Service");
                  } else {
                        setUserRole("Default");
                  }
            }
            getRole();
      }, [])
      return userRole
};
