/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const result = [];
    words.forEach(word => {
        if (isMatch(word, pattern)) {
            result.push(word);
        }
    });
    return result;
};

function isMatch(word, pattern) {
    if (word.length !== pattern.length) {
        return false;
    }

    if (word.length === 1) {
        return true;
    }

    // 将word里面每一个字符都换成pattern对应位置的字符，最后对比换过的word和pattern是否相等
    const wordCopy = word.split('');
    // 为了保证替换的一对字符唯一且一一对应，用两个map存储
    const map1 = {};
    const map2 = {};
    for (let i = 0; i < wordCopy.length; i++) {
        const a = wordCopy[i];
        const b = pattern[i];
        if (map1[a] && map2[b]) {
            // a和b建立过对应关系，直接替换
            wordCopy[i] = map1[a];
        } else if (!map1[a] && !map2[b]) {
            // a和b没有建立过对应关系，为他们建立对应关系然后替换
            map1[a] = b;
            map2[b] = a;
            wordCopy[i] = b;
        }
        // 其他的不管
    }

    return wordCopy.join('') == pattern;
}