import Document, { Html, Head, Main, NextScript } from 'next/document'

const themeScript = `(function(){try{var saved=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=saved==='light'?'light':'dark';}catch(error){document.documentElement.dataset.theme='dark';}})();`

export default class MyDocument extends Document {
  render() {
    return <Html lang='en'><Head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></Head><body><Main /><NextScript /></body></Html>
  }
}
