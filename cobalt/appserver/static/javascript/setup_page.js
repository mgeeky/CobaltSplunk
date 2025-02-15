"use strict";

var app_name = "./cobalt";

// This is an undocumented Splunk solution for how to include javascript logic
// from other files.
// Declare a require.config() and proviade a dictionary that has a `paths` keys.
// In the `paths` key provide another dictionary that declares custom classes.
// Each key should be the class name, and the value the path to the javascript file
// ../app/<extracted_folder_name_of_app>/<path to javascript file>(no extension)
// Then include those in the require method's array, and function.

// Common gotchas:
// 1) The path to the script autmatically appends .js, so don't include it
// 2) This only provides supprt for JavaScript files, plain-text html files won't work
// 3) The "../app" is required as a prefix and your app name is required to follow it
// 4) After the app name, the path is provided as though it were from the
//    $SPLUK_HOME/etc/apps/appserver/static/* directory
require.config({
    paths: {
        // $SPLUNK_HOME/etc/apps/SPLUNK_APP_NAME/appserver/static/javascript/views/setup_page_example
        SetupPageView: "../app/" + app_name + "/javascript/views/setup_page_view",
    },
    scriptType: "module",
});

require([
    "backbone",
    "jquery",
    "SetupPageView",
], function (Backbone, jquery, SetupPageView) {
    var setup_page = new SetupPageView({
        // Sets the element that will be used for rendering
        el: jquery("#main_container"),
    });

    setup_page.render();
});
