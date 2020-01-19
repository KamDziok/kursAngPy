const polish = ["ramię, ręka", "kostka", "pacha", "plecy", "broda", "ciało", "siedzenie, tyłek", "biust", "łydka", "kieł", "policzek", "klatka piersiowa", "broda, podbródek", "cera, karnacja", "krocze", "ucho", "małżowina uszna", "łokieć", "oko", "brew", "rzęsa ", "powieka", "twarz", "palec ( u ręki )", "pięść", "stopa", "przedramię", "czoło", "pieg", "grzywa", "włos/włosy", "ręka, dłoń", "głowa", "pięta", "biodro", "szczęka", "kolano", "noga", "warga", "wąsy", "usta, buzia", "paznokieć", "szyja", "sutek", "nos", "dłoń", "blizna", "goleń", "ramię", "skóra", "brzuch", "skroń", "udo", "kciuk", "palec ( u nogi )", "język", "ząb", "zmarszczka", "nadgarstek"];

const english = ["arm ", "ankle ", "armpit ", "back ", "beard ", "body ", "bottom ", "bust ", "calf ", "canine tooth ", "cheek ", "chest ", "chin ", "complexion ", "crotch ", "ear ", "earlobe ", "elbow ", "eye ", "eyebrow  ", "eyelash ", "eyelid ", "face ", "finger ", "fist ", "foot ", "forearm ", "forehead ", "freckle ", "fringe ", "hair ", "hand ", "head ", "heel ", "hip ", "jaw ", "knee ", "leg ", "lip ", "moustache ", "mouth ", "nail ", "neck ", "nipple ", "nose ", "palm ", "scar ", "shin ", "shoulder ", "skin ", "stomach ", "temple ", "thigh ", "thumb ", "toe ", "tongue ", "tooth ", "wrinkle ", "wrist "];

var i = 0;

function next(){
	if(i < polish.length-1){
		i++;
	}
	else{
		i = 0;
	}
	show(i);
}

function previous(){
	if(i != 0){
		i--;
	}
	else{
		i = polish.length-1;
	}
	show(i);
}

function show(i){
	document.getElementById("polish").innerHTML = polish[i];
	document.getElementById("english").innerHTML = english[i];
	var x = document.getElementById("english").style.visibility = "hidden";
}