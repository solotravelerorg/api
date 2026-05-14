import { airlines } from "../_data.js";
import { getSearchParams, jsonResponse, normalize, paginate } from "../_utils.js";

export async function onRequestGet({ request }) {
  const params = getSearchParams(request);
  const country = normalize(params.get("country"));
  const q = normalize(params.get("q"));
  let results = airlines;

  if (country) {
    results = results.filter((airline) => normalize(airline.country_code) === country || normalize(airline.country) === country);
  }

  if (q) {
    results = results.filter((airline) =>
      normalize(airline.name).includes(q) ||
      normalize(airline.iata) === q ||
      normalize(airline.icao) === q
    );
  }

  return jsonResponse(paginate(results, params));
}
