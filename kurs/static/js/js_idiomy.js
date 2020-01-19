const english = ["A-1<br>This hunters' stew is really A-1!"," about time<br>It's about time you got up!", "accidentally-on-purpose<br>I was sure it was done accidentally-on-purpose.", "ace out<br>Boeing Co. aces out General Dynamics for the first big defense deal.", "across the board<br>The President wanted taxes lowered across the board.", "add fuel to the flame<br>By laughing at Ted, Bob added fuel to the flame.", "afraid of one's shadow<br>She won't stay here at night; she's afraid of her own shadow.,", "all along<br>I knew all along that we would win.", "at (on) the tip of one's tongue<br>I have his name on the tip of my tongue.", "at this rate<br>Hurry up! We'll never get there at this rate.", "at times<br>At times I wish I had never come here."];

const polish = ["Ten bigos jest naprawdę pierwsza klasa! ", "Najwyższa pora żebyś wstał! ", "Jestem pewien, że to zostało zrobione tylko niby przypadkowo. ", "Firma Boeing przebija General Dynamics w pierwszym dużym kontrakcie obronnym. ", "Prezydent chciał obniżenia podatków dla każdego bez wyjątku.. ", "Śmiejąc się z Teda, Bob dolał oliwy do ognia. ", "Ona nie zostanie tutaj w nocy; ona boi się własnego cienia. ", "Wiedziałem przez cały czas, że wygramy. ", "Mam jego nazwisko na końcu języka. ", "Pospiesz się! Nigdy tam nie dotrzemy w takim tempie.", "Czasami wolałbym, żebym tutaj nigdy nie przyszedł. "];

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
	document.getElementById("polish").innerHTML = english[i];
	document.getElementById("english").innerHTML = polish[i];
	var x = document.getElementById("english").style.visibility = "hidden";
}