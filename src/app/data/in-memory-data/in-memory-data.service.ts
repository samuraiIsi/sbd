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
                articleClass: 'boxes',
                image: '../../theme/assets/img/LRA-295-263x452.jpg', 
                name: 'Michael A. Feetham',
                classDiv: 'col-lg-2 col-md-6 col-xs-12 col-lg-offset-4',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            },
            {
                articleClass: 'boxes',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                name: 'Carlos D. Márquez',
                classDiv: 'col-lg-2 col-md-12 col-xs-12',
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
                articleClass: 'panel panel--orange',
                image: '../../theme/assets/img/LRA-295-263x452.jpg', 
                name: 'Michael Asdfdf. Feethamsfsdf',
                classDiv: 'col-lg-2 col-md-6 col-xs-12 col-lg-offset-4',
            },
            {
                articleClass: 'panel panel--orange',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                name: 'Carlos Dsdfsdf. Márquezsdfsdf',
                classDiv: 'col-lg-2 col-md-12 col-xs-12'
            }
        ];
    return { heroes, boxes, boxespanel };
  }
}
