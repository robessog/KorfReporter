/// <reference path="./../typings/jspmImports/aurelia-framework.d.ts" />

import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
    aurelia.use
    .standardConfiguration()
    .developmentLogging();

    aurelia.start().then(() => aurelia.setRoot('dist/app', document.body));
}
