//        var imageDataIN = context.getImageData( imageX, imageY, imageWidth, imageHeight );
//        var DataIN = imageDataIN.data;
//----------------------------------------------------------------
//        // iterate over all pixels
//        for( var i = 0, n = DataIN.length; i < n; i += 4 ) {
//            var   red = DataIN[ i ];
//            var green = DataIN[ i + 1 ];
//            var  blue = DataIN[ i + 2 ];
//            var alpha = DataIN[ i + 3 ];
//        }
//----------------------------------------------------------------
//        // iterate over all pixels based on x and y coordinates
//
//        // loop through each column
//        for( var y = 0; y < imageHeight; y++ ) {
//          // loop through each column
//            for( var x = 0; x < imageWidth; x++ ) {
//                var   red = DataIN[ ( ( imageWidth * y ) + x ) * 4 ];
//                var green = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 1 ];
//                var  blue = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 2 ];
//                var alpha = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 3 ];
//            }
//        }
//----------------------------------------------------------------
var myWidth = 256;
var myHeight = 256;
var myImage;
var myCanvas1, myCanvas2, myCanvas3, myCanvas4, myCanvas5, myCanvas6, myCanvas7, myCanvas8;
var myContext1, myContext2, myContext3, myContext4, myContext5, myContext6, myContext7, myContext8;

function updateCanvas( ) {
    myCanvas1 = document.getElementById( 'myCanvas1' );
    myContext1 = myCanvas1.getContext( '2d' );

    myCanvas2 = document.getElementById( 'myCanvas2' );
    myContext2 = myCanvas2.getContext( '2d' );

    myCanvas3 = document.getElementById( 'myCanvas3' );
    myContext3 = myCanvas3.getContext( '2d' );

    myCanvas4 = document.getElementById( 'myCanvas4' );
    myContext4 = myCanvas4.getContext( '2d' );

    myCanvas5 = document.getElementById( 'myCanvas5' );
    myContext5 = myCanvas5.getContext( '2d' );

    myCanvas6 = document.getElementById( 'myCanvas6' );
    myContext6 = myCanvas6.getContext( '2d' );

    myCanvas7 = document.getElementById( 'myCanvas7' );
    myContext7 = myCanvas7.getContext( '2d' );

    myCanvas8 = document.getElementById( 'myCanvas8' );
    myContext8 = myCanvas8.getContext( '2d' );

    myImage = new Image( );

    setBitmap( 'img/lena256.png' );

    myCanvas1.style.margin = '4px'
    myCanvas2.style.margin = '4px'
    myCanvas3.style.margin = '4px'
    myCanvas4.style.margin = '4px'
    myCanvas5.style.margin = '4px'
    myCanvas6.style.margin = '4px'

    //***********************************************************************

    myCanvas1.onmousemove = function( event ) {
        description( event, myContext1 );
    }

    myCanvas1.onclick = function( event ) {   
        if ( event.ctrlKey ) {
            myString = 'No of colors=' + colorCounter( event, myContext1 );
            myContext7.fillStyle = 'black';
            myContext7.fillText( myString, 530, 18 );
            myContext7.font = "16px DejaVu Sans, Verdana";
        }
    } 
    //-----------------------------------------------------------------------

    myCanvas2.onmousemove = function( event ) {
        description( event, myContext2 );
    }

    myCanvas2.onclick = function( event ) {
        if ( event.ctrlKey ) {
            myString = 'No of colors=' + colorCounter( event, myContext2 );
            myContext7.fillStyle = 'black';
            myContext7.fillText( myString, 530, 18 );
            myContext7.font = "16px DejaVu Sans, Verdana";
        }
    }
    //-----------------------------------------------------------------------
    myCanvas3.onmousemove = function( event ) {
        description( event, myContext3 );
    }

    myCanvas3.onclick = function( event ) {
        if ( event.ctrlKey ) {
            myString = 'No of colors=' + colorCounter( event, myContext3 );
            myContext7.fillStyle = 'black';
            myContext7.fillText( myString, 530, 18 );
            myContext7.font = "16px DejaVu Sans, Verdana";
        }
    }
    //-----------------------------------------------------------------------

    myCanvas4.onmousemove = function( event ) {
        description( event, myContext4 );
    }
    
    myCanvas4.onclick = function( event ) {
        if ( event.ctrlKey ) {
            myString = 'No of colors=' + colorCounter( event, myContext4 );
            myContext7.fillStyle = 'black';
            myContext7.fillText( myString, 530, 18 );
            myContext7.font = "16px DejaVu Sans, Verdana";
        }
    }
    //-----------------------------------------------------------------------

    myCanvas5.onmousemove = function( event ) {
        description( event, myContext5 );
    }

    myCanvas5.onclick = function( event ) {
        if ( event.ctrlKey ) {
            myString = 'No of colors=' + colorCounter( event, myContext5 );
            myContext7.fillStyle = 'black';
            myContext7.fillText( myString, 530, 18 );
            myContext7.font = "16px DejaVu Sans, Verdana";
        }
    }
    //-----------------------------------------------------------------------

    myCanvas6.onmousemove = function( event ) {
        description( event, myContext6 );
    }

    myCanvas6.onclick = function( event ) {
        if ( event.ctrlKey ) {
            myString = 'No of colors=' + colorCounter( event, myContext6 );
            myContext7.fillStyle = 'black';
            myContext7.fillText( myString, 530, 18 );
            myContext7.font = "16px DejaVu Sans, Verdana";
        }
    }
    //***********************************************************************

    function description ( event, myContext ) {
        var x = event.offsetX;
        var y = event.offsetY;
        var pixel = myContext.getImageData( x, y, 1, 1 );
        var data = pixel.data;
        var rgba = 'rgba(' + data[ 0 ] + ', ' + data[ 1 ] + ', ' + data[ 2 ] + ', ' + ( data [ 3 ] / 255 ) + ')';
        myCanvas8.style.backgroundColor = rgba;
        myContext7.fillStyle = "#CCC";
        myContext7.clearRect( 0, 0, myCanvas7.width, myCanvas7.height );
        var myString = ' x=' + x + ', y=' + y;
        myContext7.fillStyle = 'white';
        myContext7.fillText( myString, 5, 18 );
        myString = 'red=' + data[ 0 ]
        myContext7.fillStyle = 'red';
        myContext7.fillText( myString, 170, 18 );
        myString = 'green=' + data[ 1 ]
        myContext7.fillStyle = 'green';
        myContext7.fillText( myString, 265, 18 );
        myString = 'blue=' + data[ 2 ]
        myContext7.fillStyle = 'blue';
        myContext7.fillText( myString, 385, 18 );
        myContext7.font = "16px DejaVu Sans, Verdana";
    };
}
//----------------------------------------------------------------------------

