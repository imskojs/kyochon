angular.module('kyoChonApp')
.factory('VideoModel', [
function (){
    return {
        videoLists: [
            {
                title: 'Movie 01',
                src: 'assets/videos/test1.mp4',
                subtitle: '엄마의 마음은 몇도 일까요?',
                content: 'Mc는 엄마의 고집과 엄마의 기다림, 엄마의 손길을 담아 음식을 만듭니다.',
                currentBar: ''
            },
            {
                title: 'Movie 02',
                src: 'assets/videos/test2.mp4',
                subtitle: 'subtitle2',
                content: 'Movie 02 content stuff',
                currentBar: ''
            },
            {
                title: 'Movie 03',
                src: 'assets/videos/test3.mp4',
                subtitle: 'subtitle3',
                content: 'Movie 03 content stuff',
                currentBar: ''
            },
            {
                title: 'Movie 04',
                src: 'assets/videos/test4.mp4',
                subtitle: 'subtitle4',
                content: 'Movie 04 content stuff',
                currentBar: ''
            },
            {
                title: 'Movie 05',
                src: 'assets/videos/test5.mp4',
                subtitle: 'subtitle5',
                content: 'Movie 05 content stuff',
                currentBar: ''
            },
        ],
        currentVideo: {
            title: 'Movie 01',
            src: 'assets/videos/test1.mp4',
            subtitle: '엄마의 마음은 몇도 일까요?',
            content: 'Mc는 엄마의 고집과 엄마의 기다림, 엄마의 손길을 담아 음식을 만듭니다.',
            currentBar: ''
        } 
    };
// END
}]);