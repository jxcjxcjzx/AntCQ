ref dir in lib/net dir 
==

refs from other languages and libraries about how to retrive net datas and the interfaces provided . 

about the net interface 
--

网络最重要的部分就是获取需要的资源，-- 用最快的和最高效的方式， 例如，在shell中（linux os） 获取某一个网站的所有资源的命令如下：

	wget --random-wait -r -p -e robots=off -U mozilla http://www.example.com 

但是个别网站有防爬取的功能，所以使用的使用需要注意这一点。 尽管如此，这个接口仍旧足够的强大， 以至于值得被模仿。

当然也别忘了 curl 命令。