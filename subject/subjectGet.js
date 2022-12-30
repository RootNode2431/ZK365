"auto";
var indexT = 0
var indexC = 1
var type = ["阶段","综合"]
var CLASS = ["国际贸易","财务管理","组织行为学"]
var subPath = ["zk365/"+CLASS[indexC]+type[indexT]+"单选题.txt","zk365/"+CLASS[indexC]+type[indexT]+"多选题.txt"];
// 题库文件路径
var readFile = [];
readFile[0] = open(subPath[0]);
readFile[1] = open(subPath[1]);
// 打开目标路径
var text = [];
text[0] = readFile[0].read();
text[1] = readFile[1].read();
// 查看文件\
var textData = [];
textData[0] = text[0].split('\n');
textData[1] = text[1].split("\n");
var subject = []
subject[0] = textData[0]
subject[1] = textData[1]
var subjectS = []
var subjectM = []
var writeFile = [];
// 将txt文本存入数组中
var temp = [];
for (var i = 0; i < textData[0].length; i++) {
    temp[0] = text[0].split('\n')
    subjectS[i] = temp[0][i].split("//")[0].replace(" ", "")
}

for (var j = 0; j < textData[1].length; j++) {
    temp[1] = text[1].split("\n");
    subjectM[j] = temp[1][j].split("//")[0].replace(" ", "")
}
SubGet()
readFile[0].close();
readFile[1].close();



function Write01() {
    writeFile[0] = open(subPath[0], "w");
    writeFile[0].writelines(subject[0]);
    writeFile[0].close();

}
function Write02() {
    writeFile[1] = open(subPath[1], "w");
    writeFile[1].writelines(subject[1]);
    writeFile[1].close();
}


function SubGet() {
    var subjectData = id("tv_question_content").findOne();
    // 定位题目的id
    var answerData = textContains("正确答案：").findOne();
    var subGet = null
    sleep(300)
    // 阻塞1秒
    var answer = answerData.text().split("：")[1];
    var len = subjectData.text().split('.').length;
    if(answer.length<10){
        switch (len) {
            case 2: subGet = subjectData.text().split('.')[1].replace(" ", ""); break;
            case 3: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", ""); break;
            case 4: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", "") + "." + subjectData.text().split('.')[3].replace(" ", ""); break;
            case 5: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", "") + "." + subjectData.text().split('.')[3].replace(" ", "") + "." + subjectData.text().split('.')[4].replace(" ", ""); break;
            case 6: subGet = subjectData.text().split('.')[1].replace(" ", "") + "." + subjectData.text().split('.')[2].replace(" ", "") + "." + subjectData.text().split('.')[3].replace(" ", "") + "." + subjectData.text().split('.')[4].replace(" ", "") + "." + subjectData.text().split('.')[5].replace(" ", ""); break;
        }
        sleep(300)
        gesture(300, [900, 1300], [200, 1300]);
        //滑动到下一题
        sleep(1000)
        var subResult = [];
        subResult[0] = subjectS.indexOf(subGet);
        subResult[1] = subjectM.indexOf(subGet);
        print(subResult[0], subResult[1], answer, answer.length)
        if (subResult[0] === -1 && subResult[1] === -1) {
            if (answer.length === 1) {
                subject[0][subject[0].length] = subGet + "//" + answer;
                Write01();
            } else {
                subject[1][subject[1].length] = subGet + "//" + answer;
                Write02()
            }
    
        } else {
            toast('题目重复');
        }
    }else if(answer.length>10){
        toast("题目不是选择题，无法正确获取")
        print("获取失败，答案超出")
    }
}
