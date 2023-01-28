import bcrypt from 'bcryptjs';

export const getRole = async (role) => {
      const superAdmin = await bcrypt.compare("Super-Admin", role);
      const Admin = await bcrypt.compare("Admin", role);
      const Operation = await bcrypt.compare("Operation", role);
      const CustomerService = await bcrypt.compare("Customer-Service", role);
      if (superAdmin) {
            return "Super-Admin"
      } else if (Admin) {
            return "Admin"
      } else if (Operation) {
            return "Operation"
      } else if (CustomerService) {
            return "Customer-Service"
      } else {
            return "Default"
      }
}