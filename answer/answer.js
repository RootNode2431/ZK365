"auto";
var indexT = 0
var indexC = 0
var type = ["阶段","综合"]
var CLASS = ["国际贸易","财务管理","组织行为学"]
var subPath = ["zk365/"+CLASS[indexC]+type[indexT]+"单选题.txt","zk365/"+CLASS[indexC]+type[indexT]+"多选题.txt"];
// 题库文件路径
var readFile = []
readFile[0] = open(subPath[0]);
readFile[1] = open(subPath[1]);
// 打开目标路径
var text = [];
text[0] = readFile[0].read();
text[1] = readFile[1].read();
// 查看文件
var textData = []
var subjectS = []
var subjectM = []
var answerS = []
var answerM = []
for (var i = 0; i < text[0].split("\n").length; i++) {
    var temp01 = text[0].split('\n');
    subjectS[i] = temp01[i].split("//")[0];
    answerS[i] = temp01[i].split("//")[1];

}
for(var j=0;j<text[1].split("\n").length;j++){
    var temp02 = text[1].split('\n');
    subjectM[j] = temp02[j].split("//")[0]
    answerM[j] = temp02[j].split("//")[1]

}

right()
sleep(500)
SubGet()
// 将txt文本存入数组中
// 读取文件
// SubGet()
readFile[0].close();
readFile[1].close();

function clickNum(letter) {
    var number = 0
    var clickTxt = open("answer.txt");
    var clickData = clickTxt.read().split("\n");
    print(clickData)
    for (let i = 0; i < clickData.length; i++) {
        if (letter === clickData[i]) {
            number += 1
        }
    }
    return number
}


function Write(letter) {
    var writeFile = open("answer/answer.txt", "w");
    var readClick = open("answer/answer.txt");
    var clickText = readClick.read();
    print(letter)
    writeFile.writeline(clickText + letter);
    writeFile.close();
}


function SubGet() {
    var subjectData = id("tv_question_content").findOne();
    var subGet = null
    sleep(300)
    // 阻塞1秒
    var len = subjectData.text().split('.').length;
    switch (len) {
        case 2: subGet = subjectData.text().split('.')[1].replace(" ", ""); break;
        case 3: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", ""); break;
        case 4: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", "") + "." + subjectData.text().split('.')[3].replace(" ", ""); break;
        case 5: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", "") + "." + subjectData.text().split('.')[3].replace(" ", "") + "." + subjectData.text().split('.')[4].replace(" ", ""); break;
        case 6: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", "") + "." + subjectData.text().split('.')[3].replace(" ", "") + "." + subjectData.text().split('.')[4].replace(" ", "") + "." + subjectData.text().split('.')[5].replace(" ", ""); break;
    }
    if (subGet === subjectS[subjectS.indexOf(subGet)]) {
        sleep(500)
        var letter01 = answerS[subjectS.indexOf(subGet)]
        Write(letter01)
        print("获取成功")
    } else if(subGet === subjectM[subjectM.indexOf(subGet)]){
        var letter02 = answerM[subjectM.indexOf(subGet)]
        Write(letter02)
        print("获取成功")
    }else{
        Write(null)
        print("获取失败")
    }

}

function right() {
    gesture(200, [900, 1300], [200, 1300]);
}
// 向右滑动

