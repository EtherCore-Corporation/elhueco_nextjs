<<<<<<< HEAD
# Fuentes para El Hueco

## Instalación de Fuentes

Para el correcto funcionamiento del sitio, necesitas instalar las siguientes fuentes:

### Helvetica World
1. Descarga los archivos de fuentes Helvetica World (Regular y Bold) de una fuente legítima
2. Coloca los siguientes archivos en este directorio:
   - `HelveticaWorld-Regular.woff`
   - `HelveticaWorld-Regular.woff2`
   - `HelveticaWorld-Bold.woff`
   - `HelveticaWorld-Bold.woff2`

### Open Sauce
1. Esta fuente se carga automáticamente desde Google Fonts
2. Como alternativa, puedes descargar Open Sauce Sans de [su sitio oficial](https://github.com/marcologous/Open-Sauce-Sans) y colocar los archivos en este directorio

## Nota importante

Por razones de licencia, no podemos incluir directamente los archivos de Helvetica World en el repositorio. Debes adquirir estas fuentes de manera legítima.

## Fuente alternativa

Si no tienes acceso a Helvetica World, el sitio utilizará automáticamente Open Sans como alternativa, que ya está configurada para cargar desde Google Fonts. 
=======
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
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