function setBitmap( fileName ) {
    myImage.src = fileName;
    myImage.onload = function ( ) {
        myCanvas1.width = myImage.width;
        myCanvas1.height = myImage.height;
        myContext1.drawImage( myImage, 0, 0, myImage.width, myImage.height );
    }
}

function doDummy( text ) {
    myContext1.fillStyle = "blue";
    myContext1.fillRect( 0, 0, myWidth, myHeight );
    myContext1.fillStyle = 'white';
    myContext1.font = "20px Verdana";
    myContext1.fillText( text, 5, 120 );

}

function doRotate90Axy(){
    for(let xe=0;xe<myWidth;xe++){
       for(let ye=0;ye<myHeight;ye++){
            var pixel=myContext1.getImageData(xe,255-ye,1,1);
            var DataIn = pixel.data;
            var r=DataIn[0];
            var g=DataIn[1];
            var b=DataIn[2];
            myContext2.fillStyle="rgba("+r+","+g+","+b+","+1+")";
            myContext2.fillRect(ye,xe,1,1);
        }
    }
}

function doRotate90AImageData(){
    var myImageDataIN=myContext1.getImageData(0,0,myWidth,myHeight);
    var myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataIn = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for(let i =0;i<myDataIn.length;i+=4){
        var xe=Math.floor(i/4)%myWidth;
        var ye=Math.floor(Math.floor(i/4)/myWidth);
        var desc = myWidth*xe+255-ye;
        myDataOUT[desc*4] = myDataIn[i];
        myDataOUT[desc*4+1] = myDataIn[i+1];
        myDataOUT[desc*4+2] = myDataIn[i+2];
        myDataOUT[desc*4+3] = myDataIn[i+3];

    }
    myContext2.putImageData(myImageDataOUT,0,0);
}

