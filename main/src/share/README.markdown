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