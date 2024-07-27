function addskill(){

    let newnode=document.createElement("input");
    newnode.classList.add("form-control");
    newnode.classList.add("skills")
    newnode.classList.add("mt-3");
    newnode.setAttribute("maxlength",15);
    newnode.setAttribute("type","text");

    let skillbtn=document.getElementById("skillbtn");
    let skilldiv=document.getElementById("skilldiv");

    skilldiv.insertBefore(newnode,skillbtn);


}
function addnewexp(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("expfield")
    newnode.classList.add("mt-3");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","enter your work experience");

    let expbtn=document.getElementById("expbtn");
    let expdiv=document.getElementById("expdiv");

    expdiv.insertBefore(newnode,expbtn);
    // console.log("hi");
}

function addqualification (){
    let NewNode= document.createElement("textarea");
    NewNode.classList.add("mt-3");
    NewNode.classList.add("form-control");
    NewNode.classList.add("qualification");
    NewNode.setAttribute("rows",3);
    NewNode.setAttribute("placeholder","enter your qualifications");

    let qualificationbtn=document.getElementById("qualificationbtn");
    let qualificationdiv=document.getElementById("qualificationdiv");

    qualificationdiv.insertBefore(NewNode,qualificationbtn);

}

function addproject (){
    let NewNode= document.createElement("textarea");
    NewNode.classList.add("mt-3");
    NewNode.classList.add("projects");
    NewNode.classList.add("form-control");
    NewNode.setAttribute("rows",6);
    NewNode.setAttribute("placeholder","mention your projects");

    let projectbtn=document.getElementById("projectbtn");
    let projectdiv=document.getElementById("projectdiv");

    projectdiv.insertBefore(NewNode,projectbtn);  // it will add the any more textarea in the projectdiv element but before the add button

}

function generatecv(){
    let namefield= document.getElementById("namefield").value;
    let contactfield= document.getElementById("contactfield").value;
    let addressfield= document.getElementById("addressfield").value;
    let emailfield= document.getElementById("emailfield").value;
    let linkedinid= document.getElementById("linkedin").value;
    let instaid= document.getElementById("instagram").value;
    let twitterid= document.getElementById("twitter").value;
    let aboutfield= document.getElementById("aboutfield").value;

    let updatename = document.getElementById("updatename");
    let updatename2 = document.getElementById("updatename2");
    let updatephone = document.getElementById("updatephone");
    let updateaddress = document.getElementById("updateaddress");
    let updatemail = document.getElementById("updatemail");
    let updatelinkedin = document.getElementById("updatelinkedin");
    let updatetwitter = document.getElementById("updatetwitter");
    let updateinsta = document.getElementById("updateinsta");
    let updateabout = document.getElementById("updateabout");
    
    //for work experience 
    
    let exparray=document.getElementsByClassName("expfield");
    let updateexperience = document.getElementById("updateexperience");
    let str='';
    
    for(let e of exparray){
        str+=`<li> ${e.value} </li>`;
    }
    
    updateexperience.innerHTML=str;
    
    //for academic qualification
    
    let acadqualarray= document.getElementsByClassName("qualification");
    let updatequalification = document.getElementById("updatequalification");
    let str1='';
    
    for(let e of acadqualarray){
        str1+=`<li> ${e.value} </li>`;
    }
    
    updatequalification.innerHTML=str1;
    
    //for projects
    
    let projectarray= document.getElementsByClassName("projects");
    let updateprojects = document.getElementById("updateprojects");

     let str2='';
    
    for(let e of projectarray){
        str2+=`<li> ${e.value} </li>`;
    }
    updateprojects.innerHTML=str2;
    
    
    updatename.innerHTML=namefield;
    updatename2.innerHTML=namefield;
    updatephone.innerHTML=contactfield;
updateaddress.innerHTML=addressfield;
updatemail.innerHTML=emailfield;
updatelinkedin.innerHTML=linkedinid;
updateinsta.innerHTML=instaid;
updatetwitter.innerHTML=twitterid;
updateabout.innerHTML=aboutfield;

//for updating skills

let skilllist=document.getElementById("skilllist");
let skillfield = document.getElementsByClassName("skills");

let str3='';
for(let e of skillfield){
  str3+=`<li> ${e.value} </li>`;
}
  skilllist.innerHTML=str3;
  
//for dynamically updating profilepic

let profilepic=document.getElementById("profilefield").files[0];

let reader= new FileReader(profilepic);
 reader.readAsDataURL(profilepic);
  let updateprofile= document.getElementById("updateprofile");
  
  //setting image to template
  reader.onloadend=function(){
   updateprofile.src=reader.result;
  }

  //updating role 
  let rolefield=document.getElementById("rolefield").value;
  let updaterole=document.getElementById("role");

  updaterole.innerHTML=rolefield;

let container= document.getElementById("cv-form");
let container2= document.getElementById("cv-template")
container.classList.add("visibility");
container2.classList.add("visibility1");
container2.classList.remove("container2");


}

function printcv(){
    window.print();
}