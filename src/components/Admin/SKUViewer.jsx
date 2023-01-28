import { Document, Page } from '@react-pdf/renderer';
import React from 'react';
// import SKUGenerator from './SKUGenerator';
// D:\React-Project\charity\node_modules\@react-pdf\renderer\index.d.ts
import {
      Image, View
} from "@react-pdf/renderer";
import JsBarcode from "jsbarcode";

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
const SKUViewer = ({ SKU }) => {
      return (
            // <PDFViewer style={{ width: "100%", height: "100%" }} >
            <Document>
                  <Page wrap={true} size={["384", "576"]} style={{ paddingTop: "5px", paddingRight: "5px", paddingLeft: '5px' }}>
                        {
                              SKU.map((item, i) => (
                                    <SKUGenerator key={i} id={item} />
                              ))
                        }
                  </Page>
            </Document>
            // </PDFViewer>
      )
};

export default SKUViewer;