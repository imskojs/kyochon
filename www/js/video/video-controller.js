angular.module('kyoChonApp')
.controller('VideoController', [

'VideoModel', 

function (VideoModel){
    var V = this;

    V.currentVideo = VideoModel.currentVideo;
    V.videoLists = VideoModel.videoLists;






// END
}]);