import fs from "node:fs";

const datasets = ["countries", "airports", "airlines"];

for (const name of datasets) {
  const path = `data/${name}.json`;
  const records = JSON.parse(fs.readFileSync(path, "utf8"));

  if (!Array.isArray(records)) {
    throw new Error(`${path} must contain an array.`);
  }

  if (records.length === 0) {
    throw new Error(`${path} must not be empty.`);
  }

  console.log(`${name}: ${records.length} records`);
}

const countries = JSON.parse(fs.readFileSync("data/countries.json", "utf8"));
const alpha2 = new Set();

for (const country of countries) {
  for (const field of ["name", "alpha2", "alpha3", "numeric"]) {
    if (!country[field]) {
      throw new Error(`Country record is missing ${field}: ${JSON.stringify(country)}`);
    }
  }

  if (alpha2.has(country.alpha2)) {
    throw new Error(`Duplicate alpha2 code: ${country.alpha2}`);
  }

  alpha2.add(country.alpha2);
}

if (countries.length < 240) {
  throw new Error(`Expected a complete ISO-style countries dataset, got ${countries.length} records.`);
}

console.log("Validation passed.");
