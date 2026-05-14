import { airports } from "../../_data.js";
import { errorResponse, jsonResponse, normalize } from "../../_utils.js";

export async function onRequestGet({ params }) {
  const code = normalize(params.iata);
  const airport = airports.find((item) => normalize(item.iata) === code || normalize(item.icao) === code);

  if (!airport) {
    return errorResponse("Airport not found", 404);
  }

  return jsonResponse(airport);
}
