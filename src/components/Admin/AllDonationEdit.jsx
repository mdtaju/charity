import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AutoOptionInput from '../AutoOptionInput';
import Input from '../Input';

const AllDonationEdit = ({
      city,
      setCity,
      district,
      setDistrict,
      address,
      setAddress,
      allCity,
      allDistrict,
}) => {
      const { t } = useTranslation("all_donations");
      const [locationCity, setLocationCity] = useState([]);
      const [locationDistrict, setLocationDistrict] = useState([]);
      const router = useRouter();
      // const [selectPosition, setSelectPosition] = useState(null);
      useEffect(() => {
            let city = [];
            let district = [];
            if (router.locale === "en") {
                  for (let i = 0; i < allCity.length; i++) {
                        const element = allCity[i];
                        city.push(element.cityEnglishName);
                  }
                  for (let i = 0; i < allDistrict.length; i++) {
                        const element = allDistrict[i];
                        district.push(element.districtEnglishName);
                  }
            } else {
                  for (let i = 0; i < allCity.length; i++) {
                        const element = allCity[i];
                        city.push(element.cityArabicName);
                  }
                  for (let i = 0; i < allDistrict.length; i++) {
                        const element = allDistrict[i];
                        district.push(element.districtArabicName);
                  }
            }
            setLocationCity(city)
            setLocationDistrict(district)
      }, [allCity, allDistrict, router])
      return (
            <>
                  <AutoOptionInput
                        title={t("allDonEdtInputThreeTitle")}
                        lbl={t("allDonEdtInputThreeLbl")}
                        locations={locationCity}
                        state={city}
                        setState={setCity}
                  />
                  <AutoOptionInput
                        title={t("allDonEdtInputFourTitle")}
                        lbl={t("allDonEdtInputFourLbl")}
                        locations={locationDistrict}
                        state={district}
                        setState={setDistrict}
                  />
                  <Input
                        title={t("allDonEdtInputFiveTitle")}
                        lbl={t("allDonEdtInputFiveLbl")}
                        required={false}
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                  />
            </>
      );
};

export default AllDonationEdit;