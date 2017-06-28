//(function() {
//    function HomeCtrl(Room, $uibModal) {
//        this.rooms = Room.all;
//        this.openModal = function() {
//            $uibModal.open({
//                templateUrl: '/templates/modal.html',
//                controller: 'ModalCtrl as modal'
//            });
//        };
//    }
//    
//    angular
//        .module('blocChat')
//        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
//})();

(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        var home = this;
        this.rooms = Room.all;
        home.currentRoom = null; 
        
        home.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        }
        
        home.setCurrentRoom = function(room) {
//            this.currentRoom = room.$value;
            home.currentRoom = room;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
            console.log(home.messages);
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();