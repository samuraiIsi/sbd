import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];
        let boxes = [{
                classDiv: 'col-lg-6 col-md-6 col-xs-12',
                articleClass: 'boxes col-lg-6 col-lg-offset-3 bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/LRA-295-263x452.jpg',
                imageClass: '', 
                name: 'Michael A. Feetham',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            },
            {
                classDiv: 'col-lg-6 col-md-6 col-xs-12',
                articleClass: 'boxes col-lg-6 col-lg-offset-3',
                headerText: '',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                imageClass: '',
                name: 'Carlos D. Márquez',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            }
        ];
        let boxespanel = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'Spain',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive', 
                footerText: 'Juan Carmona Cózar lawyer Degree in Law.'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'Peru',
                image: '../../theme/assets/img/paris.jpg',
                imageClass: 'img-responsive',
                footerText: 'Antonio Carmelino & Carlos D. Marquez Moran'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'Europe',
                image: '../../theme/assets/img/sanfran.jpg',
                imageClass: 'img-responsive',
                footerText: "Hassans is Gibraltar's largest international law firm."
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'Russia',
                image: '../../theme/assets/img/img_chania.jpg',
                imageClass: 'img-responsive',
                footerText: 'Yakovlev & Partners.'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-md-offset-3 col-lg-offset-0',
                articleClass: 'panel panel--blue-dark',
                headerText: 'Angola',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive',
                footerText: 'Paulo Costa'
            }
        ];
        let agencies = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'Spain',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive', 
                footerText: 'Juan Carmona Cózar lawyer Degree in Law.'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'Peru',
                image: '../../theme/assets/img/paris.jpg',
                imageClass: 'img-responsive',
                footerText: 'Antonio Carmelino & Carlos D. Marquez Moran'
            }
        ];
    return { heroes, boxes, boxespanel, agencies };
  }
}
