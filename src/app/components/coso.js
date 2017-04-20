angular.module('app').component('coso', {
    template: '<p>Soy el coso {{coso.nombreCoso}}</p>',
    controller: controllerCoso,
    controllerAs: 'coso',
    binding:{
        nombreCoso:'@'
    }
  });