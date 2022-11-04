import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="//db.onlinewebfonts.com/c/29800a9e7d146302b8ed9ad2f848db63?family=Druk+Wide+Web+Bold"
            rel="stylesheet"
            type="text/css"
          />
        </div>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
