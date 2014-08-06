// David Prager Branner
// 20140805

angular.module('ngMadLibs', []).
  controller('Replacements', function($scope) {
    $scope.origReplmnts = [
      {name: '', placeholder: 'Given name', type:'text'}, 
      {name: '', placeholder: 'Dirty task', type:'text'}, 
      {name: '', placeholder: 'Obnoxious celebrity', type:'text'}, 
      {name: '', placeholder: 'Job title', type:'text'},   
      {name: '', placeholder: 'Celebrity', type:'text'}, 
      {name: '', placeholder: 'Huge number', type:'number'}, 
      {name: '', placeholder: 'Tedious task', type:'text'}, 
      {name: '', placeholder: 'Useless skill', type:'text'}, 
      {name: '', placeholder: 'Adjective', type:'text'}
    ];

    $scope.pronouns = {
      unknown: {
        subject: 'they', possessive: 'their', object: 'them'
      },
      male: {
        subject: 'he', possessive: 'his', object: 'him'
      },
      female: {
        subject: 'she', possessive: 'her', object: 'her'
      },
    };

    $scope.initialize_userReplmnts = function() {
      $scope.userReplmnts = JSON.parse(JSON.stringify($scope.origReplmnts));
      $scope.chosenPronoun = '';
      $scope.userInput = true;
    };

    $scope.initialize_userReplmnts();

    $scope.generateMadLib = function() {
      $scope.userInput = false; 
    };

    $scope.resetMadLib = function() {
      $scope.initialize_userReplmnts();
    };

});