function doRotate90Bxy(){
    for(let xe=0;xe<myWidth;xe++){
        for(let ye=0;ye<myHeight;ye++){
            var pixel=myContext1.getImageData(xe,255-ye,1,1);
            var DataIn = pixel.data;
            var r=DataIn[0];
            var g=DataIn[1];
            var b=DataIn[2];
            myContext3.fillStyle="rgba("+r+","+g+","+b+","+1+")";
            myContext3.fillRect(ye,xe,1,1);
        }
    }
}

function doRotate180Axy(){
    for(let xe=0;xe<myWidth;xe++){
        for(let ye=0;ye<myHeight;ye++){
            var pixel=myContext1.getImageData(xe,ye,1,1);
            var DataIn = pixel.data;
            var r=DataIn[0];
            var g=DataIn[1];
            var b=DataIn[2];
            myContext4.fillStyle="rgba("+r+","+g+","+b+","+1+")";
            myContext4.fillRect(xe,255-ye,1,1);
        }
    }
}
function doRotate270Axy(){
    for(let xe=0;xe<myWidth;xe++){
        for(let ye=0;ye<myHeight;ye++){
            var pixel=myContext1.getImageData(xe,ye,1,1);
            var DataIn = pixel.data;
            var r=DataIn[0];
            var g=DataIn[1];
            var b=DataIn[2];
            myContext5.fillStyle="rgba("+r+","+g+","+b+","+1+")";
            myContext5.fillRect(ye,255-xe,1,1);
        }
    }
}
function doRotate270Bxy(){
    for(let xe=0;xe<myWidth;xe++){
        for(let ye=0;ye<myHeight;ye++){
            var pixel=myContext1.getImageData(255-xe,ye,1,1);
            var DataIn = pixel.data;
            var r=DataIn[0];
            var g=DataIn[1];
            var b=DataIn[2];
            myContext6.fillStyle="rgba("+r+","+g+","+b+","+1+")";
            myContext6.fillRect(ye,xe,1,1);
        }
    }
}
function doColorChannels(){
    doClear();
    var myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;
    for(var i = 0;i<myDataOUT.length;i=i+4){
        myDataOUT[i+1]=0;
        myDataOUT[i+2]=0;
    }
    myContext4.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i = 0;i<myDataOUT.length;i=i+4){
        myDataOUT[i]=0;
        myDataOUT[i+2]=0;
    }
    myContext5.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i = 0;i<myDataOUT.length;i=i+4){
        myDataOUT[i]=0;
        myDataOUT[i+1]=0;
    }
    myContext6.putImageData(myImageDataOUT,0,0);
}

function doGreyChannels(){
doClear();
    var myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i+1]=myDataOUT[i];
        myDataOUT[i+2]=myDataOUT[i];
    }
    myContext4.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i]=myDataOUT[i+1];
        myDataOUT[i+2]=myDataOUT[i+1];
    }
    myContext5.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i]=myDataOUT[i+2];
        myDataOUT[i+1]=myDataOUT[i+2];
    }
    myContext6.putImageData(myImageDataOUT,0,0);
}

function doTwoChannels(){
    doClear();
    var myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i]=0
    }
    myContext4.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i+1]=0;
    }
    myContext5.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i+2]=0;
    }
    myContext6.putImageData(myImageDataOUT,0,0);

}
function doChannelsCombination(){
    doClear();
    var myImageDataIN=myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataIN= myImageDataIN.data;
    var myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i+1]=myDataIN[i+2];
        myDataOUT[i+2]=myDataIN[i+1];
    }
    myContext2.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i]=myDataIN[i+2];
        myDataOUT[i+1]=myDataIN[i];
        myDataOUT[i+2]=myDataIN[i+1];
    }
    myContext3.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i]=myDataIN[i+2];
        myDataOUT[i+2]=myDataIN[i];
    }
    myContext4.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i]=myDataIN[i+1];
        myDataOUT[i+1]=myDataIN[i+2];
        myDataOUT[i+2]=myDataIN[i];
    }
    myContext5.putImageData(myImageDataOUT,0,0);

    myImageDataOUT=myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    for(var i=0;i<myDataOUT.length;i+=4){
        myDataOUT[i]=myDataIN[i+1];
        myDataOUT[i+1]=myDataIN[i];
    }
    myContext6.putImageData(myImageDataOUT,0,0);
}