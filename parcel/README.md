This folder demonstrates how to bundle [React PDF viewer](https://react-pdf-viewer.dev) with [Parcel](https://parceljs.org)

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

Visit http://localhost:1234/. You can change the port `1234` in the `package.json` file:

```json
{
    ...,
    "scripts": {
        "dev": "npm run copy && parcel --port 1234"
    },
}
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
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
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
