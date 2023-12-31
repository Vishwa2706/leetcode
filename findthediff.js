var findDiff = function(s,t){
    let result = '';

    for (let i = 0; i < s.length; i++){
        result ^= s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++){
        result ^= t.charCodeAt(i);
    }

  return String.fromCharCode(result);
}

  //example
  const s = "abc";
  const t = "abcd" ;
  const result = findDiff(s,t);
  console.log(result);
