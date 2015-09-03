the functional lib in AntCQ project 
===


this lib mainly provides functional APIs 

what is this lib for ?
--

functional programming is the theme here, js does not have inbulit support for this, but the scheme and rules in js makes it possible to introduce one into this. 

so the main functional programming features are listed as below , along with some samples :

the web-link ref to here is  [insights.thoughtworkers.org/functional-javascript]( functional-javasctipt )

	首先介绍lambda， lambda是一种x-y的映射关系， 或者说是匿名函数， 类似于下述式子：
	multiple(x,y) = x*y 写成 (x,y) -> x*y
	
	javascript 中函数是一等公民， 所以可以类比于值的用法。
	
	接着是高阶函数， 也就是接受参数为一个函数， 返回另一个函数。

	柯里化 柯里化主要是使得参数可配置， 参数类型可以是一个特定的函数， 以下是一个柯里化的接口：

	var multiple = function(a){
		return function(b){
			return +b*a+''
		}
	}
	
	var plus = function(a){
		return function(b){
			return (+b)+a+''
		}
	}

	var concatArray = function(chars,stylishChar){
		return chars.map(stylishChar)
		.reduce(function(a,b){
			return a.concat(b)
		})		
	}

	注意到这里的map 也是函数式编程中十分常用的一个概念。
	在上述的接口进行使用的时候， 如下所述：
		
	
		