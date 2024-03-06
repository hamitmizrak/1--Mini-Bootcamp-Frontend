//AJAX 
$(document).ready(function(){

    // LIST (GET)
    getResult();

    // SAVE (POST)
    $("#ajaxPostButton").click(function(){
        alert("Post tıklandı")
        postResult();
    });
});


// AJAX GET 
// getResult
let  getResult=()=>{
    let apiBaseUrl="http://localhost:1111";
    let tbody=$("#tbody_id");
    $.ajax({
        method:"GET",
        url:apiBaseUrl+"/register",
    }).done(function(data){
        alert("Listeleme başarılı.")
        for(let i=0; i<=10; i++){
            let trAppend="";
            trAppend+=
            '<tr>'+
                '<td>' + data[i].id + '</td>'+
                '<td>' + data[i].name + '</td>'+
                '<td>' + data[i].surname + '</td>'+
                '<td>' + data[i].email + '</td>'+
                '<td>' + data[i].password + '</td>'+
                '<td>' + data[i].created_date + '</td>'+
            '</tr>';
            tbody.append(trAppend);
        }
    }).fail(function(){
        alert("Listeleme Sırasında Hata meydana geldi Server çalışıyor mu ?")
    })

}

////////////////////////////////////////
//AJAX POST
let  postResult=()=>{
    let apiBaseUrl="http://localhost:1111";
    let tbody=$("#tbody_id");

    // Form Input
    let formData={
        "id":$("#uid").val(),
        "name":$("#uname").val(),
        "surname":$("#usurname").val(),
        "email":$("#uemail").val(),
        "password":$("#upassword").val(),
        "created_date":$("#ucreated_date").val(),
        
    };

    console.log(formData)
    //debugger

    $.ajax({
        method:"POST",
        url:apiBaseUrl+"/register",
        data:JSON.stringify(formData),
        contentType:"application/json",
        dataType:"json"
    }).done(function(data){
        alert("Ekleme başarılı.")
        for(let i=0; i<=10; i++){
            let trAppend="";
            trAppend+=
            '<tr>'+
                '<td>' + data[i].id + '</td>'+
                '<td>' + data[i].name + '</td>'+
                '<td>' + data[i].surname + '</td>'+
                '<td>' + data[i].email + '</td>'+
                '<td>' + data[i].password + '</td>'+
                '<td>' + data[i].created_date + '</td>'+
            '</tr>';
            tbody.append(trAppend);
        }
    }).fail(function(){
        alert("Ekleme Sırasasında Hata meydana geldi Server çalışıyor mu ?")
    })

}


