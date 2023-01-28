import {
      Image, View
} from "@react-pdf/renderer";
import JsBarcode from "jsbarcode";
import React from 'react';

const SKUGenerator = ({ id }) => {
      let canvas;
      canvas = document.createElement('canvas');
      JsBarcode(canvas, id);
      const barcode = canvas.toDataURL();

      return (
            <View style={{ marginBottom: "5px", border: '1px solid #0A5170', height: '185px' }}>
                  <View>
                        <Image source={barcode} alt="Barcode" />
                  </View>
            </View>
      )
};

export default SKUGenerator;