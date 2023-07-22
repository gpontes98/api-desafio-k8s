FROM node:18.16.0

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila o código TypeScript
RUN npm run build

# Expõe a porta em que a aplicação está ouvindo
EXPOSE 3000

# Define o comando para iniciar a aplicação quando o contêiner for executado
CMD ["npm", "start"]
