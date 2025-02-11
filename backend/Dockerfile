FROM node:18-alpine AS base
WORKDIR /app
COPY package.json pnpm-lock.yaml   ./
RUN npm i pnpm -g
RUN pnpm install --frozen-lockfile 
COPY html  ./html/
COPY index.mjs ./

##If there are any artifacts it will won't be included in finale build 
#Smallest possible runtime image
FROM gcr.io/distroless/nodejs18 AS prod 
WORKDIR /app
COPY --from=base /app /app
ENV NODE_ENV=production
EXPOSE 3000
CMD ["index.mjs" ]

