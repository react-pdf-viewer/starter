This folder demonstrates how to use R[React PDF viewer](https://react-pdf-viewer.dev) with a most basic server-side rendering (SSR) environment.

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

Visit http://localhost:8001/. You can change the port `8001` in the `src/server.js` file: 

```js
// src/server.js

const PORT = 8001;
```

## Spotlights

[App.jsx](src/App.jsx):

```js
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
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
