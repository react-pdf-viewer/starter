This folder demonstrates how to use [React PDF viewer](https://react-pdf-viewer.dev) with [Create React App](https://github.com/facebook/create-react-app).

## Install

* Install the dependencies

~~~ console
yarn install
~~~

* Build

~~~ console
yarn run build
~~~

* Run locally

~~~ console
yarn run start
~~~

Visit http://localhost:3000 to see it in action.

## Spotlights

[App.js](src/App.js):

~~~ javascript
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
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
~~~
