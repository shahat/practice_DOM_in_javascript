let id=0;
function save() {

    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let faculty=document.getElementById('faculty').value;
    ++id;
    document.getElementById('tbl').innerHTML+=`
    <tr id="r_${id}">
    <td id="id_${id}">${id}</td>
    <td id="name_${id}">${name}</td>
    <td id="age_${id}">${age}</td>
    <td id="faculty_${id}">${faculty}</td>
    <td><button onclick="show(${id})">edit</button></td>
    <td><button onclick="del(${id})">delete</button></td>
</tr>
    `;
    document.getElementById('name').value="";
    document.getElementById('age').value="";
    document.getElementById('faculty').value="";
}
function show(id) {
    document.getElementById('name').value=document.getElementById('name_'+id).innerHTML;
    document.getElementById('age').value=document.getElementById('age_'+id).innerHTML;
    document.getElementById('faculty').value=document.getElementById('faculty_'+id).innerHTML;
    document.getElementById('controls').innerHTML=`<button onclick="update(${id})">Update</button>`
}
function update(id) {
    document.getElementById('name_'+id).innerHTML=document.getElementById('name').value;
    document.getElementById('age_'+id).innerHTML=document.getElementById('age').value;
    document.getElementById('faculty_'+id).innerHTML=document.getElementById('faculty').value;
    document.getElementById('controls').innerHTML=`<button onclick="save()">Save</button>`
    document.getElementById('name').value="";
    document.getElementById('age').value="";
    document.getElementById('faculty').value="";
}
function del(id){
    document.getElementById('r_'+id).style.display='none';
}
