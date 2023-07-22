
# Desafio Kubernetes com API Node.js

Este repositório contém um projeto de demonstração que utiliza o Kubernetes para implantar e gerenciar uma API Node.js em um cluster local.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/gpontes98/api-desafio-k8s
```

Crie o ConfigMap para a API usando o arquivo api-desafio-configmap.yaml

```bash
  kubectl apply -f api-desafio-configmap.yaml
```

Crie o Deployment da API usando o arquivo deployment.yaml:

```bash
  kubectl apply -f deployment.yaml
```

Crie o Service para acessar a API usando o arquivo api-desafio-svc.yaml

```bash
  kubectl apply -f api-desafio-svc.yaml
```

Crie o Deployment da API usando o arquivo deployment.yaml:

```bash
  kubectl apply -f deployment.yaml
```


## Melhorias

O Kubernetes agora está configurado para verificar a saúde da API usando Probes

A API possui rotas de Probe que retornam status 200 e a mensagem "ok". As Probes estão configuradas no arquivo deployment.yaml.

O Kubernetes monitorará a saúde da API e tomará ações apropriadas em caso de problemas.


## Aprendizados

Este é um projeto de demonstração que me ajudou a entender os conceitos básicos do Kubernetes e como implantar uma API Node.js nele. Foi importante para explorar mais recursos do Kubernetes e ajustar o projeto de acordo com suas necessidades.🚀


## Diário de Bordo - Estudos
1 - Criei a imagem da API e a subi no DockerHub.

2 - Criei um arquivo de POD chamado "api-desafio-pod.yaml" que utiliza a imagem e aponta para a "containerPort" da API.

3 - Criei um "Service" para acessar o pod chamado "api-desafio-svc", que estará disponível na porta 3000 e tem como alvo (target) a porta 3000 do pod.

4 - Verifiquei se eles estavam rodando corretamente através dos comandos "kubectl get pods" e "kubectl get services".

5 - Rodei o comando "kubectl port-forward svc/api-desafio-svc 3000:3000" para redirecionar a porta do meu computador local para o cluster do Kubernetes.

6 - Acessei a API via "localhost:3000/car".

Atualização dia 2
7 - Instalei o k9s (CLI muito bom para visualizar os pods em execução).

8 - Criei um "ConfigMap" que expõe uma variável de ambiente chamada "PORT" com o valor 4000.

9 - Recriei o POD e o Service.

Atualização dia 3
10 - Deixei de usar o arquivo "pod.yaml" e criei um arquivo "deployment.yaml".

11 - Adicionei ao manifesto "deployment.yaml" as "Probes", que são rotas de verificação do status de saúde do app.
