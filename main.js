//web speech api
var SpeechRecognition=window.webkitSpeechRecognition;
//for taking new speech
var recognition=new SpeechRecognition();

//for starting to record selfie
function start() {
    document.getElementById("speechtextarea").innerHTML="";
    recognition.start() //starting to convert speech into text.
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("speechtextarea").innerHTML=content;
    if (content=="take my selfie") {
        console.log("taking selfie");
        speak();
    }
}

function speak() {
    var synthesis=window.speechSynthesis;
    speechdata="taking the selfie in 5 4 3 2 1 Vegan Cheese!!!! hahahhahahahahaha";
    var utter=new SpeechSynthesisUtterance(speechdata);
    synthesis.speak(utter);
    Webcam.attach(camera);
    setTimeout(function() {
    take_snapshot();
    save();       
    }
    ,5000
    );

}
camera=document.getElementById("webcam");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });

  function take_snapshot() {
      Webcam.snap(function (data_uri) {
          document.getElementById("result").innerHTML='<img id="selfieimg" src="'+data_uri+'"/>';          
      });
  }

  function save(){
       link=document.getElementById("link");
       image=document.getElementById("selfieimg").src;
      link.href=image;
      link.click();
  }