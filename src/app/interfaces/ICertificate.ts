function num(v: unknown, fallback = 0): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export interface ICertificate {
  id: number;
  collegeId: number;
  description: string | null;
  type: string;
}

export function normalizeCertificate(raw: Record<string, unknown>): ICertificate {
  return {
    id: num(raw['id'] ?? raw['Id']),
    collegeId: num(raw['collegeId'] ?? raw['CollegeId']),
    description: raw['description'] != null ? String(raw['description']) : null,
    type: String(raw['type'] ?? raw['Type'] ?? ''),
  };
}

export function normalizeCertificateList(
  data: unknown,
  mapRow: (row: Record<string, unknown>) => ICertificate
): ICertificate[] {
  if (data == null) {
    return [];
  }
  const rows = Array.isArray(data) ? data : [data];
  return rows.map(r => mapRow(r as Record<string, unknown>));
}

export interface IStringApiResponse {
  success: boolean;
  message: string | null;
  data: string | null;
}
