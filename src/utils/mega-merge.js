const megaMerge = (listA, listB) => {
  // combine the lists together
  let mergedList = listA.concat(listB);
  let usedBarcodes = [];

  return mergedList.reduce((prev, curr) => {

    // check if current item barcode already in merged list
    if (curr.bars.some(barcode => usedBarcodes.indexOf(barcode) >=0 )) {
      return prev;
    }
    usedBarcodes = usedBarcodes.concat(curr.bars);
    return prev.concat([{SKU: curr.SKU, Description: curr.Description, Source: curr.source }]);
  }, []);
}

module.exports = megaMerge;