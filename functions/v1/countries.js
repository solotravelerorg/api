import { countries } from "../_data.js";
import { getSearchParams, jsonResponse, normalize, paginate } from "../_utils.js";

export async function onRequestGet({ request }) {
  const params = getSearchParams(request);
  const q = normalize(params.get("q"));
  let results = countries;

  if (q) {
    results = results.filter((country) =>
      normalize(country.name).includes(q) ||
      normalize(country.official_name).includes(q) ||
      normalize(country.common_name).includes(q) ||
      normalize(country.alpha2) === q ||
      normalize(country.alpha3) === q ||
      normalize(country.numeric) === q
    );
  }

  return jsonResponse(paginate(results, params));
}
