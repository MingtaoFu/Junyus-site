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
            .when('/freeToGo', {
                templateUrl: 'views/freeToGo.html',
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
                },
                url: '/freeToGo'
            },
            {
                left: "../images/main/UniqueWeb.png",
                right: {
                    title: 'Unique Studio',
                    content: 'The website demonstrates an overview of Unique Studio, a pioneering student-run' +
                    ' studios in HUST. The website allows people who are interested in the Studio to get to know' +
                    ' more about its history, people, achievements, and updates.'
                },
                url: '/uniqueStudio'
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
                    content: "In 2014 – 2015, I served as the Director of Unique Studio, a student-run studio at HUST" +
                    " that focuses on Internet technologies. The Unique Studio consists of 8 different groups of over 100 " +
                    "undergraduates. During my term, we had won several awards in national and international competitions." +
                    " We also launched 10+ Internet products, two of which had successfully turned into startups and" +
                    " raised 1 million RMB funds separately."
                }
            },
            {
                img: "../images/main/Design.png",
                intro: {
                    title: "Design Team",
                    content: "In 2013 – 2014, I served as the Director of Design Team in Unique Studio. During my term," +
                    " I led a team of 12 student designers to be responsible for the design of 10+ products. I organized" +
                    " regular meetups, workshops and salons in which people shared ideas concerning different topics" +
                    " on design and brainstormed creative solutions to the topic-related issues. "
                }
            },
            {
                img: "../images/main/HackDay.png",
                intro: {
                    title: "Unique Hack Day",
                    content: "I directed one of the largest college hackathon in China, Unique Hack Day, aiming to " +
                    "bring such an event that inspires people with a newfound desire to change the society to China’s" +
                    " college students. We successfully recruited 20 sponsor companies to support our event and" +
                    " invited 150 students out of over 700 applicants from China, U.S., Russia and India to participate."
                }
            }

        ];
    });
