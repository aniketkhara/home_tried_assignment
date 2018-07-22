var students=[];

$("#myform").submit(function(e){		
    e.preventDefault();
    name=$("#name").val();
    email=$("#email").val();
    phone=$("#phone").val();
    date=$("#date").val();
    mark1=$("#mark1").val();
    mark2=$("#mark2").val();
    mark3=$("#mark3").val();
    
    var row=""

    percentage=(parseInt(mark1)+parseInt(mark2)+parseInt(mark3))/3;

    if(percentage>=70){
      result="<td class='distinction'>FIRST CLASS WITH DISTINCTION</td>";
    }
    else if(percentage>=60 && percentage<70){
      result="<td class='firstclass'>FIRST CLASS</td>";
    }
    else if(percentage>=50 && percentage<60){
      result="<td class='secondclass'>SECOND CLASS</td>";
    }
    else if(percentage>=40 && percentage<50){
      result="<td class='passclass'>THIRD CLASS</td>";
    }
    else
      result="<td class='danger'>FAIL</td>";

    row+="<tr><td>"  +name+  "</td><td>"  +email+  "</td><td>"  +phone+  "</td><td>"  +date+  "</td><td>"  +Math.round(percentage)+  "</td>"+result+"<td><button class='btn btn-info'>EDIT INFO</td></tr>";
    $(row).appendTo("#list");

    students.push({name  ,email ,phone  ,date  ,percentage});

});

