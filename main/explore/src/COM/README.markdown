about this config lib 
---

this lib aims at provide exported require for outside libs , 
well, this is not hard cause this work mainly in several steps :

* parse the input addr string and get the addr of the lib 
* require the lib and return a ref to this lib 


seems simple, right ?   

but here one config file is added, which is com.config.   

the content is like this :  

	*dir*
		*root*
			@../../../@
		

	*name*
		*dir*
			*src*
				@src@
			
	*time*
		*login*
			*latest*
				@2015-08-21@
			

and attention to the first several lines content :  
	CONSTS 
	^#$
	
	#seperator#
		#*#
	
	
	*value* 
		#@#
		
the first line is CONSTS, which is reserved contents for parsing ,   
and ones get this possible, the second line is seperator , using the   
first line's CONSTS, the parser get the value of *seperator* and *value*,  
and this two values now is ready for parsing, then everything else   
is possible for value-retrive.  

like this :  

	*time*
   		*login*
       		*latest*
            	@2015-08-21@

from the first three lines get the property name, and value.   

so this is it, implement it ! 