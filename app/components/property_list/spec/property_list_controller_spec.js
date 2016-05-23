define(['propertyModule', 'propertyListController'], function(){
    beforeEach(module('propertyModule'));
    var ctrl, scope, diferred, url, rootScope, state, data, propertyListController;
    data = {
            "results": [
                {
                    "price": "$526,500",
                    "id": "4"
                }
            ],
            "saved": [
                {
                    "price": "$826,500",
                    "id": "3"
                }
            ]
        }
    beforeEach(angular.mock.inject(function($rootScope, $controller, $q, $http){
        rootScope = $rootScope;
        ctrl = $controller;
        scope = $rootScope.$new();
        // surveyListService = {getSurveyList: function() {}};
        propertyListService = jasmine.createSpyObj('propertyListService', ['getItems']);
        propertyListService.state = {isLoading: true, 
                                    error: ''};

        diferred = $q.defer();

        propertyListService.getItems.andReturn(diferred.promise);

        propertyListController = ctrl('propertyListController', {
            propertyListService: propertyListService,
            $state: state,
            $rootScope: rootScope
        });
    }));

    describe('#porpertyListController', function(){
        it('should state have intial values', function () {
            expect(propertyListController.state).toEqual(propertyListService.state);
            
            diferred.resolve();
            rootScope.$apply();

            expect(propertyListService.getItems).toHaveBeenCalled();
            expect(propertyListController.propertyList).toEqual(data);
        });
    });

});