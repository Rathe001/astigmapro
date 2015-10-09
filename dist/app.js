System.register(['bootstrap'], function (_export) {
    'use strict';

    var App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_bootstrap) {}],
        execute: function () {
            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'Astigmapro';
                        config.options.pushState = true;
                        config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: true, title: 'Home' }, { route: ['blog', 'blog'], name: 'blog', moduleId: 'blog/blog', nav: true, title: 'Blog' }, { route: ['resume', 'resume'], name: 'resume', moduleId: 'resume/resume', nav: true, title: 'Resume' }]);

                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNHLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0FBQzVCLDhCQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDaEMsOEJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDUCxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFDLEVBQ2xGLEVBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUMsRUFDdEYsRUFBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFFBQVEsRUFBQyxDQUNyRyxDQUFDLENBQUM7O0FBRUgsNEJBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3FCQUN4Qjs7O3VCQVhRLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgICAgICBjb25maWcudGl0bGUgPSAnQXN0aWdtYXBybyc7XG4gICAgICAgIGNvbmZpZy5vcHRpb25zLnB1c2hTdGF0ZSA9IHRydWU7IC8vIFJlbW92ZXMgLyMvIGZyb20gcm91dGVzXG4gICAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICAgICAge3JvdXRlOiBbJycsJ2hvbWUnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2hvbWUvaG9tZScsIG5hdjogdHJ1ZSwgdGl0bGU6J0hvbWUnfSxcbiAgICAgICAgICAgIHtyb3V0ZTogWydibG9nJywnYmxvZyddLCBuYW1lOiAnYmxvZycsIG1vZHVsZUlkOiAnYmxvZy9ibG9nJywgbmF2OiB0cnVlLCB0aXRsZTonQmxvZyd9LFxuICAgICAgICAgICAge3JvdXRlOiBbJ3Jlc3VtZScsJ3Jlc3VtZSddLCBuYW1lOiAncmVzdW1lJywgbW9kdWxlSWQ6ICdyZXN1bWUvcmVzdW1lJywgbmF2OiB0cnVlLCB0aXRsZTonUmVzdW1lJ31cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
