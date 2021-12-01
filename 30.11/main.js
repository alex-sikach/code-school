class State {
	constructor(options) {
		this.backgroundColor = options.backgroundColor;
		this.border = options.border;
		this.borderRadius = options.borderRadius;
	}
}
const green_state = new State({backgroundColor:'#6ace61',border:'10px solid #1a1a1a',borderRadius:'20%'});
const blue_state = new State({backgroundColor:'#617ace',border:'15px solid #fff',borderRadius:'30%'});
const red_state = new State({backgroundColor:'#f76f6f',border:'5px solid #000',borderRadius:'40%'});
const none_state = new State({backgroundColor:'#fff',border:'none',borderRadius:'50%'});
const states = [green_state, blue_state, red_state];
let state = none_state;
function stop() {
	setProperties(document.querySelector('.el').style, none_state);
}
stop();
let counter = 0;
function setProperties(el = document.querySelector('.el').style, stateDef=null) {
	if (stateDef == null) {
		const index = counter % states.length;//if(counter > 2)const index=counter;counter++;
		state = states[index];
		for (const key in state) {
			let val = state[key];
			el[key] = val;
		}
		counter++;
	} else {
		const state = stateDef;
		for (const key in state) {
			let val = state[key];
			el[key] = val;
		}
	}
}
let inter;
function interFunc() {
	setProperties();
	inter = setInterval(setProperties, 700);
}
document.querySelector('.el').onclick = () => {
	if (states.includes(state)) {
		state = none_state;
		stop();
		clearInterval(inter);
	} else {
		interFunc();
	}
}