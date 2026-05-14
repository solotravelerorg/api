import { airlines } from "../../_data.js";
import { errorResponse, jsonResponse, normalize } from "../../_utils.js";

export async function onRequestGet({ params }) {
  const code = normalize(params.iata);
  const airline = airlines.find((item) => normalize(item.iata) === code || normalize(item.icao) === code);

  if (!airline) {
    return errorResponse("Airline not found", 404);
  }

  return jsonResponse(airline);
}
