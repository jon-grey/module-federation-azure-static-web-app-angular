const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  );

module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "shell",
        filename: "remoteEntry.js",
        exposes: {
            './Component': './projects/shell/src/app/app.component.ts',
        },

        // *) Static Federation from Webpack - Angular do not know about it
        // **) Dynamic Federation from Angular - comment below
        // For hosts (please adjust) -> update shell/src/{main.ts,*/app.routes.ts}:
        // remotes: {
        //   // cant have both, last entry with same key persists, so we add `-dev`
        //   "mfe1": "mfe1@https://salmon-moss-0f41c3910.azurestaticapps.net/remoteEntry.js",
        //   "mfe1-dev": "mfe1@http://localhost:3000/remoteEntry.js",
        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },

          // Uncomment for sharing lib of an Angular CLI or Nx workspace
          ...sharedMappings.getDescriptors()
        }

    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
