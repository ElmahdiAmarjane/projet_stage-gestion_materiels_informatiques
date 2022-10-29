let nom = document.getElementById('nom');
let direction = document.getElementById('direction');
let site = document.getElementById('site');
let materiel = document.getElementById('materiel');
let datee = document.getElementById('datee');
let etat = document.getElementById('etat');
let serial = document.getElementById('serial');
let desc = document.getElementById('desc');
let ajouter = document.getElementById('ajouter');


let datacomp;
let mood='ajouter';
let tmp;
if(localStorage.composant!=null){
datacomp=JSON.parse(localStorage.composant);
}
else{
	datacomp=[];
}


ajouter.onclick = function(){
	if(nom.value!=''){

	
	let newcomp = {
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
	 datacomp.push(newcomp);
	 }
	 else{
		 datacomp[tmp]=newcomp;
		 mood='ajouter';
		 ajouter.innerHTML='Enregistrer';
	 }

	localStorage.setItem('composant' , JSON.stringify(datacomp));
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
for(let i=0;i< datacomp.length;i++){
    Vtable += ` 
	<tr>           
			       <td>${datacomp[i].nom}</td>
			       <td>${datacomp[i].direction}</td>
			       <td>${datacomp[i].site}</td>
			       <td>${datacomp[i].materiel}</td>
			       <td>${datacomp[i].datee}</td>
				   <td>${datacomp[i].etat}</td>
			       <td>${datacomp[i].serial}</td>
				   <td>${datacomp[i].desc}</td>
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
	datacomp.splice(i,1);
	localStorage.composant=JSON.stringify(datacomp);
	showdata();
}
function  updateData(i){
	nom.value=datacomp[i].nom;
	 direction.value=datacomp[i].direction;
		site.value=datacomp[i].site;
		materiel.value=datacomp[i].materiel;
		datee.value=datacomp[i].datee;
		etat.value=datacomp[i].etat;
		serial.value=datacomp[i].serial;
		desc.value=datacomp[i].desc;
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
		  for(let i=0;i<datacomp.length;i++){
			  
			  
		  if(datacomp[i].nom.includes(value)){
			  vtable += ` 
	           <tr>
			       <td>${datacomp[i].nom}</td>
			       <td>${datacomp[i].direction}</td>
			       <td>${datacomp[i].site}</td>
			       <td>${datacomp[i].materiel}</td>
			       <td>${datacomp[i].datee}</td>
				   <td>${datacomp[i].etat}</td>
			       <td>${datacomp[i].serial}</td>
				   <td>${datacomp[i].desc}</td>
				   <td><button onclick="deleteData(${i})"id="supprimer"><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px</button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px</button></td> 
				</tr> 
	
	` ;
				  
			  }
			
		  }
		  
	 }
	 else{
		  for(let i=0;i<datacomp.length;i++){
			  
		  if(datacomp[i].serial.includes(value)){
			  vtable +=
			  ` 
	          <tr>
			       <td>${datacomp[i].nom}</td>
			       <td>${datacomp[i].direction}</td>
			       <td>${datacomp[i].site}</td>
			       <td>${datacomp[i].materiel}</td>
			       <td>${datacomp[i].datee}</td>
				   <td>${datacomp[i].etat}</td>
			       <td>${datacomp[i].serial}</td>
				   <td>${datacomp[i].desc}</td>
				   <td><button onclick="deleteData(${i})"id="supprimer"><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px</button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px</button></td> 
				   </tr> 
	
	` ;
				  
			  }
			
		  }
		  
	 }

	document.getElementById('tbody').innerHTML=vtable;
}
document.getElementById('toExcel').addEventListener('click' , function(){
	 var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("#exTable"));
	
}
	);