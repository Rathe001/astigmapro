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
                        config.title = 'Astigma Productions Ltd';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNHLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUM7QUFDekMsOEJBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUNoQyw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNQLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUMsRUFDbEYsRUFBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBQyxFQUN0RixFQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLENBQ3JHLENBQUMsQ0FBQzs7QUFFSCw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7cUJBQ3hCOzs7dUJBWFEsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9ICdBc3RpZ21hIFByb2R1Y3Rpb25zIEx0ZCc7XG4gICAgICAgIGNvbmZpZy5vcHRpb25zLnB1c2hTdGF0ZSA9IHRydWU7IC8vIFJlbW92ZXMgLyMvIGZyb20gcm91dGVzXG4gICAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICAgICAge3JvdXRlOiBbJycsJ2hvbWUnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2hvbWUvaG9tZScsIG5hdjogdHJ1ZSwgdGl0bGU6J0hvbWUnfSxcbiAgICAgICAgICAgIHtyb3V0ZTogWydibG9nJywnYmxvZyddLCBuYW1lOiAnYmxvZycsIG1vZHVsZUlkOiAnYmxvZy9ibG9nJywgbmF2OiB0cnVlLCB0aXRsZTonQmxvZyd9LFxuICAgICAgICAgICAge3JvdXRlOiBbJ3Jlc3VtZScsJ3Jlc3VtZSddLCBuYW1lOiAncmVzdW1lJywgbW9kdWxlSWQ6ICdyZXN1bWUvcmVzdW1lJywgbmF2OiB0cnVlLCB0aXRsZTonUmVzdW1lJ31cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
