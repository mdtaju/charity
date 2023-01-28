import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { MdOutlineAdminPanelSettings, MdOutlineDirectionsBike } from 'react-icons/md';
import { RiHandCoinLine } from 'react-icons/ri';
import { TbBuildingWarehouse, TbLayoutDashboard } from 'react-icons/tb';
import { UseRole } from '../../hoke/useRole';
import SidebarMultipleMenu from './SidebarMultipleMenu';
import SidebarSingleLink from './SidebarSingleLink';

const SidebarNav = () => {
      const { t } = useTranslation('common_dashboard');
      const URole = UseRole();
      const [donationOption, setDonationOption] = useState([]);
      const [driverOption, setDriverOption] = useState([]);
      const [adminOption, setAdminOption] = useState([]);
      const [warehouseOptions, setWarehouseOptions] = useState([]);
      useEffect(() => {
            const getAccess = () => {
                  switch (URole) {
                        case "Super-Admin":
                              setDonationOption([{ name: t("sideNavDonSubOne"), link: "/admin/donations" }, { name: t("sideNavDonSubTwo"), link: "/admin/donations/make-donation" }, { name: t("sideNavDonSubThree"), link: "/admin/donations/track-donations" }]);
                              setDriverOption([{ name: t("sideNavDriversSubOne"), link: "/admin/drivers" }, { name: t("sideNavDriversSubTwo"), link: "/admin/drivers/make-driver" }, { name: t("sideNavDriversSubThree"), link: "/admin/drivers/track-drivers" }]);
                              setAdminOption([{ name: t("sideNavAdminsSubOne"), link: "/admin/admins" }, { name: t("sideNavAdminsSubTwo"), link: "/admin/admins/make-admin" }, { name: t("sideNavAdminsSubThree"), link: "/admin/admins/upload-image" }]);
                              setWarehouseOptions([{ name: t("sideNavWareSubOne"), link: "/admin/warehouse/generate-sku" }, { name: t("sideNavWareSubTwo"), link: "/admin/warehouse/stocks-status" }, { name: t("sideNavWareSubThree"), link: "/admin/warehouse/in-stocks" }, { name: t("sideNavWareSubFour"), link: "/admin/warehouse/out-of-stocks" }, { name: t("sideNavWareSubFive"), link: "/admin/warehouse" }])
                              return;
                        case "Admin":
                              setDonationOption([{ name: t("sideNavDonSubOne"), link: "/admin/donations" }, { name: t("sideNavDonSubTwo"), link: "/admin/donations/make-donation" }, { name: t("sideNavDonSubThree"), link: "/admin/donations/track-donations" }]);
                              setDriverOption([{ name: t("sideNavDriversSubOne"), link: "/admin/drivers" }, { name: t("sideNavDriversSubTwo"), link: "/admin/drivers/make-driver" }, { name: t("sideNavDriversSubThree"), link: "/admin/drivers/track-drivers" }]);
                              setWarehouseOptions([{ name: t("sideNavWareSubOne"), link: "/admin/warehouse/generate-sku" }, { name: t("sideNavWareSubTwo"), link: "/admin/warehouse/stocks-status" }, { name: t("sideNavWareSubThree"), link: "/admin/warehouse/in-stocks" }, { name: t("sideNavWareSubFour"), link: "/admin/warehouse/out-of-stocks" }, { name: t("sideNavWareSubFive"), link: "/admin/warehouse" }])
                              return;
                        case "Customer-Service":
                              setDonationOption([{ name: t("sideNavDonSubOne"), link: "/admin/donations" }, { name: t("sideNavDonSubTwo"), link: "/admin/donations/make-donation" }, { name: t("sideNavDonSubThree"), link: "/admin/donations/track-donations" }]);
                              return;
                        case "Operation":
                              setDonationOption([{ name: t("sideNavDonSubOne"), link: "/admin/donations" }, { name: t("sideNavDonSubThree"), link: "/admin/donations/track-donations" }]);
                              setWarehouseOptions([{ name: t("sideNavWareSubOne"), link: "/admin/warehouse/generate-sku" }, { name: t("sideNavWareSubTwo"), link: "/admin/warehouse/stocks-status" }, { name: t("sideNavWareSubThree"), link: "/admin/warehouse/in-stocks" }, { name: t("sideNavWareSubFour"), link: "/admin/warehouse/out-of-stocks" }, { name: t("sideNavWareSubFive"), link: "/admin/warehouse" }])
                              return;
                        default:
                              setDonationOption([{ name: t("sideNavDonSubThree"), link: "/admin/donations" }]);
                              setWarehouseOptions([{ name: t("sideNavWareSubTwo"), link: "/admin/warehouse/stocks-status" }])
                              return;
                  }
            }
            getAccess();
      }, [URole, t])
      return (
            <ul className='sidebar_nav_links'>
                  <SidebarSingleLink
                        Icon={TbLayoutDashboard}
                        title={t("sideNavDash")}
                        link={"/admin/dashboard"}
                  />
                  {
                        URole !== "Customer-Service" &&
                        <SidebarMultipleMenu
                              Icon={TbBuildingWarehouse}
                              title={t("sideNavWare")}
                              options={warehouseOptions}
                        />
                  }
                  {
                        (URole === "Super-Admin" || URole === "Admin" || URole === "Customer-Service" || URole === "Operation") &&
                        <SidebarMultipleMenu
                              Icon={RiHandCoinLine}
                              title={t("sideNavDon")}
                              options={donationOption}
                        />
                  }
                  {
                        (URole === "Super-Admin" || URole === "Admin" || URole === "Customer-Service" || URole === "Operation") &&
                        <SidebarMultipleMenu
                              Icon={MdOutlineDirectionsBike}
                              title={t("sideNavDrivers")}
                              options={driverOption}
                        />
                  }
                  {
                        URole === 'Super-Admin' &&
                        <SidebarMultipleMenu
                              Icon={MdOutlineAdminPanelSettings}
                              title={t("sideNavAdmins")}
                              options={adminOption}
                        />
                  }
            </ul>
      );
};

export default SidebarNav;