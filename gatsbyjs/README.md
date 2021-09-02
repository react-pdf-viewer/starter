This folder demonstrates how to use [React PDF viewer](https://react-pdf-viewer.dev) with [Gatsby](https://www.gatsbyjs.com).

## Install

* Install the dependencies

```console
$ npm install
```

* Run locally

```console
$ npm run start
```

Visit http://localhost:8000

## Spotlights

### Setting for SSR build

To make it work on SSR build, we have to add an additional option for Webpack settings:

[gatsby-node.js](gatsby-node.js):

```js
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    // It's required by pdfjs-dist
    actions.setWebpackConfig({
        externals: [{
            canvas: 'canvas',
        }],
    });
};
```

### Use the Viewer component

[src/pages/index.js](src/pages/index.js):

```js
import * as React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const IndexPage = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
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
                    fileUrl="/pdf-open-parameters.pdf"
                    plugins={[
                        defaultLayoutPluginInstance,
                    ]}
                />
            </div>
        </Worker>
    );
};

export default IndexPage;
```