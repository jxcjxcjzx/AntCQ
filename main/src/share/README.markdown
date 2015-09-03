the share lib 
===

the share part for project AntCQ 

what is this lib for ? 
--

the share lib plays some similar part as lib common or core, but the share part plays as a more general way rather too common, nor too central, so maybe it will include some lib or functionality that is specially used in this project only, and maybe other projects can use this lib , or not. 

about the files in this dir 
--

here are some introduction to source files under this dir :

* definitions : the definitions functions maybe used like in android, codes may be config in config file, will use some syntax parsing technology , config file is like this :  

			
		*one function*  should contains :
	--
	
		#function name#
			@print-vars@
		#code#
			@{
			$(foreach var,$(1), \
			  $(info $(var):) \
			  $(foreach word,$($(var)), \
				$(info $(space)$(space)$(word)) \
			   ) \
			 )
			}@		// translate this later 

	so ## wrap the tag part, and @@ wrap the value part, and the codes contained will be loader by one parser  customed. 

* inherit , the inherit concept is not natural in javascript, cause in js function is mainly concept, 所以如果要在javascript中使用继承就需要另外实现， 用wrapper的方式， 在js中实现继承可以通过js的原型prototype或是用apply和call去进行， apply和call的方式在AntCQ中已经进行了一定的探索，事实证明，这样的实现是可以进行的。

	目来来看，继承有这样几种： 原型式继承和类式继承。
	严格的类式继承不常见， 一般是组合着用 ： 