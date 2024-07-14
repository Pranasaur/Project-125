function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }

  function draw()
{
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

function modelLoaded()
{
  console.log('Model Loaded!!!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        wristX = results[0].pose.wrist.x-15;
        wristY = results[0].pose.wrist.y-2;
        console.log("wrist x = " + results[0].pose.wrist.x);
        console.log("wrist y = " + results[0].pose.wrist.y);
    }
}

function draw()
{
  background('#1565C0');
  textSize(55)
  FileList()
  text('Pranav Menon', 50, 300)
}