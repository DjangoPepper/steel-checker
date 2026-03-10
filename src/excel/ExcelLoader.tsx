import * as XLSX from "xlsx"
import { useState } from "react"

type Row = {
  serial: string
  weight: number
}

export default function ExcelLoader({ onLoad }: any) {

  function handleFile(e: any) {
    const file = e.target.files[0]

    const reader = new FileReader()

    reader.onload = (evt: any) => {

      const wb = XLSX.read(evt.target.result, { type: "binary" })
      const ws = wb.Sheets[wb.SheetNames[0]]

      const data = XLSX.utils.sheet_to_json<Row>(ws)

      onLoad(data)
    }

    reader.readAsBinaryString(file)
  }

  return <input type="file" accept=".xlsx" onChange={handleFile}/>
}