import { airports } from "../_data.js";
import { getSearchParams, jsonResponse, normalize, paginate } from "../_utils.js";

export async function onRequestGet({ request }) {
  const params = getSearchParams(request);
  const country = normalize(params.get("country"));
  const q = normalize(params.get("q"));
  let results = airports;

  if (country) {
    results = results.filter((airport) => normalize(airport.country_code) === country || normalize(airport.country) === country);
  }

  if (q) {
    results = results.filter((airport) =>
      normalize(airport.name).includes(q) ||
      normalize(airport.city).includes(q) ||
      normalize(airport.iata) === q ||
      normalize(airport.icao) === q
    );
  }

  return jsonResponse(paginate(results, params));
}
