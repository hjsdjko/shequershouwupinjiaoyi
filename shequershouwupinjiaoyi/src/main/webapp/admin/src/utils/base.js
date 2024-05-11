const base = {
    get() {
        return {
            url : "http://localhost:8080/shequershouwupinjiaoyi/",
            name: "shequershouwupinjiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shequershouwupinjiaoyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区二手物品交易小程序"
        } 
    }
}
export default base
