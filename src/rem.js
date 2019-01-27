import setStyle from './setStyle'

let remSetuped = false

export function rem({
  designWidth = 750,
  designDPR = 1,
  rem2px = 100,
  bodyFontSize = 14,
  win,
  doc
}) {
  let documentElement = doc.documentElement
  let dpr = win.devicePixelRatio || 1
  let expectedWidth = designWidth * designDPR
  let expectedDocumentElementFontSize = rem2px

  !remSetuped && setBodyFontSize()

  function setDocumentElementFontSize() {
    let adaptedWidth = documentElement.clientWidth * dpr
    let adaptedDocumentElementFontSize = expectedDocumentElementFontSize * adaptedWidth / expectedWidth
    setStyle(documentElement, 'font-size', adaptedDocumentElementFontSize)
    console.log(`dpr: ${dpr}, expectedWidth: ${expectedWidth}, deFontSize: ${expectedDocumentElementFontSize}, adaptedWidth: ${adaptedWidth}, adaptedFontSize: ${adaptedDocumentElementFontSize}`)
  }

  function setBodyFontSize() {
    if (doc.body) {
      setStyle(doc.body, 'font-size', bodyFontSize * dpr)
    }
    else {
      doc.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  if (!remSetuped) {
    setDocumentElementFontSize()

    // reset rem unit on page resize
    window.addEventListener('resize', setDocumentElementFontSize)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setDocumentElementFontSize()
      }
    })
  }

  remSetuped = true
}

export default rem 