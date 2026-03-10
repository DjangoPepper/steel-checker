export type ScanResult = {
  serial?: string
  weight?: number
}

export function parseBarcode(value: string): ScanResult {
  const result: ScanResult = {}

  const parts = value.split(/\s+/)

  parts.forEach(p => {
    if (p.startsWith("S")) {
      result.serial = p
    }

    if (p.startsWith("Q")) {
      result.weight = Number(p.substring(1))
    }
  })

  return result
}