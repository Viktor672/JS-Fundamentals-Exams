function fancyBarcodes(arr) {
    let countOfBarcodes = Number(arr.shift());
    let pattern = /[@][#]+[A-Z][A-Za-z0-9]{4,}[A-Z][@][#]+/;
    let validBarcodesArr = [];
    let barcodeObj = {};
    for (let i = 0; i < countOfBarcodes; i++) {
        if (pattern.test(arr[i])) {
            validBarcodesArr.push(arr[i]);
        }
    }
    for (const curBarcode of validBarcodesArr) {
        let productGroupArr = [];
        for (const curChar of curBarcode) {
            if (curChar >= '0' && curChar <= '9') {
                productGroupArr.push(curChar)
            }
        }
        if (productGroupArr.length > 0) {
            barcodeObj[curBarcode] = { productGroup: productGroupArr.join("") };
        }
        else {
            barcodeObj[curBarcode] = { productGroup: '00' };
        }
    }
    for (const curBarcode of arr) {
        if (pattern.test(curBarcode)) {
            console.log(`Product group: ${barcodeObj[curBarcode].productGroup}`);
        }
        else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
);
