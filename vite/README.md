This folder demonstrates how to bundle [React PDF viewer](https://react-pdf-viewer.dev) with [Vite](https://vitejs.dev)

## Install

* Install the dependencies

```console
$ npm install
```

* Build

```console
$ npm run build
```

* Run locally

```console
$ npm run dev
```

Visit http://localhost:5173/. You can change the default port `5173` in the `server.port` section of the Vite config file: 

```js
export default defineConfig({
    // ...
    server: {
        port: 5173,
    },
});
```

## Spotlights

[App.tsx](src/App.tsx):

```js
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
        <div style={{ height: '750px' }}>
            <Viewer
                fileUrl="/pdf-open-parameters.pdf"
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
);
```
