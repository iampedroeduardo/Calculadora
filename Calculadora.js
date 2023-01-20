function Numero(){
    if(n!="."){
        if(conta[conta.length-1]!="x" && conta[conta.length-1]!="/" && conta[conta.length-1]!="-" && conta[conta.length-1]!="+" && conta[conta.length-1]!="(" && conta[conta.length-1]!=")"){
            conta[conta.length-1]+=n;
            document.getElementById("mostra").innerHTML+=n;
        }
        else if(conta[conta.length-1]!=")"){
            conta.push(n);
            document.getElementById("mostra").innerHTML+=n;
        }
        console.log(conta);
    }
    else{
        if(conta[conta.length-1]!="x" && conta[conta.length-1]!="/" && conta[conta.length-1]!="-" && conta[conta.length-1]!="+" && conta[conta.length-1].indexOf(".")==-1){
            conta[conta.length-1]+=n;
            document.getElementById("mostra").innerHTML+=n;
        }
        else if(conta[conta.length-1].indexOf(".")==-1){
            conta.push(n);
            document.getElementById("mostra").innerHTML+=n;
        }
    }
}
function Operacao(){
    if(conta[conta.length-1]!="x" && conta[conta.length-1]!="/" && conta[conta.length-1]!="-" && conta[conta.length-1]!="+" && conta[conta.length-1].length!=0 && conta[conta.length-1][conta[conta.length-1].length-1]!="."){
        conta.push(op);
        document.getElementById("mostra").innerHTML+=op;
    }
    console.log(conta);
}
function Porcentagem(){
    if(conta[conta.length-1]!="x" && conta[conta.length-1]!="/" && conta[conta.length-1]!="-" && conta[conta.length-1]!="+" && conta[conta.length-1].length!=0){
        conta[conta.length-1]=String(Number(conta[conta.length-1])/100);
        document.getElementById("mostra").innerHTML+="%";
    }
}
function Parenteses(){
    if((conta[conta.length-1]=="x" || conta[conta.length-1]=="/" || conta[conta.length-1]=="-" || conta[conta.length-1]=="+" || conta[conta.length-1].length==0) && conta[conta.length-1][conta[conta.length-1].length-1]!="." ){
       conta.push("(");
        document.getElementById("mostra").innerHTML+="(";
    }
    else if(conta[conta.length-1].indexOf("(")==-1){
        conta.push(")");
        document.getElementById("mostra").innerHTML+=")";
    }
    if(conta[0]==""){
        conta.shift();
    }
}
function Calcula(){
    if(conta[conta.length-1]!="x" && conta[conta.length-1]!="/" && conta[conta.length-1]!="-" && conta[conta.length-1]!="+" && conta[conta.length-1]!="(" && conta[conta.length-1].length!=0){
        while(conta.indexOf("(")!=-1){
            p1=conta.lastIndexOf("(");
            p2=conta.indexOf(")");
            conta2=conta.slice(p1+1,p2);
            console.log(conta2);
            do{
                if(conta2.indexOf("x")!=-1 && conta2.indexOf("/")!=-1){
                    if(conta2.indexOf("x")<conta2.indexOf("/")){
                    conta2.splice((conta2.indexOf("x"))-1,3,Number(conta2[conta2.indexOf("x")-1])*Number(conta2[conta2.indexOf("x")+1]));
                    }
                    if(conta2.indexOf("/")<conta2.indexOf("x")){
                    conta2.splice((conta2.indexOf("/"))-1,3,Number(conta2[conta2.indexOf("/")-1])/Number(conta2[conta2.indexOf("/")+1]));
                    }
                }
                if(conta2.indexOf("x")!=-1 && conta2.indexOf("/")==-1){
                    conta2.splice((conta2.indexOf("x"))-1,3,Number(conta2[conta2.indexOf("x")-1])*Number(conta2[conta2.indexOf("x")+1]));
                }
                if(conta2.indexOf("x")==-1 && conta2.indexOf("/")!=-1){
                    conta2.splice((conta2.indexOf("/"))-1,3,Number(conta2[conta2.indexOf("/")-1])/Number(conta2[conta2.indexOf("/")+1]));
                }
            }while(conta2.indexOf("x")!=-1 || conta2.indexOf("/")!=-1)
            resultconta2=String(conta2[0]);
            if(conta2.length>1){
                s=Number(conta2[0]);
                for(c=1;c<conta2.length;c+=2){
                    if(conta2[c]=="+"){
                       s+=Number(conta2[c+1]);
                    }
                    if(conta2[c]=="-"){
                       s-=Number(conta2[c+1]);
                    }
                }
                resultconta2=String(s);
            }
            conta.splice(p1,conta2.length+2,resultconta2);
        }
        do{
            if(conta.indexOf("x")!=-1 && conta.indexOf("/")!=-1){
                if(conta.indexOf("x")<conta.indexOf("/")){
                conta.splice((conta.indexOf("x"))-1,3,Number(conta[conta.indexOf("x")-1])*Number(conta[conta.indexOf("x")+1]));
                }
                if(conta.indexOf("/")<conta.indexOf("x")){
                conta.splice((conta.indexOf("/"))-1,3,Number(conta[conta.indexOf("/")-1])/Number(conta[conta.indexOf("/")+1]));
                }
            }
            if(conta.indexOf("x")!=-1 && conta.indexOf("/")==-1){
                conta.splice((conta.indexOf("x"))-1,3,Number(conta[conta.indexOf("x")-1])*Number(conta[conta.indexOf("x")+1]));
            }
            if(conta.indexOf("x")==-1 && conta.indexOf("/")!=-1){
                conta.splice((conta.indexOf("/"))-1,3,Number(conta[conta.indexOf("/")-1])/Number(conta[conta.indexOf("/")+1]));
            }
        }while(conta.indexOf("x")!=-1 || conta.indexOf("/")!=-1)
        if(conta.length>1){
            s=Number(conta[0]);
            for(c=1;c<conta.length;c+=2){
                if(conta[c]=="+"){
                   s+=Number(conta[c+1]);
                }
                if(conta[c]=="-"){
                   s-=Number(conta[c+1]);
                }
            }
            conta=[String(s)];
        }
        document.getElementById("mostra").innerHTML=conta[0];
    }
}
var conta=[""];
var n;
var op;
document.getElementById("mostra").innerHTML="";
