/* exported rectangle*/
/*eslint linebreak-style: ["error", "unix"]*/

function rectangle(){
    return {
        'perimeter':function (width,height){
            return 2*(width+height);
        },
        'area':function(width,height){
            return width*height;
        }
    };
};