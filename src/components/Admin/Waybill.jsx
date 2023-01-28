import {
      Image, Text,
      View
} from "@react-pdf/renderer";
import JsBarcode from "jsbarcode";
import React from 'react';

const Waybill = ({ info }) => {
      const { id, date, receivedDate, fullName, phone, productDescription } = info;
      let canvas;
      canvas = document.createElement('canvas');
      JsBarcode(canvas, id);
      const barcode = canvas.toDataURL();
      return (
            <View style={{ margin: 20, padding: 15, border: '1px solid #0A5170', height: '90%' }}>
                  <Text style={{ color: '#0A5170', fontSize: '20px', marginBottom: '5px', fontWeight: '600', textAlign: 'center' }}>Rhma</Text>
                  <View style={{ width: '100%', height: '1px', backgroundColor: '#0A5174', marginBottom: '15px' }}></View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <Text style={{ color: '#000', fontSize: '16px', }}>Donation Date: </Text>
                        <Text style={{ color: 'gray', fontSize: '14px', }}>{date}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <Text style={{ color: '#000', fontSize: '16px', }}>Receive Date: </Text>
                        <Text style={{ color: 'gray', fontSize: '14px', }}>{receivedDate}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <Text style={{ color: '#000', fontSize: '16px', }}>Donor Name: </Text>
                        <Text style={{ color: 'gray', fontSize: '14px', }}>{fullName}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <Text style={{ color: '#000', fontSize: '16px', }}>Donor Phone: </Text>
                        <Text style={{ color: 'gray', fontSize: '14px', }}>{phone}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <Text style={{ color: '#000', fontSize: '16px', }}>Product Description: </Text>
                        <Text style={{ color: 'gray', fontSize: '14px', }}>{productDescription}</Text>
                  </View>
                  <View>
                        <Image source={barcode} alt="Barcode" />
                  </View>
            </View>

      )

}
export default Waybill;