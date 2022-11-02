# TEMPLATE WEB APP FRONTEND

## Tabla de contenido

1. [Enviroment](#enviroment)
2. [Extensiones recomendades vscode](#extensiones-recomendadas-vscode)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Desarrollo](#desarrollo)
5. [Store global](#store-global)
6. [Debug jotai](#debug-jotai)
7. [Librerias de terceros](#librerias-de-terceros)
8. [Visual studio code snippers](#visual-studio-code-snippers)
9. [Funciones Globales utiles](#funciones-globales-utiles)
10. [Compoonentes comparitdos](#shared-components)

Este proyecto esta construido

- Nextjs
- Axios
- Material UI

## Enviroment

Debe asegurarte de tener node 14 o superior instalado y luego instalar los modulos de node

```bash
yarn
```

Ahora para levantar el proyecto

```bash
yarn dev
```

- Dasboard [http://localhost:3000/app/](http://localhost:3000/app/)
- Dasboard [http://localhost:3000/auth/login](http://localhost:3000/auth/login)

El proyecto esta configurado para tomar de forma dinamica deacuerdo al ambiente, algunas variables globales, como el base
\_url de la api.
el archivos se encuentra en src/enviroment.json

Si queremos cambiar entre el backend de testing o production solo debemos setear el ambiente correcto en el archivo env.local
para ellos podemos copiar el archivos .env y renombrarlo y econtraremos el siguiente contenido

```.env
# possible values: "local", "testing", "production"
NEXT_PUBLIC_ENVIROMENT='testing'
```

## Extensiones recomendadas vscode

- Prettier
- Error lens
- Image preview
- Eslint
- Better comments

## Estructura del proyecto

El codigo de nuestro proyecto se encuentra en la carpeta src, next js maneja un sistema de rutas basado en file system todo lo que creemos en la carpeta pages, se convierte en un ruta de la aplicación.

Para crear una nueva ruta nos vamos a src/page/ y creamos un nuevo archivo .tsx y su nombre sera el nombre de la ruta.
En components creamos una carpta con el mismo nombre de la ruta y dentro estaran alojados los componentes correspondientes.

En la carpeta shared, crearemos los cmponents transversales a la aplicacion. acutalmente ya contiene varios componentes utilies para mas info pueder encontrarla [aqui](#shared-components)

## Desarrollo

El proyecto se encuentra configurado, si queremos agregar una nueva ruta en el side bar nos vamos

- src/
  - navigation/
    - vertical/index.ts

Y agregamos los datos en el objeto.

### Store global

Utilizamos Jotai para manejar los estados globales, por defecto el template tiene un stado global para manejar la session del usuario

y lo podemos ubicar en src/hooks/useSession idelamente solo seria cambiar la url de la cual optenemos la informacion. Si ya se encuentra prevismante configurada no debemos preocuparnos por el contenido del hook.

Y pasariamos a el siguiente punto

- La session del usuario ya esta configurada previamente al momento de cargar la app, asi que para consumirla en donde la necesitemos

```js
import { useSession } from 'src/hook'

const FunctionComponent = () => {
  const { session } = useSession()
  const { user, community } = session

  return <div>hola {user.name}</div>
}
```

## Debug jotai

El store global esta configurado para ser debugueado con las **redux devtools** asi que las puedes intalar en tu navegar google chrome [Redux dev tools]('https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es')

Al momento de crear nuevos atomos y quireas debuguarlos te dejo a continuacion un little example

```ts
import { atom, useAtom } from 'jotai'
import { useAtomDevtools } from 'jotai/devtools'

const exampleAtom = atom<string>('atom value') // Can also be object, boolean etc

//!IMPORTANT
exampleAtom.debugLabel = 'example'

const useExampleStore = () => {
  const [example, updateExample] = useAtom(exampleAtom)
  useAtomDevtools()

  return {
    example,
    updateExample
  }
}
```

## Librerias de terceros

Esta seccion noes para detallar las liberias de tercero que utilizamos si no el por que las usamos y solo algunas que puedan llamar la atencion, por ejemplo quienes hayan trabajando con redux y ahora usan jotai saben la razon de la eleccion.

- react icons : Esta libreria tiene un bundle enorme de iconos, y nos permite maniobrar facilmente, lo ideal seria utilizar siempre los material icons, pero muchas veces ese o sera posible, ahi entra en juego esta libreria.
  - No usaremos la libreria nativa de material ui

**NOTA**
Al instalar una nueva liberia asegurarse de borrar el caret, para de esa manera siempre tener le version especifica

_Good_

```json
"yup": "0.32.11"
```

_Bad_

```json
"yup": "^0.32.11"
```

## Funciones Globales utiles

Hay varias funciones que son transversales entre modulos, a continuacion explicamos el funcionamiento de la funcion mas comun, _formarCurrency_ ejemplo:

```ts
import { formarCurrency } from 'src/utils'

// some code above

const formatedNumber = formarCurrency(100, 'USD')

// Expected result = USD 100,00

//some code here
```

## Shared components

Actualmente la carpeta shared tenemos los siguientes componentes

- FABButton
- Confirm
- Modal
- PageHeading
- DataTable
