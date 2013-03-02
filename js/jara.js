(function(){
    // Hello world
    var Jara = {}, Photos={};
    var PHOTOS = 'https://graph.facebook.com/518915304826913/photos';

    function fixHeight(){
        $('#welcome').css('height', $(window).height());
        $('#welcome').css('visibility','visible');
        //console.log("Height = " + $(window).height());
    }

    //data-dojo-attach-event="" onclick="$.scrollTo( 'a[name=menu]', 800 );"
    //console.log("Click " + anchor);
    //offset: Number or hash {left: x, top:y }. This will be added to the final position(can be negative).
    function initScroll(){
        $('[data-scroll]').click(function(e){
            $('#header a').removeClass('active');
            if($(this).parents('#nav').length){
                $(this).addClass('active');
            }

            var anchor = $(this).attr('data-scroll');
            e.preventDefault();
            
            var top = -200;
            if('photos' === anchor){
                top = -70;
            }
            $.scrollTo('a[name=' + anchor + ']', 800, {'offset': {'left':0, 'top':top}});
        });
    }

    Photos.init = function(){
        var callback = function(data){
            var node = $('#slides > div');
            var arr = data["data"];
            for(var i=0;i<arr.length;i++){
                var item = arr[i], buf=[];
                //var img = Photos.searchWidth(item, 720);
                var img = Photos.searchWidth(item, 960);
                buf[0] = '<div><img src="';
                buf[1] = img['source'];
                buf[2] = '" width="';
                buf[3] = img['width'];
                buf[4] = '" height="';
                buf[5] = img['height'];
                buf[6] = '" alt=""/></div>';
                node.append(buf.join(''));
            }


            $('#slides').show().slides({
                bigTarget:true, 
                play: 4000,
                pause: 2500,
                hoverPause: true,
                slideSpeed:800,
                pagination: false,
                generatePagination: false,
                preload: true,
                preloadImage: '/img/loader.gif',
            });
        };

        $.getJSON(PHOTOS, callback);
    }

    Photos.searchWidth = function(item, width){
        var arr = item['images'];
        for(var i=0;i<arr.length;i++){
            var p = arr[i];
            if(p['width'] === width){
                return p;
            }
        }
        return null;
    }




    //Init
    Jara.init = function(){
        $('#p1').parallax("0%", 0.3);
        $('#p2').parallax("0%", 0.2);
        $('#p3').parallax("0%", 0.2);

        initScroll();
        fixHeight();
        $(window).resize(fixHeight);


        var rest = (new Date().getDay() % 2)+1;
        var rest = Math.floor((Math.random()*4)+1);
        //console.log(rest);
        $('#welcome').addClass('var'+rest);
        Photos.init();
    };

    if(!window.Jara){
        window.Jara = Jara;
    }
})();




/*
 $(window).scroll(function(){
 var scrollTop = $(window).scrollTop();
 var windowHeight = $(window).height();

 if(windowHeight - scrollTop < 300){
 //$('#header').css('background','rgba(60,0,0,1)');
 } else {
 //$('#header').css('background','none');
 }
 });


<!--
        $('#intro').parallax("50%", 0.1);
    $('#second').parallax("50%", 0.1);
    $('.bg').parallax("50%", 0.4);
    $('#third').parallax("50%", 0.3);


    function stretch_portal_content() {
    if( $(window).height() > $('body').height() ) {
        $( '#portal-content' ).height(
            $(window).height() - ( $('body').height() - $('#portal-content').height() )
        );
    }
}-->
    */


/*
https://graph.facebook.com/518915304826913/photos
http://maps.googleapis.com/maps/api/staticmap?center=51.16150,%205.29631&zoom=15&size=600x400&maptype=roadmap&sensor=true&markers=color:red%7Clabel:J%7C51.16290,%205.29631
http://maps.googleapis.com/maps/api/staticmap?center=51.16150,%205.29631&zoom=15&size=600x400&maptype=roadmap&sensor=true&markers=color:red%7Clabel:J%7C51.16290,%205.29631&format=png
https://developers.google.com/maps/documentation/staticmaps/
*/

        /*
        {
   "data": [
      {
         "id": "518921831492927",
         "from": {
            "category": "Restaurant/cafe",
            "name": "Steakhouse Jara",
            "id": "508738035844640"
         },
         "picture": "http://photos-g.ak.fbcdn.net/hphotos-ak-ash3/601594_518921831492927_2013890654_s.jpg",
         "source": "http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash3/s720x720/601594_518921831492927_2013890654_n.jpg",
         "height": 478,
         "width": 720,
         "images": [
            {
               "height": 1360,
               "width": 2048,
               "source": "http://sphotos-g.ak.fbcdn.net/hphotos-ak-frc1/858391_518921831492927_2013890654_o.jpg"
            },
            {
               "height": 637,
               "width": 960,
               "source": "http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash3/601594_518921831492927_2013890654_n.jpg"
            },
            {
               "height": 478,
               "width": 720,
               "source": "http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash3/s720x720/601594_518921831492927_2013890654_n.jpg"
            },
            {*/