var inpux=document.querySelector("#inpux");
var latest=document.getElementById("mylatest");
var topnews=document.getElementsByClassName("topp");
var btn=document.querySelector("BUTTON");
var chek=document.getElementById("myselect");
var news=document.querySelector("ul").getElementsByTagName("li");
var sourcer;
var t;
var uri;
var newl;
var newurl={};
var lasturl={};
var lastur;
var k;
var inputval;
var sort=t;

  //GET CHECKBOX VALUE
for(var i=0; i<topnews.length; i++){	
topnews[i].addEventListener("click",fum);

  function fum(){
	  
	  if(this.checked){
	  
	  t=this.value;
	   uri= "https://newsapi.org/v1/articles?source=SOURCE&sortBy=SORT&apiKey=2350bcc275b34486a2a5da0cb1dd3266";
  
	
	   k=uri.replace(/SORT/, t);
	   
	   
		/*newurl={
			
			net:k
		};
	   */
	      console.log(k);
	   
	
			
	  
	  }else{
		  
		  console.log("not checked");
	  }
	  
	  
  }

}

//GET NEWS PROVIDERS

  for(var i=0; i<news.length; i++){
	  
	  news[i].addEventListener("click",showup);
	    function showup(e){
		  inpux.value=e.target.textContent;
         		  
			
		}
  }
//TOGGLE NEWS PROVIDERS
  var tog=document.getElementById("togg");
  togg.addEventListener("click",showul);
    function showul(e){
		var uli=document.querySelector("ul");
		uli.classList.toggle("active");
	}

//GET INPUT VALUE
 
			
              
				  btn.addEventListener("click",source);
			function source(){
				inputval=inpux.value;
				
				
				
				var b=k;
				 lastur=b.replace(/SOURCE/,inputval);
				 
				 
				console.log(lastur); 
				set();
			//window.location.reload();
            //console.log(lastur);
			return lastur;
			
			
			}
			
		
			
			
var btn2=document.getElementById("btn2");			
var y;
var ss;
var z;
var w;
var s;

//var url= "https://newsapi.org/v1/articles?source=al-jazeera-english&apiKey=2350bcc275b34486a2a5da0cb1dd3266";

/*btn2.addEventListener("click",loading);
  function loading(){
	  set();
  }
*/
function set(){
 y= document.querySelector("#text3");
 z= document.querySelector("#text4");
 w= document.querySelector("#text5");
 s= document.querySelector("#text6");
 ss= document.querySelector("#text7");

var cv=lastur;
//loadJSON
$.getJSON(cv,gotdata);
console.log(cv);

}

function gotdata(data){

var output;
data.articles.forEach(function myfun(item,index){
console.log(item.urlToImage);


  output +=`<div id="req">
           <h1> ${item.title} </h1>
           <h2> ${item.author} </h2>
           <p> ${item.description} </p>
		   <img src="${item.urlToImage}">
          <a href="${item.url}" class="btn btn-default">read more</a>
 
            <div>
        `;

});

s.innerHTML=output;


}


