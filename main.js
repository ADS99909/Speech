var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Result=event.results[0][0].transcript;
    console.log(Result)
    document.getElementById("textbox").innerHTML=Result;
    if (Result == "take my selfie"){
     console.log("taking_selfie-----------------------------");
        speak();
    }
    
}
function speak(){
    var Speech=window.speechSynthesis;

    var speak_Word="Taking your selfie in 5 seconds";
    var say=new SpeechSynthesisUtterance(speak_Word);
    Speech.speak(say);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="pic" src="'+data_uri+'">';

    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("pic").src;
    link.href=image;
    link.click();
}