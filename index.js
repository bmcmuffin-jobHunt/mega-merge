const fs = require(`fs`).promises;
const csv = require(`async-csv`);
const json2csv = require(`json2csv`);
const enrichProductsData = require(`./src/utils/enrich-products-data`);
const megaMerge = require(`./src/utils/mega-merge`);

const files = [
  {name: `barcodesA`,file:`./input/barcodesA.csv`},
  {name: `barcodesB`, file: `./input/barcodesB.csv`},
  {name: `catalogA`, file: `./input/catalogA.csv`},
  {name: `catalogB`, file: `./input/catalogB.csv`}
];

let fileData = {
  barcodesA: [],
  barcodesB: [],
  catalogA: [],
  catalogB: []
}

const processFiles = () => {
  return Promise.all(files.map(async (file) => {
    const csvString = await fs.readFile(file.file, `utf-8`);
    const rows = await csv.parse(csvString, {columns: true});
    fileData[file[`name`]] = rows;
    return rows;
  }))
    .then(files => {
      if (fileData.barcodesA && fileData.barcodesB && fileData.catalogA && fileData.catalogB ) {
        const listA = enrichProductsData(fileData.catalogA, fileData.barcodesA, `A`);
        const listB = enrichProductsData(fileData.catalogB, fileData.barcodesB, `B`);
        const mergedList = megaMerge(listA, listB);
        const csv = json2csv.parse(mergedList);
        console.log(`Combining catalogs...`);
        fs.writeFile(`./output/result_output.csv`, csv, `utf-8`);
        console.log(`Results written to output folder`);
      } else {
        throw `Data missing from one or more files`;
      }
    })
    .catch(err=> {
      console.log(`Please check all required files are present`);
    })
}

processFiles();