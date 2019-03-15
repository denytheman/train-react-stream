- React client
	 /client
	npm start

- json server (database)
	/api
	npm start
	
	- this will start the server on port 3001

- node stream server (RTMP)
	/rtmpserver
	npm start

	- this will receive the stream at port 1935 and transmit on 8000

- Additionally need to setup OBS player to stream at link "rtmp://localhost/live" 
	with the stream key equal to the selected stream in the client app 
	(ex. 4 if the client app url is http://localhost:3000/streams/4)