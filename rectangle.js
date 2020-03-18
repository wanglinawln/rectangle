/*global rectangle,validate,isLegalKey:true*/
$(function(){
    //get dom ele
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    //calc button click event
    $btnCal.click(function(){
        //去掉浮点函数
        function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        }
        //validate if error return
        if(!validate('#width')||!validate('#height')) return;
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        // var p=roundFractional(2*(w+h),2),
        //     a=roundFractional(w*h,2);
        var rect =rectangle();
        var p=roundFractional(rect.perimeter(w,h),2),
            a=roundFractional(rect.area(w,h),2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });

    $width.focusout(function(){
        if(!validate('#width')){
            $width.select();
        }
    });
    $height.focusout(function(){
        if(!validate('#height')){
            $height.select();
        }
    });

    $width.keypress(function(e) {
        if(!isLegalKey(e,e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });
    $height.keypress(function(e) {
        if(!isLegalKey(e,e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });
});