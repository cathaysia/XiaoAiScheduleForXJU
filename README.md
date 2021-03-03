# 说明

小爱课程表对新疆大学课程表的适配

- scheduleHtmlProvider.js 在本地运行，对数据进行清洗
- scheduleHtmlParser.js 运行在服务端（在手机上时），对数据进行清洗

在scheduleHtmlParser.js内添加了 cheerio 以方便用 nodejs 进行调试。在使用时只需要 `scheduleHtmlParser` 这个函数，不要有多余的函数，否则可能导致手机端解析失败

# 许可

小爱课程表也没有添加许可的地方，就按照 MIT 来算吧