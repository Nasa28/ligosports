
FROM alpine

EXPOSE 5000

LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.docker.cmd="docker run -d -p 5000:5000 --name alpine_ligosport"

RUN apk add --no-cache \
    git \
    make \
    nodejs npm \
    python3
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .

CMD /wait && npm start