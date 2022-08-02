This folder demonstrates how to bundle [React PDF viewer](https://react-pdf-viewer.dev) with [Docusaurus](https://docusaurus.io)

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

Visit http://localhost:3000/docs/intro to see the example.

## Spotlights

### Setting for build

To make it work with the production build, we have to add an additional option for Webpack settings:

[docusaurus.config.js](docusaurus.config.js):

```js
const config = {
    // ...
    plugins: ['./canvas-loader.js'],
};
```

[canvas-loader.js](canvas-loader.js):

```js
module.exports = () => ({
    name: 'canvas-loader',
    configureWebpack() {
        return {
            // It's required by pdfjs-dist
            externals: [{
                canvas: 'canvas',
            }],
        };
    },
});
```

### Use the Viewer component

Here is the content of the intro page, located at [docs/intro.mdx](docs/intro.mdx):

```md
---
sidebar_position: 1
---

import TestPdfViewer from "@site/src/components/TestPdfViewer";

# React PDF Viewer

<TestPdfViewer />
```

The `TestPdfViewer` component is located at [src/components/TestPdfViewer](src/components/TestPdfViewer)

```js
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
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
