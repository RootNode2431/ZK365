"auto";
var subPath = "answer/answer.txt";
// 题库文件路径
var readFile = open(subPath);
// 打开目标路径
var text = readFile.read();
// 查看文件
var textData = text.split("\n");
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

if (textData.length === 30) {
    print("题库校验成功！")
} else {
    print("题库有误！")
    engines.stopAll()
}

var img = captureScreen();
images.saveImage(img, "img/new.png");
var screenImage = images.read("img/new.png");
var key = []
key[0] = images.read("img/A.png");
key[1] = images.read("img/B.png");
key[2] = images.read("img/C.png");
key[3] = images.read("img/D.png");
key[4] = images.read("img/E.png");
var point = [];
danxuan()
duoxuan()

for (var n = 0; n <= 3; n++) {
    key[n].recycle();
}


function danxuan() {
    var temp = 0;
    for (var i = 0; i < 20; i++) {
        img = captureScreen();
        images.saveImage(img, "img/new.png");
        screenImage = images.read("img/new.png");
        print(i + 1, textData[i])
        switch (textData[i]) {
            case 'A':
                point[0] = key[0];
                temp = 50; 
                break;
            case "B":
                point[0] = key[1];
                temp = 50;
                break;
            case "C":
                point[0] = key[2];
                temp = 50;
                break;
            case "D":
                point[0] = key[3];
                temp = 50;
                break;
        }
        
        point[1] = findImage(screenImage, point[0]);
        sleep(500)
        if(point[1] != null){
            click(120, point[1].y + temp);
            print(point[1].y + temp)
        }else{
            print("程序异常")
            toast("程序异常")
        }
        sleep(500);
        img.recycle();
        screenImage.recycle();
    }

}



function duoxuan() {
    var clickNum = [];
    for (var j = 20; j < textData.length; j++) {
        img = captureScreen();
        images.saveImage(img, "img/new.png");
        screenImage = images.read("img/new.png");
        clickNum = textData[j].split("");
        print(j + 1, textData[j])
        for(var n = 0;n<clickNum.length;n++){
            switch (clickNum[n]) {
                case 'A':
                    point[0] = key[0];
                    temp = 20; 
                    break;
                case "B":
                    point[0] = key[1];
                    temp = 20;
                    break;
                case "C":
                    point[0] = key[2];
                    temp = 20;
                    break;
                case "D":
                    point[0] = key[3];
                    temp = 20;
                    break;
                case "E":
                    point[0] = key[4]
                    temp = 20;
                    break;
            }
            point[1] = findImage(screenImage, point[0]);
            sleep(500)
            if(point[1] != null){
                click(120, point[1].y + temp);
                print(point[1].y + temp)
            }else{
                print("程序异常")
                toast("程序异常")
            }
        }
        gesture(200, [900, 1300], [200, 1300]);
        sleep(500);
        img.recycle();
        screenImage.recycle();
    }

}
