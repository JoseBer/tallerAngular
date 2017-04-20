angular.module('app').component('planetsComponent', {
    templateUrl: 'app/components/planets-template.html',
    controller: planetsComponent,
    controllerAs: 'pepito'
  });
  function planetsComponent(){
        var vm=this;

        vm.$onInit= function(){
            // vm.foo='pepito';
        
        vm.solarSystem = [
            {id: 0, name: 'Mercury'},
            {id: 1, name: 'Venus'},
            {id: 2, name: 'Earth'},
            {id: 3, name: 'Mars'},
            {id: 4, name: 'Jupiter'},
            {id: 5, name: 'Saturn'},
            {id: 6, name: 'Uranus'},
            {id: 7, name: 'Neptune'}
        ];
      vm.addPlanet=function(){
          vm.solarSystem.push ({id: 8, name:'Pluton'});
        }

      vm.removePlanet = function (idPlanet){
        var len=vm.solarSystem.length;
        var i=0;
        for(;i<len;i++){
          if (idPlanet === vm.solarSystem[i].id){
               vm.solarSystem.splice(i,1);
               break;
            }

         }
         } 
      };
    }