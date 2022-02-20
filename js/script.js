const res = $("[key='resposta']");


function insert(n){
    if(n === 'CE' || n === 'C'){
        res.text("");
    }else{
        let num = res.text();
        res.text(num + n);
    }
};

function calc(){
    let result1 = $("[key='resposta']").text();
    if(result1){
        $("[key='resposta']").text(eval(result1));
    }else{
        $("[key='resposta']").text("Faça uma operação !!")
    }
}