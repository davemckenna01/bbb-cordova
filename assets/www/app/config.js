// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["../vendor/jam/require.config", "main"],

  paths: {
    // Use the underscore build of Lo-Dash to minimize incompatibilities.
    "lodash": "../vendor/jam/lodash/dist/lodash.underscore",
    "jquery": "../vendor/jam/jquery/dist/jquery",
    "backbone": "../vendor/jam/backbone/backbone"

    // Put additional paths here.
  },

  map: {
    // Ensure Lo-Dash is used instead of underscore.
    "*": { "underscore": "lodash" }

    // Put additional maps here.
  },

  shim: {
    // backbone: {
    //   deps: ["lodash", "jquery"],
    //   exports: "Backbone"
    // },
  }

});
