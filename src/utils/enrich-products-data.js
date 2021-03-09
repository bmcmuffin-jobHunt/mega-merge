const enrichProductsData = (products, barcodes, source) => {
  return products.map(el=>{
    let bars = barcodes.reduce( (prev, curr) => {
        if (curr.SKU===el.SKU) {
          prev.push(curr.Barcode);
          return prev;
        }
        return prev
      }, [])
      if (!bars.length) {
        throw `No barcode for product ${el.SKU} in source ${source}`
      }
    return {...el, source, bars}
  })
}

module.exports = enrichProductsData;