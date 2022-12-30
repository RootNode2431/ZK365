var writeFile = open("answer/answer.txt", "w");
writeFile.write("")
for (var i = 1; i < 30; i++) {
    engines.execScriptFile("answer/answer.js");
    // 执行获取单选题脚本
    sleep(1500);
    toast('正在获取第' + i + '道单选题')
}
sleep(1000)
click(613,167)
sleep(1000)
click(110,536)
engines.execScriptFile("click.js")
