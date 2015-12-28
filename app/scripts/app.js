'use strict';

var app = angular
    .module('junyusSiteApp', [
        'ngAnimate',
        'ngRoute',
        'ngTouch',
    ])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                cache: false,
                templateUrl: 'views/main.html',
                controller: 'worksLayout',
                controllerAs: 'main'
            })
            .when('/hummer', {
                templateUrl: 'views/hummer.html',
                // controllerAs: 'about'
            })
            .when('/oneArm', {
                templateUrl: 'views/oneArm.html',
                //controller: 'worksLayout',
                // controllerAs: 'about'
            })
            .when('/overHUST', {
                templateUrl: 'views/overHUST.html',
            })
            .when('/uniqueStudio', {
                templateUrl: 'views/unique.html',
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    })
    .controller('worksLayout', function($scope, $rootScope) {
        $rootScope.down=false;
        $rootScope.isTran=false;
        if (angular.element(window).scrollTop() != 0) {
            $rootScope.down = true;
        }
        $scope.worksData = [
            {
                left: "../images/main/Hummer.png",
                right: {
                    title: 'Hummer',
                    content: 'Hummer is a game application that aims to help people' +
                    'sing better.In the game, players sing through the microphone to control' +
                    'a hummingbird and navigate through adventurous terrains.'
                },
                url: '/hummer'
            },
            {
                left: "../images/main/OneArm.png",
                right: {
                    title: 'OneArm',
                    content: 'OneArm is a wearable armband  that allows people control computer' +
                    ' using gesture control. With the software client, users are able to take control' +
                    ' of applications on computer or other devices wit h five basic gestures ' +
                    'and their specific combinations'
                },
                url: '/oneArm'
            },
            {
                left: "../images/main/HeadringApp.png",
                right: {
                    title: 'Visualizing Headring',
                    content: 'Visualizing Headring is a wearable auxiliary product that aids the blind to ' +
                    'avoid obstacles and navigate to a given destination. With vibration from the headring' +
                    ' and voice navigation from the mobile application, users are guided within the given' +
                    ' route to the destination. '
                }
            },
            {
                left: "../images/main/UniqueWeb.png",
                right: {
                    title: 'Unique Studio',
                    content: 'The website demonstrates an overview of Unique Studio, a pioneering student-run' +
                    ' studios in HUST. The website allows people who are interested in the Studio to get to know' +
                    ' more about its history, people, achievements, and updates.'
                },
                url: '/overHUST'
            },
            {
                left: "../images/main/OverHUSTpng.png",
                right: {
                    title: 'OverHust',
                    content: 'OverHust is a mobile application that utilizes street view maps to help users ' +
                    'navigate routines on campus.With highly detailed panoramic street-level photos, users are' +
                    ' better able to find the destinations,or just take a visual tour on campus within the app. '
                },
                url: '/overHUST'
            }
        ];
        $scope.unique = [
            {
                img: "../images/main/UniqueStudioPic.png",
                intro: {
                    title: "Unique Studio",
                    content: "hahah ahaha hahaha hahahh ahahahahah ahhahaha hahaha hhaha" +
                    "haha hahah ahah hahahah ahahh ah ahahah hahahah hahahahhaha hahahha" +
                    "hahah ahahhah ahahahha lha hahahah hahahaha hahhaha hahhahah"

                }
            },
            {
                img: "../images/main/Design.png",
                intro: {
                    title: "Unique Studio",
                    content: "hahahah ahahah ahahaha lhhaha lhahahahahha lhahahah ahahhaha" +
                    "hahah ahahah ahhahahah ahahhaha hahahhahaha hhahahahha hahahahha" +
                    "hahahkk iahah hahahahahh ahahah ahahha lhahahah lahhahah ahhahah"

                }
            },
            {
                img: "../images/main/HackDay.png",
                intro: {
                    title: "Unique Studio",
                    content: "hahahah ahahah ahahaha lhhaha lhahahahahha lhahahah ahahhaha" +
                    "hahah ahahah ahhahahah ahahhaha hahahhahaha hhahahahha hahahahha" +
                    "hahahkk iahah hahahahahh ahahah ahahha lhahahah lahhahah ahhahah"

                }
            }

        ];
    });
