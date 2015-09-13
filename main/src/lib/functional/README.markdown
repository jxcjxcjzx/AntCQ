the functional lib in AntCQ project 
===


this lib mainly provides functional APIs 

what is this lib for ?
--

functional programming is the theme here, js does not have inbulit support for this, but the scheme and rules in js makes it possible to introduce one into this. 

so the main functional programming features are listed as below , along with some samples :

* the web-link ref to here is  [insights.thoughtworkers.org/functional-javascript]( functional-javasctipt )

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
		
	
* reduce, map, filter,first, rest  及其他  
	函数式编程中，很迷人的一点是map-reduce，   
	reduce从字面意思上看就是减少参数个数，其实却是是这样，这个减少最后就是只剩下一个了， 例如：

		def f(x,y) : return x+y;   // python 接口
		调用reduce(f,[1,3,55,7,9]), 得到的就是所有元素的和

	接下来介绍filter函数  
	filter接收一个函数f和一个list，用f对每一个元素进行判断，返回true或是false， 也就是说，f函数的返回值就是真或是假，也就起到一个过滤的下作用。不详细说了。


* in additon, curry(柯里化函数),pipe 及其他。（参考 Eweda/Ramda）

