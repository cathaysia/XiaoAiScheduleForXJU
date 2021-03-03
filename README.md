# 说明

小爱课程表对新疆大学课程表的适配

- scheduleHtmlProvider.js 在本地运行，对数据进行清洗
- scheduleHtmlParser.js 运行在服务端（在手机上时），对数据进行清洗

在scheduleHtmlParser.js内添加了 cheerio 以方便用 nodejs 进行调试。在使用时只需要 `scheduleHtmlParser` 这个函数，不要有多余的函数，否则可能导致手机端解析失败

# 许可

小爱课程表也没有添加许可的地方，就按照 MIT 来算吧

# 鸣谢

实际上我并不熟悉 js，尤其是 jq，或者是错综复杂的 HTML 结构。在我适配的过程中，离不开群友的大力帮助！非常感谢以下朋友对我的帮助：

- Serein：帮我解决了多层 frame 内选择标签的难题
- cr0ss×2：帮我解决了中文变成编码的难题
- 小爱唯一指定唱片机：提供了 draw.js 用来帮忙调试 ^_^
- 海浪卷卷、础砜。等人在群里热心的帮助
