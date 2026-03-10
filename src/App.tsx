import { useState } from "react"
import ExcelLoader from "./excel/ExcelLoader"
import BarcodeScanner from "./scanner/BarcodeScanner"
import { parseBarcode } from "./utils/parseBarcode"

function App() {

  const [excelData, setExcelData] = useState<any[]>([])
  const [result, setResult] = useState<any>()

  function handleScan(text: string) {

    const parsed = parseBarcode(text)

    const match = excelData.find(
      r => r.serial === parsed.serial
    )

    if (!match) {
      setResult("SERIAL NON TROUVÉ")
      return
    }

    if (match.weight === parsed.weight) {
      setResult("OK")
    } else {
      setResult("POIDS DIFFERENT")
    }
  }

  return (
    <div>

      <h1>Steel Coil Checker</h1>

      <ExcelLoader onLoad={setExcelData}/>

      <BarcodeScanner onScan={handleScan}/>

      <h2>{result}</h2>

    </div>
  )
}

export default App