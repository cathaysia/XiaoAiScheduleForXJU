function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
    // 先进入框架
    // mfrRows->frmbody->frmDesk->frame_1->frmReport
    // const mfrRows = dom.getElementById("mfrRows").contentDocument
    const frmbody = dom.getElementById("frmbody").contentDocument
    const frmDesk = frmbody.getElementById("frmDesk").contentDocument
    const frame_1 = frmDesk.getElementById("frame_1").contentDocument
    const frmReport = frame_1.getElementById("frmReport").contentDocument
    dom = frmReport

    const tables = dom.querySelectorAll("#mytable");
    // 解析课程表
    tables[0].id = "scheduleTable";
    tables[0].getElementsByTagName('thead')[0].remove()
    // 删除表头
    tables[0].getElementsByClassName('H')[0].remove()
    // 删除第几节字样
    while (tables[0].getElementsByClassName('td1').length
    ) {
        tables[0].getElementsByClassName('td1')[0].remove()
    }

    return tables[0].outerHTML;
}