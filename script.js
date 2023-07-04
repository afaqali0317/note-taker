    var y=document.getElementsByClassName("nbuttons");

    var i=1+(y.length);
    var desc=[];
    console.log(i);

function save() {
    console.log(i);
    var notetitle= document.getElementById("t1").value;
    
    var notedesc=document.getElementById("t2").value;
    desc[i]=notedesc;

    let dnotes = document.getElementById("dnotes");
    
    var notebox= '<span id="dnote'+i+'" class="notes" >Note'+i+'<p class="notestext">'+notetitle+'</p><button id="nb'+i+'" class="nbuttons" onclick="showdesc('+i+')" >Show info</button></span>';
    dnotes.innerHTML += notebox;
    
    i++;
}

function showdesc(bindex) {
                    alert('Description of Note '+bindex+' is :                 '+desc[bindex]);
                
                    console.log(bindex);

}

