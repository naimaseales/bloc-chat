(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.create = function(name) {
            Room.addRoom(name);
            $uibModalInstance.close();
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();