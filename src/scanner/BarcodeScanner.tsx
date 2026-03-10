import { BrowserMultiFormatReader } from "@zxing/browser"
import { useEffect } from "react"

export default function BarcodeScanner({ onScan }: any) {

  useEffect(() => {

    const reader = new BrowserMultiFormatReader()

    reader.decodeFromVideoDevice(
      undefined,
      "video",
      (result) => {
        if (result) {
          onScan(result.getText())
        }
      }
    )

  }, [])

  return <video id="video" width="400"/>
}