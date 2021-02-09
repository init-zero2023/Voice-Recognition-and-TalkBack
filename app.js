const btn = document.querySelector('button');
const content = document.querySelector(".content")
//
const greetings = ["Im godd you little piece of love", "Doing good homeboii", "leave me alone"];

const weather = ["Weather is fine", "It is raining outside"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = function(){
	console.log('voice is activated, you can use microphone');
};

recognition.onresult = function(event){
	const current = event.resultIndex;

	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

// add the listener to button

btn.addEventListener('click',()=>{
	recognition.start();
});



function readOutLoud(message){
	const speech  = new SpeechSynthesisUtterance();

	speech.text ='i dont know what you said';

	if(message.includes('how are you')){
		const finalText = greetings[Math.floor(Math.random()* greetings.length)];
		speech.text = finalText;
	}else if(message.includes("weather")){
		const finalText = weather[Math.floor(Math.random()* weather.length)];
		speech.text = finalText;
	}
	speech.volume = 1;
	speech.rate = 0.8;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}