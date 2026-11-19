import Document, { Html, Head, Main, NextScript } from 'next/document'

const themeScript = `(function(){try{var saved=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=saved==='dark'?'dark':'light';}catch(error){document.documentElement.dataset.theme='light';}})();`

export default class MyDocument extends Document {
  render() {
    const data = this.props.__NEXT_DATA__
    const isGoogleTranslated = data.locale === 'it' && data.props?.pageProps?.translationBundle?.source === 'google'
    return <Html lang={isGoogleTranslated ? 'it-x-mtfrom-en' : data.locale || 'en'}><Head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></Head><body><Main /><NextScript /></body></Html>
  }
}
