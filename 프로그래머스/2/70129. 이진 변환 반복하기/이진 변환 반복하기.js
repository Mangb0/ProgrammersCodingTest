function solution(s) {
    let i = 0;
    let count = 0;
    
    for(i; s!=='1'; i++) {
        if(i>=10) break; 
        const beforeLen = s.length;
        s = s.replace(/0/g ,'');
        const afterLen = s.length;
        count += beforeLen - afterLen;
        s = s.length.toString(2)
    }
        
    return [i, count];
}