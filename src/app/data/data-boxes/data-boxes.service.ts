import { InMemoryDbService } from 'angular-in-memory-web-api';
export class DataBoxesService implements InMemoryDbService {
    createDb() {
        let boxes = [
            {image: '../../theme/assets/img/LRA-295-263x452.jpg', name: 'Mr. Nice'},
            {image: '../../theme/assets/img/LRA-295-263x452.jpg', name: 'Narco'}
        ];

    return {boxes};
  }
}