Webcam.set({
    width:350,
    height:300,
    image_font : 'png',
    png_quality:90
});

camera = dowcument.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) { 
        document.getElementById("reasult").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'>
    });
}
    console.log('m15 version', m15.version);