This folder demonstrates how to use [React PDF viewer](https://react-pdf-viewer.dev) with [NextJS](https://nextjs.org/).

## Install

* Install the dependencies

~~~ console
npm install
~~~

* Build

~~~ console
npm run build
~~~

* Run locally

~~~ console
npm run dev
~~~

Visit http://localhost:3000

## Spotlights

[pages/_app.js](pages/_app.js):

~~~ javascript
// Import the styles provided by the react-pdf-viewer packages
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
~~~

[pages/index.js](pages/index.js):

~~~ javascript
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.js">
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
~~~
