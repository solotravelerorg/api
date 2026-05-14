import { countries } from "../../_data.js";
import { errorResponse, jsonResponse, normalize } from "../../_utils.js";

export async function onRequestGet({ params }) {
  const code = normalize(params.code);
  const country = countries.find((item) =>
    normalize(item.alpha2) === code || normalize(item.alpha3) === code || normalize(item.numeric) === code
  );

  if (!country) {
    return errorResponse("Country not found", 404);
  }

  return jsonResponse(country);
}
