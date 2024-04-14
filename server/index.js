import path from "path";
import fs from "fs";
import express from "express";

import React from "react";
import { Helmet } from "react-helmet";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import { matchPath } from "react-router-dom";


import { ServerContext } from "../src/services/serverContext";
import { PORT, routes } from './data';
import { serverDataMiddleware } from './serverDataMiddleware';

import App from "../src/App";

const app = express();


// getting data from server depending on route
app.use(serverDataMiddleware);

app.get("*", async (req, res, next) => {
  const context = {};

  const activeRoute = routes.find((route) =>
    matchPath({ path: route }, req.path)
  );

  if (activeRoute) {

    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <ServerContext.Provider value={req.serverData}>
          <App />
        </ServerContext.Provider>
      </StaticRouter>
    );

    const helmet = Helmet.renderStatic();
    const indexFile = path.resolve("./build/index.html");

    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }

      // setting custom title and metadata
      let shtml = data;
      shtml = shtml.replace(`<title></title>`, helmet.title.toString());
      shtml = shtml.replace(`<meta name="h-meta"/>`, helmet.meta.toString());

      return res.send(
        shtml.replace(
          '<div id="root"></div>',
          `<div id="root">${app}</div> 
         <script>
         window.__PRELOADED_STATE__ = ${JSON.stringify(req.serverData).replace(
            /</g,
            "\\u003c"
          )}
        </script>`
        )
      );
    });
  } else {
    next();
  }
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


