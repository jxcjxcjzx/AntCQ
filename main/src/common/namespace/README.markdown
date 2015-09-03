namespace lib dir 
===

 now namespace comes here, fully support! 

why is this lib needed ? 
--
well, just becuase if introduced, 

* there is no need to worry about the local-global 
 difference between variables anymore.
* next time when using namespace or require, just feel free, and think in the way which should be. 


how is the namespace function provided ? 
--
that's a bit complicate to clear, firstly the ref is from the thread model in linux system , like this :

	static struct thread {

		const char *const filename;	
		size_t buf_size;
	
		ssize_t(*in)(struct thread*,void*,sise_t);
		const char* const in_name;

		// same as out, thing 
		...
		
		int fd;
		pthread_t id;
		void *buf;
		sszie_t status;

	}threads;

as in linux , one thread is linked with a file in system, the same will be here for namespace item in AntCQ system. 


