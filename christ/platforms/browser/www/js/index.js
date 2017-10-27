function get_list() {
    var list = new Array;
    var list_str = localStorage.getItem('student');
    if (list_str !== null) {
        list = JSON.parse(list_str); 
    }
    return list;
}
function add() {
    var name = document.getElementById('name').value;
      document.getElementById("name").value = "";
if(name==''){
    alert('Write Student Name');
}
else{
    var list = get_list();
    list.push(name);
    localStorage.setItem('student', JSON.stringify(list));
    show();
    return false;
}
}
function remove() {
    var id = this.getAttribute('id');
    var list = get_list();
    list.splice(id, 1);
    localStorage.setItem('student', JSON.stringify(list));
 
    show();
 
    return false;
} 
function show() {
    var list = get_list();
 
    var html = '<ol>';
    for(var i=0; i<list.length; i++) {
        html += '<li>' + list[i] +'                                   <button class="remove" id="' + i  + '">Remove</button></li>';
    };
    html += '</ol>';
    document.getElementById('list').innerHTML = html;
      var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
document.getElementById('add').addEventListener('click', add);
show();