function solution(s){
    const stack = [];
    
    s.split('').map((v) => {
        if(stack[stack.length-1] === '(' && v === ')') stack.pop()
        else stack.push(v);
    })
    
    return !stack.length;
}