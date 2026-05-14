export function jsonResponse(payload, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400");
  headers.set("Access-Control-Allow-Origin", "*");
  return new Response(JSON.stringify(payload, null, 2), { ...init, headers });
}

export function errorResponse(message, status = 404) {
  return jsonResponse({ error: { message, status } }, { status });
}

export function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

export function getSearchParams(request) {
  return new URL(request.url).searchParams;
}

export function paginate(items, searchParams) {
  const limit = Math.min(Number(searchParams.get("limit") || items.length), 500);
  const offset = Math.max(Number(searchParams.get("offset") || 0), 0);
  return {
    count: items.length,
    limit,
    offset,
    data: items.slice(offset, offset + limit)
  };
}
