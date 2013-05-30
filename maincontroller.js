app.controller("MainController", function($scope){

  // sample 1
  $scope.understand = "I now understand how the scope works!";

  // sample 2
  $scope.inputValue = "";

  // sample 3
  $scope.selectedPerson = 0;
  $scope.selectedGenre = null;
  $scope.people = [
    {
      id: 0,
      name: 'Leon',
      music: [
        'Rock',
        'Metal',
        'Dubstep',
        'Electro'
      ]
    },
    {
      id: 1,
      name: 'Chris',
      music: [
        'Indie',
        'Drumstep',
        'Dubstep',
        'Electro'
      ]
    },
    {
      id: 2,
      name: 'Harry',
      music: [
        'Rock',
        'Metal',
        'Thrash Metal',
        'Heavy Metal'
      ]
    },
    {
      id: 3,
      name: 'Allyce',
      music: [
        'Pop',
        'RnB',
        'Hip Hop'
      ]
    }
  ];

  // sample 4
  $scope.people2 = [
    {
      id: 0,
      name: 'Leon',
      music: [
        'Rock',
        'Metal',
        'Dubstep',
        'Electro'
      ],
      live: true
    },
    {
      id: 1,
      name: 'Chris',
      music: [
        'Indie',
        'Drumstep',
        'Dubstep',
        'Electro'
      ],
      live: true
    },
    {
      id: 2,
      name: 'Harry',
      music: [
        'Rock',
        'Metal',
        'Thrash Metal',
        'Heavy Metal'
      ],
      live: false
    },
    {
      id: 3,
      name: 'Allyce',
      music: [
        'Pop',
        'RnB',
        'Hip Hop'
      ],
      live: true
    }
  ];

  // sample 6
  $scope.newPerson = null;
  $scope.addNew = function() {
    if ($scope.newPerson != null && $scope.newPerson != "") {
      $scope.people2.push({
        id: $scope.people2.length,
        name: $scope.newPerson,
        live: true,
        music: []
      });
    }
  }
});