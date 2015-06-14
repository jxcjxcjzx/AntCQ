// test the events in the window (document )

var log = document.getElementById('log'),
	i = '',
	out = [];

for(i in window){
	out[out.length] = i;
}

log.innerHTML = out.join(',');
