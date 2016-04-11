# node-docker-simpleapp
Simple Node.js web app connected to a mongo database

To execute the testing environment:

docker-compose -f docker-compose.test.yml -p ci up -d

Check the output of the sut (system under tests) container by executing:

docker logs -f ci_sut_1

