// RESTful url design framework 
// guidelines 
/*

	{
		"current_user_url" : "http://api.hostname.com/user",
		"authorizations_url" : "http://api.hostname.com/authorizations"
		// ...
	}
	
	{
		"message" : "Request authorization",
		"documentation_url" : "http://developer.hostname.com/v3"
	}

	
	frequent---use----apis :
		GET  ---- SELECT ( in sql action )
		POST  ---- CREATE
		PUT  ----- UPDATE
		PATCH  ---- UPDATE
		DELETE  ---- DELETE 
	
	
	RETURN results :	
		get /collection : return list of resources 
		get /collection/resource  : return single resource in the list 
		post /collection
		put /collection/resource
		patch /collection/resource
		delete /collection/resource
		
	for more information , refer to RESTful api and `````Hypermedia API`````
	
	
	201 	CREATED [POST/PUT/PATCH]
	202		ACCEPT 
	204     NO CONTENT  [DELETE]
	400 	INVALID REQUEST [POST/PUT/PATCH]
	401 	Unauthorized 
	403 	Forbidden 
	404  	NOT FOUND 
	406 	Not Acceptable  [GET]
	410 	Gone  [GET]
	422 	Unprocessable entity  [POST/PUT/PATCH]
	500		INTERNAL SERVER ERROR 
	
	
	// filtering information 
	?limit=10 
	?offset=10
	?page=2&per_page=100
	?sortby=name&order=asc
	?animal_type_id=1

*/