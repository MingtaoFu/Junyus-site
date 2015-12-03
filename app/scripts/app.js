'use strict';

/**
 * @ngdoc overview
 * @name junyusSiteApp
 * @description
 * # junyusSiteApp
 *
 * Main module of the application.
 */
angular
    .module('junyusSiteApp', [
        'ngAnimate',
        'ngRoute',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/body', {
                templateUrl: 'views/body.html',
                controller: 'worksLayout',
                // controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('worksLayout', function($scope) {
        $scope.worksData = [
            {
                left: "../images/main/Hummer.png",
                right: {
                    title: 'Hummer',
                    content: 'Hummer is a game application that aims to help people' +
                    'sing better.In the game, players sing through the microphone to control' +
                    'a hummingbird and navigate through adventurous terrains.'
                }
            },
            {
                left: "../images/main/OneArm.png",
                right: {
                    title: 'OneArm',
                    content: 'OneArm is a wearable armband  that allows people control computer' +
                    ' using gesture control. With the software client, users are able to take control' +
                    ' of applications on computer or other devices wit h five basic gestures ' +
                    'and their specific combinations'
                }
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
                left: "../images/main/OverHUSTpng.png",
                right: {
                    title: 'OverHust',
                    content: 'OverHust is a mobile application that utilizes street view maps to help users ' +
                    'navigate routines on campus.With highly detailed panoramic street-level photos, users are' +
                    ' better able to find the destinations,or just take a visual tour on campus within the app. '
                }
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
