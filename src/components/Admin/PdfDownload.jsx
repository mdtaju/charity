import JsBarcode from "jsbarcode";
import React from 'react';

const SKUGenerator = ({ id }) => {
      let canvas;
      canvas = document.createElement('canvas');
      JsBarcode(canvas, id);
      const barcode = canvas.toDataURL();

      return (
            <div style={{ marginBottom: "5px", border: '1px solid #0A5170', width: '100%', height: '185px' }}>
                  <img style={{ width: '100%', margin: '0px auto' }} src={barcode} alt="Barcode" />
            </div>
      )
};
const PdfDownload = ({ SKU }) => {

      return (
            <div className='invoicePages' style={{ width: "384px", paddingTop: "5px", paddingRight: "5px", paddingLeft: '5px', border: '1px solid red', margin: '0px auto' }}>
                  {
                        SKU.map((item, i) => (
                              <SKUGenerator key={i} id={item} />
                        ))
                  }
            </div>
      )
};

export default PdfDownload;