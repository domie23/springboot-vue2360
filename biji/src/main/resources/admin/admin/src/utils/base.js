const base = {
    get() {
        return {
            url : "http://localhost:8080/biji/",
            name: "biji",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/biji/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "笔记记录分享网站"
        } 
    }
}
export default base
