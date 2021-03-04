module.exports = function check(str, bracketsConfig) {
    let arr = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        let b = {
            open: bracketsConfig[i][0],
            close: bracketsConfig[i][1]
        }
        arr.push(b);
    }
    for (let i = 0; i < 40; i++){
        for(let j = 0; j < arr.length; j++) {
            str = str.replace(arr[j].open + '' + arr[j].close, '');
        }
    }
    if(str.length == 0) {
        return true;
    } else {
        return false;
    }
}
