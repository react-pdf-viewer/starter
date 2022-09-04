This folder demonstrates how to bundle [React PDF viewer](https://react-pdf-viewer.dev) with [Razzle](https://razzlejs.org/)

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
$ npm run start
```

Visit http://localhost:3000/. You can change the port `3000` in the main [entry point](src/index.ts#L17):

```js
// src/index.ts
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
```

## Spotlights

### Set the path to pdfjs-dist

The latest version of `pdfjs-dist` uses some modern syntax that requires Webpack 5. This starter doesn't support Webpack 5 yet, hence we have to choose the legacy build of `pdfjs-dist`.

We have to add a custom Webpack config to explicitly set the path of `pdfjs-dist`:

[razzle.config.js](razzle.config.js):

```js
const path = require('path');

module.exports = {
    modifyWebpackConfig(opts) {
        const config = opts.webpackConfig;
        config.resolve.alias['pdfjs-dist'] = path.join(__dirname, './node_modules/pdfjs-dist/legacy/build/pdf');

        return config;
    },
};
```

### Use the Viewer component

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
