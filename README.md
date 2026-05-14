# Solo Traveler API

The Solo Traveler API provides simple public endpoints for travel reference data. It is designed for developers, researchers, publishers, students, and builders who need lightweight travel data for websites, tools, notebooks, and applications.

Base URL:

```text
https://api.solotraveler.org
```

## Available Endpoints

```http
GET /v1/countries
GET /v1/countries/{code}
GET /v1/airports
GET /v1/airports/{iata}
GET /v1/airlines
GET /v1/airlines/{iata}
```

## Countries

Returns country reference data based on ISO 3166-1 identifiers.

```bash
curl https://api.solotraveler.org/v1/countries
```

Search by name or code:

```bash
curl "https://api.solotraveler.org/v1/countries?q=canada"
```

Get one country by ISO alpha-2, alpha-3, or numeric code:

```bash
curl https://api.solotraveler.org/v1/countries/CA
curl https://api.solotraveler.org/v1/countries/CAN
curl https://api.solotraveler.org/v1/countries/124
```

Example response:

```json
{
  "name": "Canada",
  "official_name": "Canada",
  "common_name": "Canada",
  "alpha2": "CA",
  "alpha3": "CAN",
  "numeric": "124",
  "slug": "canada",
  "flag": "🇨🇦",
  "iso_standard": "ISO 3166-1"
}
```

## Airports

Returns airport reference records. The starter dataset includes a curated sample of major international airports and can be expanded over time.

```bash
curl https://api.solotraveler.org/v1/airports
```

Filter by country code:

```bash
curl "https://api.solotraveler.org/v1/airports?country=CA"
```

Get one airport by IATA or ICAO code:

```bash
curl https://api.solotraveler.org/v1/airports/YYZ
```

## Airlines

Returns airline reference records. The starter dataset includes a curated sample of major international airlines and can be expanded over time.

```bash
curl https://api.solotraveler.org/v1/airlines
```

Filter by country code:

```bash
curl "https://api.solotraveler.org/v1/airlines?country=CA"
```

Get one airline by IATA or ICAO code:

```bash
curl https://api.solotraveler.org/v1/airlines/AC
```

## Pagination

List endpoints support `limit` and `offset`.

```bash
curl "https://api.solotraveler.org/v1/countries?limit=25&offset=50"
```

List responses use this wrapper:

```json
{
  "count": 249,
  "limit": 25,
  "offset": 50,
  "data": []
}
```

## JavaScript Example

```javascript
const response = await fetch("https://api.solotraveler.org/v1/countries/CA");
const country = await response.json();
console.log(country.name);
```

## Python Example

```python
import requests

response = requests.get("https://api.solotraveler.org/v1/countries/CA")
country = response.json()
print(country["name"])
```

## OpenAPI

The machine-readable OpenAPI file is available at:

```text
/openapi.json
```

## Data Notes

The countries dataset includes 249 ISO 3166-1 country and territory records. Airport and airline datasets are starter reference datasets and are intended to grow through future releases.

## License

MIT License.
