Simple starting point for developing an express app with a postgres database.

From the root directory of this project, use `docker-compose up --build` to start everything up. Ctrl-c will stop it. After the first time, you can drop the --build.

While it is up, go to the IP of you docker container (as I am on Windows, I use docker-toolbox and it assigns it 192.168.99.100, I believe on Linux it will be localhost, not sure about OSX).

If needed, you can enter the docker container with `docker exec -it backend /bin/bash`

To reset the database data you can use `docker-compose down -v` from the root directory of this project. Note that this will also kill the node_modules folder, so use another --build command next time you bring it up.

To change the initial database setup, put your SQL code into the init.sql file. Then reset database data using the command above, and then do another up --build to bring it all back up.