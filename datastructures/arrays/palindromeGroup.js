strs = ["act","pots","tops","cat","stop","hat"]

function isAnagram(str1, str2) {
    str1 = str1.split('').sort().join();
    str2 = str2.split('').sort().join();

    return str1 === str2;
}

function orderString(str) {
    return str.split('').sort().join('');
}

function groupAnagrams(strs) {
    let strList = new Map();
    let currentStr;
    strList.set(orderString(strs[0]),[strs[0]]);
    for(let i=0; i<strs.length; i++) {
        currentStr = strs[i];

        if(strList.has(orderString(currentStr))) {
            console.log('enter')
            strList.get(orderString(currentStr)).push(currentStr);
        }
        strList.set(orderString(strs[i]),[strs[i]]);
    }
    console.log(strList);
}

groupAnagrams(strs);