FROM node:18-alpine AS base
WORKDIR /app
COPY package.json pnpm-lock.yaml   ./
RUN npm i pnpm -g
#RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile 
COPY . . 
RUN pnpm run build 

FROM nginx:alpine AS frontend-prod
COPY --from=base /app/dist /usr/share/nginx/html/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]