angular.module('app.controllers', ['ngCordova'])

.controller('profileCtrl', ['$scope', '$stateParams', '$state', '$cordovaCamera',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {


  $scope.login = function() {
      $state.go('tabsController');
  }


}])


.controller('AddCtrl', function($scope, $state, $cordovaCamera ) {
var change = false;

  // Returns all photos in app
  $scope.caption
  $scope.getPhoto = function(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
      destinationType: destinationType.FILE_URI,
      sourceType: source });


  }


  $scope.$on('$ionicView.loaded', function(event) {
    if (change)
    document.getElementById("home-card1").style.display = "block";
  });
  $scope.change = function() {

  }


  $scope.takePhoto = function() {

    $cordovaCamera.getPicture({
      quality : 75,
      //destinationType : Camera.DestinationType.DATA_URL,
      //sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      //encodingType: Camera.EncodingType.JPEG,
      targetWidth: 375,
      targetHeight: 350,
      //popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    }).then(function(imageData) {
      console.log(imageData);
      $scope.imgURI = imageData;
      change = true;
      document.getElementById("name").value= 'Hal Marz';
      document.getElementById("name").placeholder = '';
      document.getElementById("company").value= 'Google';
      document.getElementById("company").placeholder = '';
      document.getElementById("email").value= 'halm@google.com';
      document.getElementById("email").placeholder = '';
      document.getElementById("number").value= '650-253-0000';
      document.getElementById("number").placeholder = '';

      // alert(imageData)
    }, function(err) {
      alert("An error occurred: " + err)
    });

  }
})
.controller('addCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('eventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('newEventCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('newFollowUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('eventDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('followUpDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
