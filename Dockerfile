FROM openjdk:17
VOLUME /tmp
ARG JAR_FILE

COPY target/docker-mongodb-demo-0.0.1-SNAPSHOT.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]