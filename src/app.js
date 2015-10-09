import 'bootstrap';

export class App {
    configureRouter(config, router){
        config.title = 'Astigma Productions Ltd';
        config.options.pushState = true; // Removes /#/ from routes
        config.map([
            {route: ['','home'], name: 'home', moduleId: 'home/home', nav: true, title:'Home'},
            {route: ['blog','blog'], name: 'blog', moduleId: 'blog/blog', nav: true, title:'Blog'},
            {route: ['resume','resume'], name: 'resume', moduleId: 'resume/resume', nav: true, title:'Resume'}
        ]);

        this.router = router;
    }
}