class myPlugin {
    constructor(options){
        //用户自定义配置
        this.options = options
        console.log(this.options)
    }
    apply(compiler) {
        //处理自定义逻辑
        console.log("This is my  plugin.")
    }
}

module.exports = myPlugin
