# Instrucciones para añadir la fuente Neuzeit Grotesk

Para utilizar la fuente Neuzeit Grotesk en el proyecto, sigue estos pasos:

1. Descarga los archivos de la fuente Neuzeit Grotesk (Regular y Bold) en formato WOFF y WOFF2.
   - Puedes adquirir la fuente en [MyFonts](https://www.myfonts.com/fonts/linotype/neuzeit-grotesk/) o en otro proveedor de fuentes.
   - También puedes usar una alternativa gratuita como "Inter" o "DM Sans" que son similares a Neuzeit Grotesk.

2. Coloca los archivos de fuente en esta carpeta (`public/fonts/`) con los siguientes nombres:
   - `NeuzeitGrotesk-Regular.woff`
   - `NeuzeitGrotesk-Regular.woff2`
   - `NeuzeitGrotesk-Bold.woff`
   - `NeuzeitGrotesk-Bold.woff2`

3. Si no tienes acceso a la fuente Neuzeit Grotesk, puedes usar una alternativa gratuita modificando el archivo `styles/globals.css` y `tailwind.config.js` para usar otra fuente.

## Alternativa: Usar Google Fonts

Si prefieres usar una fuente de Google Fonts como alternativa, puedes modificar el archivo `pages/_document.js` para incluir la fuente:

```jsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

Y luego actualiza el archivo `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Inter', 'sans-serif'],
},
``` 