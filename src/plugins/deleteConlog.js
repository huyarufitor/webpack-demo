module.exports = function(source) {
    // 在源代码中查找所有的 console.log 语句
    const regex = /console\.log\((.*)\);?/g;
    const replacedSource = source.replace(regex, '');
    return replacedSource;
}