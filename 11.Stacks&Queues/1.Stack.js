// Array implementaion
let stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');

stack.pop(); // 'youtube'

stack.push('amazon');
stack.pop(); // 'amazon'

let stack2 = [];

stack2.unshift('create new file');
stack2.unshift('resized file');

stack2.shift(); // 'resized file'
