/** Normalized shapes (camelCase) used in forms and tables. */

export interface ICountry {
  id: number;
  countryName: string;
}

export interface IState {
  id: number;
  stateName: string;
  countryId: number;
}

export interface IDistrict {
  id: number;
  cityName: string;
  stateId: number;
}

function num(v: unknown, fallback = 0): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export function normalizeCountry(raw: Record<string, unknown>): ICountry {
  return {
    id: num(raw['id'] ?? raw['Id']),
    countryName: String(raw['countryName'] ?? raw['CountryName'] ?? ''),
  };
}

export function normalizeState(raw: Record<string, unknown>): IState {
  return {
    id: num(raw['id'] ?? raw['Id']),
    stateName: String(raw['stateName'] ?? raw['StateName'] ?? ''),
    countryId: num(raw['countryId'] ?? raw['CountryId']),
  };
}

export function normalizeDistrict(raw: Record<string, unknown>): IDistrict {
  return {
    id: num(raw['id'] ?? raw['Id'] ?? raw['cityId'] ?? raw['CityId']),
    cityName: String(
      raw['cityName'] ?? raw['CityName'] ?? raw['districtName'] ?? raw['DistrictName'] ?? ''
    ),
    stateId: num(raw['stateId'] ?? raw['StateId']),
  };
}

export function normalizeList<T>(
  data: unknown,
  mapRow: (row: Record<string, unknown>) => T
): T[] {
  if (data == null) {
    return [];
  }
  const rows = Array.isArray(data) ? data : [data];
  return rows.map(r => mapRow(r as Record<string, unknown>));
}
