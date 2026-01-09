function debounce(func, wait) {
    let timeout;
    function debounced(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    }
    debounced.cancel = function () {
        clearTimeout(timeout);
    };
    return debounced;
}

const debounced = debounce(console.log, 200);
debounced('a');

function unique(arr) {
    const seen = new Set();
    return arr.filter((item) => {
        if (seen.has(item)) {
            return false;
        }
        seen.add(item);
        return true;
    });
}

// Test cases
console.log(unique([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]
console.log(unique(['a', 'b', 'a', 'c'])); // ['a', 'b', 'c']
console.log(unique([true, false, true, false])); // [true, false]
console.log(unique([1, '1', 1, true, 1])); // [1, '1', true]
console.log(unique([3, 1, 2, 3, 1])); // [3, 1, 2]
