function list(n){
var reg = /(<h2.*?><\/\S>(.*?)<\/h2?>)/igm;
var arr; 
var result= '';
while((arr=reg.exec(n))!== null){
result += '<li>'+arr[2]+'</li>';
} 
return '<ul>'+result+'</ul>';
}
list(htmlContent);
