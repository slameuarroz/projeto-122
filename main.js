function setup() {
  canvas = createCanvas(300, 300);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("mobileNet",modelLoad);
}
function modelLoad(){
  console.log("modelo carregado com sucesso");
}
function draw(){
  image(video,30,30,300,300);
  classifier.classify(video,gotResult);
}
var previsão = "";
function gotResult(error,results){
  if(error){
    console.error(error)
  }else{
    if((results[0].confidence > 0.5) && (previsão != results[0].label)){
      previsão=results[0].label;
      document.getElementById("ResultObjectName").innerHTML=results[0].label;
      document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
  }
}