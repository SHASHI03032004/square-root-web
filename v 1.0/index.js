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
}