This folder demonstrates how to use [React PDF viewer](https://react-pdf-viewer.dev) with [Create React App](https://github.com/facebook/create-react-app).

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

Visit http://localhost:3000 to see it in action.

## Spotlights

### Set the path to pdfjs-dist

The latest version of `pdfjs-dist` uses some modern syntax that requires Webpack 5. The current version of [Create React App](https://github.com/facebook/create-react-app) doesn't support Webpack 5 yet, hence we have to choose the legacy build of `pdfjs-dist`.

We need to use the [react-app-rewired](https://github.com/timarney/react-app-rewired) package to explicitly set the path of `pdfjs-dist`.

[config-overrides.js](config-overrides.js):

```js
const path = require('path');

module.exports = {
    webpack: function (config, env) {    
        config.resolve.alias['pdfjs-dist'] = path.join(__dirname, './node_modules/pdfjs-dist/legacy/build/pdf');
        return config;
    }
};
```

### Use the Viewer component

[App.js](src/App.js):

``` javascript
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
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
