FROM openjdk:8-jdk-alpine
ADD target/docker-0.0.1-SNAPSHOT.jar docker-0.0.1-SNAPSHOT.jar
EXPOSE 8083
ENTRYPOINT ["java","-jar","docker-0.0.1-SNAPSHOT.jar"]