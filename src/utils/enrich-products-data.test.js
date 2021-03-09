const enrichProductsData = require('./enrich-products-data');

describe('Enrich Products Data', () => {
  it('matches a barcode to a product', () => {
    const product = [
      {
        SKU: "647-vyk-317",
        Description: "Some description"
      }
    ]
    
    const barcode = [
      {
        SupplierID: '00001',
        SKU: '647-vyk-317',
        Barcode: 'z2783613083817'
      }
    ]

    const output = [
      {
        SKU: "647-vyk-317",
        Description: "Some description",
        bars: ['z2783613083817'],
        source: "A"
      }
    ]
    expect(enrichProductsData(product, barcode, "A")).toEqual(output);
  });

  it('matches many barcodes to a product', () => {
    const product = [
      {
        SKU: "647-vyk-317",
        Description: "Some description"
      }
    ]
    
    const barcodes = [
      {
        SupplierID: '00001',
        SKU: '647-vyk-317',
        Barcode: 'z2783613083817'
      },
      {
        SupplierID: '00001',
        SKU: '647-vyk-317',
        Barcode: 'z2783613083818'
      },
      {
        SupplierID: '00001',
        SKU: '647-vyk-317',
        Barcode: 'z2783613083819'
      }
    ]

    const output = [
      {
        SKU: "647-vyk-317",
        Description: "Some description",
        bars: ['z2783613083817', 'z2783613083818','z2783613083819'],
        source: "A"
      }
    ]
    expect(enrichProductsData(product, barcodes, "A")).toEqual(output);
  });

  it('throws an error if no match found', () => {
    const product = [
      {
        SKU: "647-vyk-317",
        Description: "Some description"
      }
    ]
    
    const barcode = [
      {
        SupplierID: '00001',
        SKU: 'NO-SKU',
        Barcode: 'z2783613083817'
      }
    ]

    expect(()=>{
      enrichProductsData(product, barcode, "A")
    }).toThrow(`No barcode for product 647-vyk-317 in source A`)
  });
})
