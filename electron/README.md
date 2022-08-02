This folder demonstrates how to use [React PDF viewer](https://react-pdf-viewer.dev) with [Electron](https://www.electronjs.org).

## Install

* Install the dependencies

```console
$ npm install
```

* Run locally

```console
$ npm run dev
```

It will open http://localhost:3000 on the default browser and run the Electron app.

## Spotlights

[App.js](src/App.js):

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
                fileUrl={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
);
```
