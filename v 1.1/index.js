function calculate() {
    let no = parseInt(document.getElementById("req-no").value);
    let res = Math.sqrt(no);
    document.getElementById('int-root').value = parseInt(res);
    if (parseInt(res) * parseInt(res) != no) {
        document.getElementById('decimal-part').innerHTML = ('' + (res - parseInt(res))).slice(1, -1);
    }
    else{
        document.getElementById('decimal-part').innerHTML = '.00';
    }
    createtable(res);
}
function createtable(res){
    document.getElementById("display-table").classList.remove("none")
    document.getElementById('result').innerHTML = res;
    let resstr=''+res;
    let tbody = document.getElementById('tbody');
    tbody.innerHTML=''
    let temp=0
    let no;
    if(document.getElementById("req-no").value.length%2==0){
        no = 100*parseFloat('0.'+document.getElementById("req-no").value)
    }
    else{
        no = 100*parseFloat('0.0'+document.getElementById("req-no").value)
    }
    for(let i=0;i<resstr.length;i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        if(resstr[i]=='.'){
            i+=1;
        }
        temp = temp*10+parseInt(resstr[i])
        tr.appendChild(td);
        td.innerHTML=temp
        tbody.appendChild(tr)
        td = document.createElement('td');
        td.innerHTML=parseInt(no)+'<br>'+temp * parseInt(resstr[i])
        no-= parseInt(temp * parseInt(resstr[i]))
        no=no*100
        tr.appendChild(td);
        td.classList.add("right-align")
        temp = temp+parseInt(resstr[i])
    }
}
function changebtnstatus(){
    if(document.getElementById("req-no").value==''){
        document.getElementById("calculate-btn").disabled=true;
    }
    else{
        document.getElementById("calculate-btn").disabled=false;
    }
}
changebtnstatus();