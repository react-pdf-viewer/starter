This folder demonstrates how to bundle [React PDF viewer](https://react-pdf-viewer.dev) with [Snowpack](https://www.snowpack.dev)

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

Visit http://localhost:8080/

## Spotlights

[App.jsx](src/App.jsx):

```js
import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import the file
import samplePdfFile from '../public/pdf-open-parameters.pdf';

const App = () => {
    // Create a new instance of plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        // Set the worker path
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer
                    fileUrl={samplePdfFile}
                    // Register the plugins
                    plugins={[defaultLayoutPluginInstance]}
                />
            </div>
        </Worker>
    );
};

export default App;
```
