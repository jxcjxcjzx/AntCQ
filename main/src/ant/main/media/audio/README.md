语音识别的库

参照的是 JuliusJS, 


	// bootstrap JuliusJS
	var julius = new Julius();
	 
	julius.onrecognition = function(sentence) {
	    console.log(sentence);
	};
	 
	// say "Hello, world!"
	// console logs: `> HELLO WORLD`

需要使用一个音频处理库首先吸收解析音频数据，然后传入识别的js库。

	音频处理解析-- 音频流--- 识别库

