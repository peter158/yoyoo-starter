const defaultTransform = ()=>({
    x : 0, y : 0, width : 100, height : 100, rotation : 0
})
export const BaseComponents = [
    {
        icon : 'tupian-copy-copy',
        name : '图片',
        type : 'image',
        width : 100,
        height : 100
    }, {
        icon : 'text',
        name : '文本',
        type : 'text',
        height : 28,
        width : 100
    }, {
        icon : 'anniu1',
        name : '按钮',
        type : 'button',
        height : 32,
        width : 100
    }, {
        icon : 'juxing',
        name : '矩形',
        type : 'rect',
        width : 100,
        height : 100
    }, {
        icon : 'Triangle',
        name : '三角形',
        type : 'triangle',
        width : 100,
        height : 100
    }, {
        icon : 'qipao',
        name : '气泡',
        type : 'bubble',
        width : 300,
        height : 100
    }, {
        icon : 'xianduanceliang',
        name : '直线',
        type : 'line',
        width : 200,
        height : 1
    }, {
        icon : 'xianduan',
        name : '曲线',
        type : 'curve',
        width : 200,
        height : 100
    }, {
        icon : 'icon_yuanxing',
        name : '圆',
        type : 'circle',
        width : 150,
        height : 150
    }, {
        icon : 'danhangshuru',
        name : '单行输入',
        type : 'input',
        width : 180,
        height : 28
    }, {
        icon : 'fuhao-duohangshurukuang',
        name : '多行输入',
        type : 'textarea',
        width : 200,
        height : 100
    }, {
        icon : 'xialaxuanze',
        name : '下拉选择',
        type : 'select',
        height : 28,
        width : 180
    }, {
        icon : 'text',
        name : '标注',
        type : 'comment',
        height : 200,
        width : 300
    },
]
export const ComponentIconMap = {
    select : 'xialaxuanze',
    textarea : 'fuhao-duohangshurukuang',
    input : 'danhangshuru',
    circle : 'icon_yuanxing',
    curve : 'xianduan',
    line : 'xianduanceliang',
    bubble : 'qipao',
    text : 'text',
    image : "tupian-copy-copy",
    button : 'anniu1',
    triangle : "Triangle",
    rect : 'juxing',
    icon : 'tubiao',
    block : 'group'
}