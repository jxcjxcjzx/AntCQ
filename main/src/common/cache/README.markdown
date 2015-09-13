the cache dir in common ant 
==

this is implementation for cache.js outside, provide caching service. move it to the service layer later. 

refs comes from 
--

the httpCache, and in net lib the cache will also be needed.   
the httpcache will contains several types of caches :  

* simplecache , which will provide interface like the following listed :  

		get, put(cacheobj) , setcache,  
		setvalidtime, gethitrate   
		getsize, containskey ,entryset 

* preloadDataCache 
* imagememorycache
* httpcache
* imggecache 
* ....

plus the type of cache to build : （参照猿题库的方法）

* 支持按照时间缓存网络请求内容
* 支持按照版本号缓存网络请求内容
* 协助文件断点续传，批量网络请求发送，为网络请求中途修改或加上一些参数