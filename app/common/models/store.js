'use strict';

/**
*     A factory for the creation of store objects
*/
class StoreFactory {

  static guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  static createStore() {

    return {
      uuid : StoreFactory.guid(),
      name : 'aName',
      street : 'Somewhere',
      city : 'Cologne',
      plz : '12345'
    }

  }

}


class MockStores {

  static getMocks() {
    let mockMagnus = StoreFactory.createStore();
    mockMagnus.name = 'Magnus';

    let mockPazza = StoreFactory.createStore();
    mockPazza.name = 'Pizza Pazza';

    return [mockMagnus, mockPazza]
  }

}

module.exports = MockStores
