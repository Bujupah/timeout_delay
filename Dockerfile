FROM jaegertracing/all-in-one:1.9

ENV PORT=3000
WORKDIR /app

COPY ./app.js ./
COPY ./package.json ./

RUN yarn install

EXPOSE 5775 6831 6832 5778 16686 14268 9411
ENV COLLECTOR_ZIPKIN_HTTP_PORT=9411
