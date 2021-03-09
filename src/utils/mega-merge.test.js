const megaMerge = require('./mega-merge');

describe('Mega Merge', () => {
  it('combines product information with source information', () => {
    const productA = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "AAA-AAA-AAA description",
        bars: ['AAAAAAAAAA'],
        source: "A"
      }
    ]

    const productB = [
      {
        SKU: "BBB-BBB-BBB",
        Description: "BBB-BBB-BBB description",
        bars: ['BBBBBBBBBB'],
        source: "B"
      }
    ]

    const output = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "AAA-AAA-AAA description",
        Source: "A"
      },
      {
        SKU: "BBB-BBB-BBB",
        Description: "BBB-BBB-BBB description",
        Source: "B"
      }
    ]
    expect(megaMerge(productA, productB)).toEqual(output);
  });

  it('allows products with same description', () => {
    const productA = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        bars: ['AAAAAAAAAA'],
        source: "A"
      }
    ]

    const productB = [
      {
        SKU: "BBB-BBB-BBB",
        Description: "Some description",
        bars: ['BBBBBBBBBB'],
        source: "B"
      }
    ]

    const output = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        Source: "A"
      },
      {
        SKU: "BBB-BBB-BBB",
        Description: "Some description",
        Source: "B"
      }
    ]
    expect(megaMerge(productA, productB)).toEqual(output);
  });

  it('allows products with same sku', () => {
    const productA = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        bars: ['AAAAAAAAAA'],
        source: "A"
      }
    ]

    const productB = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        bars: ['BBBBBBBBBB'],
        source: "B"
      }
    ]

    const output = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        Source: "A"
      },
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        Source: "B"
      }
    ]
    expect(megaMerge(productA, productB)).toEqual(output);
  });

  it('wont allow shared barcodes', ()=> {
    const productA = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        bars: ['AAAAAAAAAA'],
        source: "A"
      }
    ]

    const productB = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        bars: ['AAAAAAAAAA'],
        source: "B"
      }
    ]

    const output = [
      {
        SKU: "AAA-AAA-AAA",
        Description: "Some description",
        Source: "A"
      }
    ]
    expect(megaMerge(productA, productB)).toEqual(output);
  })
});