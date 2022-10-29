let nom = document.getElementById('nom');
let direction = document.getElementById('direction');
let site = document.getElementById('site');
let materiel = document.getElementById('materiel');
let datee = document.getElementById('datee');
let etat = document.getElementById('etat');
let serial = document.getElementById('serial');
let desc = document.getElementById('desc');
let ajouter = document.getElementById('ajouter');


let datamatDesc;
let mood='ajouter';
let tmp;
if(localStorage.materielDesc!=null){
datamatDesc=JSON.parse(localStorage.materielDesc);
}
else{
	datamatDesc=[];
}

ajouter.onclick = function(){
	if(nom.value!=''){

	
	let newMatDesc = {
		nom:nom.value,
		direction:direction.value,
		site:site.value,
		materiel:materiel.value,
		datee:datee.value,
		etat:etat.value,
		serial:serial.value,
		desc:desc.value,
	
	}
	 if(mood==='ajouter'){
	 datamatDesc.push(newMatDesc);
	 }
	 else{
		 datamatDesc[tmp]=newMatDesc;
		 mood='ajouter';
		 ajouter.innerHTML='Enregistrer';
	 }
	

	localStorage.setItem('materielDesc' , JSON.stringify(datamatDesc));
	clearData();
	showdata();
}
else{
	showdata();
}
   
}




function clearData(){
	    nom.value='';
	    direction.value='';
		site.value='';
		materiel.value='';
		datee.value='';
		etat.value='';
		serial.value='';
		desc.value='';

}
function showdata(){
  let Vtable='';
for(let i=0;i< datamatDesc.length;i++){
    Vtable += ` 
	<tr>           
			       <td>${datamatDesc[i].nom}</td>
			       <td>${datamatDesc[i].direction}</td>
			       <td>${datamatDesc[i].site}</td>
			       <td>${datamatDesc[i].materiel}</td>
			       <td>${datamatDesc[i].datee}</td>
				   <td>${datamatDesc[i].etat}</td>
			       <td>${datamatDesc[i].serial}</td>
				   <td>${datamatDesc[i].desc}</td>
				   <div class=suppup>
				   <td><button onclick="deleteData(${i})"id="supprimer"><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px</button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px</button></td> 
				    </div>
				   </tr> 
	
	`
}	
document.getElementById('tbody').innerHTML=Vtable;


}
showdata();

function deleteData(i){
	datamatDesc.splice(i,1);
	localStorage.materielDesc=JSON.stringify(datamatDesc);
	showdata();
}
function  updateData(i){
	nom.value=datamatDesc[i].nom;
	 direction.value=datamatDesc[i].direction;
		site.value=datamatDesc[i].site;
		materiel.value=datamatDesc[i].materiel;
		datee.value=datamatDesc[i].datee;
		etat.value=datamatDesc[i].etat;
		serial.value=datamatDesc[i].serial;
		desc.value=datamatDesc[i].desc;
		ajouter.innerHTML='Mise à jour';
		mood='miseajours';
		tmp=i;
		scroll({
		   top:1,
		   behavior:'smooth',
		})
	
}

//la fonction rechercher//

let searchMood='nom';


function getsearchMood(id){
	 if(id=='byutili'){
		 searchMood='nom';
		 search.placeholder="Search by nom d'utilisateur";
	 }
	 
	 else{
		 searchMood='serial';
		 search.placeholder="Search by serial number";
	 }
	search.focus();
	search.value='';
}


function searchData(value){
	let vtable='';
	
	
	 if(searchMood=='nom'){
		  for(let i=0;i<datamatDesc.length;i++){
			  
			  
		  if(datamatDesc[i].nom.includes(value)){
			  vtable += ` 
	           <tr>
			       <td>${datamatDesc[i].nom}</td>
			       <td>${datamatDesc[i].direction}</td>
			       <td>${datamatDesc[i].site}</td>
			       <td>${datamatDesc[i].materiel}</td>
			       <td>${datamatDesc[i].datee}</td>
				   <td>${datamatDesc[i].etat}</td>
			       <td>${datamatDesc[i].serial}</td>
				   <td>${datamatDesc[i].desc}</td>
				   <td><button onclick="deleteData(${i})"id="supprimer"><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px</button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px</button></td> 
				</tr> 
	
	` ;
				  
			  }
			
		  }
		  
	 }
	 else{
		  for(let i=0;i<datamatDesc.length;i++){
			  
		  if(datamatDesc[i].serial.includes(value)){
			  vtable +=
			  ` 
	          <tr>
			       <td>${datamatDesc[i].nom}</td>
			       <td>${datamatDesc[i].direction}</td>
			       <td>${datamatDesc[i].site}</td>
			       <td>${datamatDesc[i].materiel}</td>
			       <td>${datamatDesc[i].datee}</td>
				   <td>${datamatDesc[i].etat}</td>
			       <td>${datamatDesc[i].serial}</td>
				   <td>${datamatDesc[i].desc}</td>
				   <td><button onclick="deleteData(${i})"id="supprimer"><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px</button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px</button></td> 
				   </tr> 
	
	` ;
				  
			  }
			
		  }
		  
	 }

	document.getElementById('tbody').innerHTML=vtable;
}
