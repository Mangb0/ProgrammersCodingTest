function solution(n) {
    let oneCount = n.toString(2).split("1").length;
    while(true) {
        n++;
        if(oneCount === n.toString(2).split("1").length) return n
    }
}