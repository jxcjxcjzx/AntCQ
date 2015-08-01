// some sorting algorithms 


var SORTING_ALGORITHMS = {
	// 一些排序的方法
	// this works !! 
	INSERT : function(arr,len){
		// 直接插入排序
		var i,j;
		var firstelement = arr[0];
		for(i=1;i<len;i++){
			j = i+1;
			if(arr[j]<arr[i]){
				arr[0] = arr[j]; // 存储待排序元素
				// for debug 
				console.log(arr);
				while(arr[0]<arr[i])  // 查找在有序区中的插入位置，同时移动元素
				{
					arr[i+1] = arr[i];  // 移动
					// for debug 
					console.log(arr);
					i--;  // 查找					
				}
				arr[i+1] = arr[0];
				// for debug 
				console.log(arr);
			}
			j = i-1;  // 还原有序区指针			
		}
		// adapt for first element 
		
		{
			i = 1;
			while(firstelement>arr[i]&&i<len){
				arr[i-1] = arr[i];
				i++;
			}
			arr[i-1] = firstelement;
		}	
		
	},
	
	
	QUICK : function(arr,start,end){
	// not have debugged this , debug this later 
	// the original source code is C code, and arr is a pointer 
		if(arr == null || end <=start)
			return;
		var temp = arr[start];
		var starttemp = start;
		var endtemp = end;
		end++;
		while(start<end){
			while(arr[++start]<temp && start<=end);
			while(arr[--end]>temp && start<=end);
				if(start<=end){
					swap(arr[start],arr[end]);
				}
				else{
					swap(arr[end],arr[starttemp]);
					QUICK(arr,starttemp,end-1);
					QUICK(arr,end+1,endtemp);
				}
		}	
	},

	
	SIMPLE_QUICK : function(A,){
		// this one is ok 
		// A is int array, low is lower index, high is higher index 
		if(low<high)
		{
		var temp,t=A[low];
		var l = low,h=high;
		while(l<h)
		{
		while(A[l]<t) l++;
		while(A[h]>=t) h--;
		if(h>l)
		{
		temp = A[l];
		A[l]=A[h];
		A[h] = temp;
		}
		}
		SIMPLE_QUICK(A,low,l-1);
		SIMPLE_QUICK(A,l+1,high);
		}
	
	},
	

	MERGE : function(){
	
	},

	SHELL : function(){
	
	},
	
	BASE : function(){
		// 基数排序
	},
	
	SELECT : function(){
		// 选择排序
	},
	
};


module.exports = {

	SORTING_ALGORITHMS : SORTING_ALGORITHMS

}