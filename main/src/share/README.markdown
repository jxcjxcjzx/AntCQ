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
  

		function Super(){
			this.colors = ["red","blue"];
		}

		function Sub(){
			super.call(this);
		}

	在这里子类的原型是指向父类的。 
	原型连继承使得子类可以获得父类的属性值。
	可以通过两种方式确定原型和实例之间的关系:

		instanceof  和 isPrototypeof 方法

	使用原型继承有一些问题 ：
	字面量重写原型会中断关系， 使用引用类型的原型， 并且子类无法给超类型传递参数。

	所以有了借用构造函数的技术：

		function Parent(age){
			this.name = [xxx];
			this.age = age;
		}
		
		fucntion Child(age){
			Parent.call(this.age);
		}

	上述方式解决了问题但是不能复用， 因为没有原型。

	故而出现了组合继承的方式：

		function Parent(age){
			this.name = [xxx];
			this.age = age;
		}

		Parent.prototype.run = function(){
			return this.name + this.age;
		}

		function Child(age){
			Parent.call(this.age);
		}

		Child.prototype = new Parent();

	组合式继承较为常用，但是也有一些问题 ，就是超类会在在使用过程中被调用两次。

	接下来是最后一种继承方式 ---  寄生式继承， 其关键在于使用了   

		inheritPrototypr(Parent,child) 方法实现了继承

	使用了缓存了的parent 对象，从而减少了一次调用。 
	
	小tip ：
		call 和 apply可以用来改变函数中的this指向，从而得到不同的结果。
		