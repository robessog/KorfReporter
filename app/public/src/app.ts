/// <reference path="./../typings/jspmImports/aurelia-router.d.ts" />

import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
   
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
      config.title = 'KorfReporter';
      config.map([
        //   { route: ['', 'Home'], name: 'home', modeuleId: './home', nav: true, title: 'Home' },
        { route: ['About'], name: 'about', moduleId: './about', nav: true, title: 'About' },
          { route: 
              ['', 'MatchReporting'], name: 'matchEvent', moduleId: './MatchEvent/MatchEvent', nav: true, title: 'Match Reporting' }
      ]);
      
      this.router = router;
    }
}
