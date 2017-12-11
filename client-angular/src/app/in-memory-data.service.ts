import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, firstName: 'Mr. Nice', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 12, firstName: 'Narco', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 13, firstName: 'Bombasto', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 14, firstName: 'Celeritas', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 15, firstName: 'Magneta', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 16, firstName: 'RubberMan', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 17, firstName: 'Dynama', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 18, firstName: 'Dr IQ', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 19, firstName: 'Magma', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' },
      { id: 20, firstName: 'Tornado', lastName: 'Lastnametest', middleName: 'Batkovich', birthDate: '1985-04-22', gender: 'male' }
    ];
    return {members};
  }
}