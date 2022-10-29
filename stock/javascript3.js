
//obtenir les elements HTML
let nom = document.getElementById('nom');
let direction = document.getElementById('direction');
let site = document.getElementById('site');
let materiel = document.getElementById('materiel');
let datee = document.getElementById('datee');
let etat = document.getElementById('etat');
let serial = document.getElementById('serial');
let desc = document.getElementById('desc');
let ajouter = document.getElementById('ajouter');


let datamat; // tableau va contenir des objets;
let mood = 'ajouter';
let tmp;
if (localStorage.materiel != null) {
	datamat = JSON.parse(localStorage.materiel);
}
else {
	datamat = [];
}



	
// fonction qui va ajouter un objet au tableau datamat (un objet = nouveau operation sur materiel)
ajouter.onclick = function () {
	if(nom.value!=''){
	let newMat = {
		nom: nom.value,
		direction: direction.value,
		site: site.value,
		materiel: materiel.value,
		datee: datee.value,
		etat: etat.value,
		serial: serial.value,
		desc: desc.value,

	}
	if (mood === 'ajouter') {
		datamat.push(newMat);
	}
	else {
		datamat[tmp] = newMat;
		mood = 'ajouter';
		ajouter.innerHTML = 'ajouter';
	}






	localStorage.setItem('materiel', JSON.stringify(datamat));
	clearData();
	showdata();

}
else{
	showdata();
}
}




function clearData() {
	nom.value = '';
	direction.value = '';
	site.value = '';
	materiel.value = '';
	datee.value = '';
	etat.value = '';
	serial.value = '';
	desc.value = '';

}
function showdata() {
	let Vtable = '';
	for (let i = 0; i < datamat.length; i++) {
		Vtable += ` 
	<tr>
			       <td>${datamat[i].nom}</td>
			       <td>${datamat[i].direction}</td>
			       <td>${datamat[i].site}</td>
			       <td>${datamat[i].materiel}</td>
			       <td>${datamat[i].datee}</td>
				   <td>${datamat[i].etat}</td>
			       <td>${datamat[i].serial}</td>
				   <td>${datamat[i].desc}</td>
			       <td><button onclick="deleteData(${i})"id="supprimer"><h4><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px<h4></button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px<h4></button></td> 
				   </tr> 
	
	`
	}
	document.getElementById('tbody').innerHTML = Vtable;


}
showdata();

function deleteData(i) {
	datamat.splice(i, 1);
	localStorage.materiel = JSON.stringify(datamat);
	showdata();
}
function updateData(i) {
	nom.value = datamat[i].nom;
	direction.value = datamat[i].direction;
	site.value = datamat[i].site;
	materiel.value = datamat[i].materiel;
	datee.value = datamat[i].datee;
	etat.value = datamat[i].etat;
	serial.value = datamat[i].serial;
	desc.value = datamat[i].desc;
	ajouter.innerHTML = 'Mise à jour';
	mood = 'miseajours';
	tmp = i;
	scroll({
		top: 1,
		behavior: 'smooth',
	})

}

//la fonction rechercher//

let searchMood = 'nom';


function getsearchMood(id) {
	if (id == 'byutili') {
		searchMood = 'nom';
		search.placeholder = "Search by nom d'utilisateur";
	}

	else {
		searchMood = 'serial';
		search.placeholder = "Search by serial number";
	}
	search.focus();
	search.value = '';
}

function searchData(value) {
	let vtable = '';
	if (searchMood == 'nom') {
		for (let i = 0; i < datamat.length; i++) {

			if (datamat[i].nom.includes(value)) {
				vtable += ` 
	           <tr>
			       <td>${datamat[i].nom}</td>
			       <td>${datamat[i].direction}</td>
			       <td>${datamat[i].site}</td>
			       <td>${datamat[i].materiel}</td>
			       <td>${datamat[i].datee}</td>
				   <td>${datamat[i].etat}</td>
			       <td>${datamat[i].serial}</td>
				   <td>${datamat[i].desc}</td>
				   <td><button onclick="deleteData(${i})"id="supprimer"><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px</button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px</button></td> 
				</tr> 
	
	` ;

			}

		}

	}
	else {
		for (let i = 0; i < datamat.length; i++) {

			if (datamat[i].serial.includes(value)) {
				vtable +=
					` 
	          <tr>
			       <td>${datamat[i].nom}</td>
			       <td>${datamat[i].direction}</td>
			       <td>${datamat[i].site}</td>
			       <td>${datamat[i].materiel}</td>
			       <td>${datamat[i].datee}</td>
				   <td>${datamat[i].etat}</td>
			       <td>${datamat[i].serial}</td>
				   <td>${datamat[i].desc}</td>
				   <td><button onclick="deleteData(${i})"id="supprimer"><img src="C:/Users/amarj/Desktop/monAPP/images/trash.png" width=30px</button></td>
			       <td><button onclick="updateData(${i})" id="miseajours"><img src="C:/Users/amarj/Desktop/monAPP/images/updated (1).png" width=30px</button></td> 
				   </tr> 
	
	` ;

			}

		}

	}

	document.getElementById('tbody').innerHTML = vtable;
}