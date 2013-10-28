var waiting = true;
var imgURL;

window.onload = function () {
    window.opener.postMessage({key1: 'val1', key2: 'val2'}, "*");
    setTimeout(function(){window.close();}, 1000);

    /*
    var width = 580;
    var height = 440;
    var cGaze = new camgaze.Camgaze(width, height, "mainCanvas");
    var faceDetector = new camgaze.CVUtil.HaarDetector(
        camgaze.cascades.frontalface,
        width,
        height
    );
    var drawer = new camgaze.drawing.ImageDrawer();

    var frameOp = function (image_data, video) {

        var faceRects = faceDetector.detectObjects(
            video,
            1.1,
            1
        );

        if (!imgURL && faceRects.length == 1 && !waiting) {
            var c = document.getElementById("mainCanvas");
            var m_ctx = c.getContext("2d");

            var wholedata = m_ctx.getImageData(0, 0, width, height);
            var color_total = 0;
            for(var i = 0; i < wholedata.data.length; i += 4) {
                color_total += wholedata.data[i];
                color_total += wholedata.data[i + 1];
                color_total += wholedata.data[i + 2];
            }

            color_total *= 4/(3*wholedata.data.length);

            if (color_total > 40) {
                imgURL = c.toDataURL("image/jpeg");
                $("#statusNotifier").html("Photo taken");

                var img = new Image();
                img.src = imgURL;

                var token = $('meta[name="csrf-token"]').attr('content');

                $.ajax({
                    url: "/biauthorize",
                    headers: {
                        "X-CSRF-Token": token
                    },
                    type: "POST",
                    data: {image: imgURL.substring(23)}
                }).done(function( data ) { 
                    ba_data = eval(data);
                    if (ba_data.ba_verified) {
                        window.opener.postMessage("JSON.stringify(ba_data)", "*");
                        setTimeout(function(){window.close();}, 1000);    
                    } else {
                        alert("Please try again!");
                        imgURL = null;
                    }
                });

                if (imgURL != null) {
                    var prev_c = document.getElementById("previewCanvas");
                    var ctx = prev_c.getContext("2d");
                    ctx.drawImage(img, 0, 0, width / 4, height / 4);
                }                            
            }
        }

        if (waiting) {
            waiting = false;
            $("#statusNotifier").html("No face found yet");
        }

        return image_data;
    };

    cGaze.setFrameOperator(frameOp);

    */
}