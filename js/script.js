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
    }
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
function doGrayVersion(){
    doClear();
    doAverageGray(myContext1,myContext4);
    doNTSCGray(myContext1,myContext5);
    doNTSCGrayInteger(myContext1,myContext6);
}
function doAverageGray(contextIN, contextOUT){
    var myImageDataIN = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;

    var myImageDataOUT = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;

    for(var i=0;i<myDataOUT.length;i+=4){
        var myGray = (myDataIN[i]+myDataIN[i+1]+myDataIN[i+2])/3;
        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    contextOUT.putImageData(myImageDataOUT,0,0);
}
function doNTSCGray(contextIN,contextOUT){
    var myImageDataIN = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;

    var myImageDataOUT = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;

    for(var i =0; i<myDataOUT.length;i+=4){
        var myGray = 0.299 * myDataIN[i]+0.587*myDataIN[i+1] + 0.114*myDataIN[i+2]

        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    contextOUT.putImageData(myImageDataOUT,0,0);
}
function doNTSCGrayInteger(contextIN,contextOUT){
    var myImageDataIN = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;

    var myImageDataOUT = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;

    for(var i =0; i<myDataOUT.length;i+=4){
        var myGray = (77 * myDataIN[i]+150*myDataIN[i+1] + 29*myDataIN[i+2])>>8;

        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    contextOUT.putImageData(myImageDataOUT,0,0);
}

function doBinaryVersion(){
    var myImageDataIN = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;

    var myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;

    for(var i=0;i<myDataOUT.length;i+=4){
        var myGray = 0.299 * myDataIN[i]+0.587*myDataIN[i+1] + 0.114*myDataIN[i+2];

        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    myContext2.putImageData(myImageDataOUT,0,0);

    myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    var myLevel = 64;
    for(var i=0;i<myDataOUT.length;i+=4){
        myGray = 0.299 * myDataIN[i]+0.587*myDataIN[i+1] + 0.114*myDataIN[i+2];
        (myGray > myLevel) ? myGray = 255 : myGray = 0;
        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    myContext3.putImageData(myImageDataOUT,0,0);


    myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    myLevel = 120;
    for(var i=0;i<myDataOUT.length;i+=4){
        myGray = 0.299 * myDataIN[i]+0.587*myDataIN[i+1] + 0.114*myDataIN[i+2];
        (myGray > myLevel) ? myGray = 255 : myGray = 0;
        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    myContext4.putImageData(myImageDataOUT,0,0);

    myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    myLevel = 200;
    for(var i=0;i<myDataOUT.length;i+=4){
        myGray = 0.299 * myDataIN[i]+0.587*myDataIN[i+1] + 0.114*myDataIN[i+2];
        (myGray > myLevel) ? myGray = 255 : myGray = 0;
        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    myContext5.putImageData(myImageDataOUT,0,0);

    myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    myDataOUT = myImageDataOUT.data;
    myLevel = 35;
    for(var i=0;i<myDataOUT.length;i+=4){
        myGray = 0.299 * myDataIN[i]+0.587*myDataIN[i+1] + 0.114*myDataIN[i+2];
        (myGray > myLevel) ? myGray = 255 : myGray = 0;
        myDataOUT[i]=myGray;
        myDataOUT[i+1]=myGray;
        myDataOUT[i+2]=myGray;
    }
    myContext6.putImageData(myImageDataOUT,0,0);
}
function doQuantization(){
    makeQuantization(myContext2,128);
    makeQuantization(myContext3,32);
    makeQuantization(myContext4,8);
    makeQuantization(myContext5,4);
    makeQuantization(myContext6,2);
}

function makeQuantization(context,value){
    var myCoefficient =255/value;
    var myImageDataIN = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;

    var myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;

    for(var i=0;i<myDataIN.length;i+=4){
        myDataOUT[i]=myCoefficient * (Math.floor(myDataIN[i]/myCoefficient))+myCoefficient/2;
        myDataOUT[i+1]=myCoefficient * (Math.floor(myDataIN[i+1]/myCoefficient))+myCoefficient/2;
        myDataOUT[i+2]=myCoefficient * (Math.floor(myDataIN[i+2]/myCoefficient))+myCoefficient/2;

    }
    context.putImageData(myImageDataOUT,0,0);
}

function doBrighter(){
    makeBrighter(myContext2,15);
    makeBrighter(myContext3,30);
    makeBrighter(myContext4,60);
    makeBrighter(myContext5,90);
    makeBrighter(myContext6,120);

}
function makeBrighter(context, value){
    var myImageDataIN = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;

    var myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;

    for(var i=0;i<myDataIN.length;i+=4){
        if((myDataIN[i]+value)>255 ? myDataOUT[i]=255 : myDataOUT[i]=myDataIN[i]+value);
        if((myDataIN[i+1]+value)>255 ? myDataOUT[i+1]=255 : myDataOUT[i+1]=myDataIN[i+1]+value);
        if((myDataIN[i+2]+value)>255 ? myDataOUT[i+2]=255 : myDataOUT[i+2]=myDataIN[i+2]+value);
        myDataOUT[i+3]=myDataIN[i+3];
    }
    context.putImageData(myImageDataOUT,0,0);

}

function doDarker(){
    makeDarker(myContext2,15);
    makeDarker(myContext3,30);
    makeDarker(myContext4,60);
    makeDarker(myContext5,90);
    makeDarker(myContext6,120);

}
function makeDarker(context, value){
    var myImageDataIN = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;

    var myImageDataOUT = myContext1.getImageData(0,0,myWidth,myHeight);
    var myDataOUT = myImageDataOUT.data;

    for(var i=0;i<myDataIN.length;i+=4){
        if((myDataIN[i]-value)<0? myDataOUT[i]=0 : myDataOUT[i]=myDataIN[i]-value);
        if((myDataIN[i+1]-value)<0 ? myDataOUT[i+1]=0 : myDataOUT[i+1]=myDataIN[i+1]-value);
        if((myDataIN[i+2]-value)<0 ? myDataOUT[i+2]=0 : myDataOUT[i+2]=myDataIN[i+2]-value);
        myDataOUT[i+3]=myDataIN[i+3];
    }
    context.putImageData(myImageDataOUT,0,0);

}

function drawTextColor(context,text,x0,y0,color){
    context.fillStyle=color;
    context.fillText(text,x0,y0);
}
function drawLineColor(context,x0,y0,x1,y1,color){

    context.beginPath();
    context.strokeStyle = color;
    context.setLineDash([1,0]);
    context.lineWidth=1;
    context.moveTo(x0,y0);
    context.lineTo(x1,y1);
    context.stroke();
}
function drawLineColor2(context,x0,y0,x1,y1,color){

    context.beginPath();
    context.strokeStyle = color;
    context.setLineDash([1,0]);
    context.lineWidth=1;
    context.moveTo(x0+0.5,y0);
    context.lineTo(x1+0.5,y1);
    context.stroke();
}
function doBasicAlgorithm(){
    doClear();
    doNTSCGray(myContext1,myContext2);
    doDrawHistogram(myContext2,myContext3,0);
    doDrawHistogram(myContext1,myContext4,1);
    doDrawHistogram(myContext1,myContext5,2);
    doDrawHistogram(myContext1,myContext6,3);


}
function doCumulativeAlgorithm(){
    doClear();
    doNTSCGray(myContext1,myContext2);
    doDrawHistogram3(myContext2,myContext3,0);
    doDrawHistogram3(myContext1,myContext4,1);
    doDrawHistogram3(myContext1,myContext5,2);
    doDrawHistogram3(myContext1,myContext6,3);


}
function doDrawHistogram(contextIN,contextOUT,channel){
    var histogram = [];
    for(let h=0;h<256;h++){
        histogram[h]=0;
    }
    var mycolor;
    switch(channel){
        case 0:
            mycolor='gray';
            break;
        case 1:
            mycolor='red';
            break;
        case 2:
            mycolor='green';
            break;
        case 3:
            mycolor='blue';
            break;
    }
    var myImageDataIN = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;
    for(let i=0;i<myDataIN.length;i+=4){
        switch(channel){
            case 0:
                var gray = Math.floor((77*myDataIN[i]+150*myDataIN[i+1]+29*myDataIN[i+2])>>8);
                    histogram[gray]+=1;
                break;
            case 1:
                histogram[myDataIN[i]]+=1;
                break;
            case 2:
                histogram[myDataIN[i+1]]+=1;
                break;
            case 3:
                histogram[myDataIN[i+2]]+=1;
                break;
        }
    }
    var histogram1Max =0;
    var index1Max=0;
    var histogram2Max =0;
    var index2Max=0;
    var howManyNotZero=0;
    var firstNotZero=0;
    var lastNotZero=255;
    var baseLineY=236;
    for(let i=0;i<256;i++){
        if(histogram[i]>histogram1Max){
            histogram1Max = histogram[i];
            index1Max=i;
        }
        if(histogram[i]>0) howManyNotZero++;
    }
    while(histogram[firstNotZero]===0){firstNotZero++;}

    while(histogram[lastNotZero]===0){lastNotZero--;}

        for(let i=0;i<256;i++) {
            if (histogram[i] > histogram2Max) {
                histogram2Max = histogram[i];
                index2Max = i;
            }
        }

        drawLineColor(contextOUT,0,baseLineY,255,baseLineY,'black');
        drawLineColor(contextOUT,0,baseLineY,0,baseLineY+5,'black');
        drawTextColor(contextOUT,'0',2,baseLineY+14,'black');
        drawLineColor(contextOUT,64,baseLineY,64,baseLineY+5,'black');
        drawTextColor(contextOUT,'64', 66, baseLineY + 14, 'black' );
        drawLineColor(contextOUT,128, baseLineY, 128, baseLineY + 5, 'black' );
        drawTextColor(contextOUT,'128', 130, baseLineY + 14, 'black' );
        drawLineColor(contextOUT,192, baseLineY, 192, baseLineY + 5, 'black' );
        drawTextColor(contextOUT,'192', 194, baseLineY + 14, 'black' );
        drawLineColor(contextOUT,255, baseLineY, 255, baseLineY+ 5, 'black' );
        drawTextColor(contextOUT,'255', 238, baseLineY + 14, 'black' );
        for ( let i=0; i < 256; i++ ){
        drawLineColor( contextOUT, i, baseLineY, i,
            baseLineY - Math.floor( histogram[i] * 128 / histogram1Max ), mycolor );
        }
        drawTextColor(contextOUT,'1 value max: ' + histogram1Max, 2, 12, 'black' );
        drawTextColor(contextOUT,'1 index max: ' + index1Max, 172, 12, 'black' );
        drawTextColor(contextOUT,'2 value max: ' + histogram2Max, 2, 24, 'black' );
        drawTextColor(contextOUT,'2 index max: ' + index2Max, 172, 24, 'black' );
        drawTextColor(contextOUT,'Number of nonzero Levels: ' + howManyNotZero, 2, 36, 'black' );
        drawTextColor(contextOUT,'First nonzero Level: ' + firstNotZero, 2, 48, 'black' );
        drawTextColor(contextOUT,'Last nonzero Level: ' + lastNotZero, 2, 60, 'black' );

}
function doBasicAlgorithm2(){
    doClear();
    doNTSCGray(myContext1,myContext2);
    doDrawHistogram2(myContext2,myContext3,0);
    doDrawHistogram2(myContext1,myContext4,1);
    doDrawHistogram2(myContext1,myContext5,2);
    doDrawHistogram2(myContext1,myContext6,3);


}

function doDrawHistogram2(contextIN,contextOUT,channel){
    var histogram = [];
    for(let h=0;h<256;h++){
        histogram[h]=0;
    }
    var mycolor;
    switch(channel){
        case 0:
            mycolor='gray';
            break;
        case 1:
            mycolor='red';
            break;
        case 2:
            mycolor='green';
            break;
        case 3:
            mycolor='blue';
            break;
    }
    var myImageDataIN = contextIN.getImageData(0,0,myWidth,myHeight);
    var myDataIN = myImageDataIN.data;
    for(let i=0;i<myDataIN.length;i+=4){
        switch(channel){
            case 0:
                var gray = Math.floor((77*myDataIN[i]+150*myDataIN[i+1]+29*myDataIN[i+2])>>8);
                histogram[gray]+=1;
                break;
            case 1:
                histogram[myDataIN[i]]+=1;
                break;
            case 2:
                histogram[myDataIN[i+1]]+=1;
                break;
            case 3:
                histogram[myDataIN[i+2]]+=1;
                break;
        }
    }
    var histogram1Max =0;
    var index1Max=0;
    var histogram2Max =0;
    var index2Max=0;
    var howManyNotZero=0;
    var firstNotZero=0;
    var lastNotZero=255;
    var baseLineY=236;
    for(let i=0;i<256;i++){
        if(histogram[i]>histogram1Max){
            histogram1Max = histogram[i];
            index1Max=i;
        }
        if(histogram[i]>0) howManyNotZero++;
    }
    while(histogram[firstNotZero]===0){firstNotZero++;}

    while(histogram[lastNotZero]===0){lastNotZero--;}

    for(let i=0;i<256;i++) {
        if (histogram[i] > histogram2Max) {
            histogram2Max = histogram[i];
            index2Max = i;
        }
    }

    drawLineColor2(contextOUT,0,baseLineY,255,baseLineY,'black');
    drawLineColor2(contextOUT,0,baseLineY,0,baseLineY+5,'black');
    drawTextColor(contextOUT,'0',2,baseLineY+14,'black');
    drawLineColor2(contextOUT,64,baseLineY,64,baseLineY+5,'black');
    drawTextColor(contextOUT,'64', 66, baseLineY + 14, 'black' );
    drawLineColor2(contextOUT,128, baseLineY, 128, baseLineY + 5, 'black' );
    drawTextColor(contextOUT,'128', 130, baseLineY + 14, 'black' );
    drawLineColor2(contextOUT,192, baseLineY, 192, baseLineY + 5, 'black' );
    drawTextColor(contextOUT,'192', 194, baseLineY + 14, 'black' );
    drawLineColor2(contextOUT,255, baseLineY, 255, baseLineY+ 5, 'black' );
    drawTextColor(contextOUT,'255', 238, baseLineY + 14, 'black' );
    for ( let i=0; i < 256; i++ ){
        drawLineColor2( contextOUT, i, baseLineY, i,
            baseLineY - Math.floor( histogram[i] * 128 / histogram1Max ), mycolor );
    }
    drawTextColor(contextOUT,'1 value max: ' + histogram1Max, 2, 12, 'black' );
    drawTextColor(contextOUT,'1 index max: ' + index1Max, 172, 12, 'black' );
    drawTextColor(contextOUT,'2 value max: ' + histogram2Max, 2, 24, 'black' );
    drawTextColor(contextOUT,'2 index max: ' + index2Max, 172, 24, 'black' );
    drawTextColor(contextOUT,'Number of nonzero Levels: ' + howManyNotZero, 2, 36, 'black' );
    drawTextColor(contextOUT,'First nonzero Level: ' + firstNotZero, 2, 48, 'black' );
    drawTextColor(contextOUT,'Last nonzero Level: ' + lastNotZero, 2, 60, 'black' );

}
