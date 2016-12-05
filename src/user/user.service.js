(function () {
    "use strict";

    angular.module('user')
    .service('UserService', UserService);

    UserService.$inject = ["$q"];
    function UserService($q) {
        var service = this;
        var user_info = {};
        var has_registered = false;

        service.RegisterUser = function (info) {
            var def = $q.defer();
            user_info = info;
            has_registered = true;
            def.resolve(has_registered);
            return def.promise;
        };

        service.GetUser = function () {
            var def = $q.defer();
            def.resolve(user_info);
            return def.promise;
        };

        service.IsRegistered = function () {
            var def = $q.defer();
            def.resolve(has_registered);
            return def.promise;
        };
    }
})();
