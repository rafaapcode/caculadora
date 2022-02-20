const res = $("[key='resposta']");


function insert(n){
    if(n === 'CE' || n === 'C'){
        res.text("");
    }else{
        let num = res.text();
        res.text(num + n);
    }
}   