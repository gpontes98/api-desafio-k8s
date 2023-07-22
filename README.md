Histórico estudo:
1 - Criei a imagem da API e subi no dockerhub.
2 - Ccriei um arquivo de POD api-desafio-pod.yaml que usa a imagem e aponta para a containerPort da api.
    2.1 - Rodei o comando kubectl apply -f pod-api.desafio-pod.yaml para startar o pod.
3 - Criei uma service para acessar o pod. api-desafio-svc que vai estar disponível na porta 3000 e tem como target a porta 3000 do pod.
    3.1 - Rodei o comando kubectl apply -f api.desafio-svc.yaml para startar a service.
4 - Verifiquei se estavam rodando corretamente através dos comandos kubectl get pods e kubectl get services
5 - Rodei o comando kubectl port-forward svc/api-desafio-svc 3000:3000 que redireciona a porta do meu computador local e o cluster do Kubernetes.
6 - Acessei a api via localhost:3000/car


Atualização dia 2
7 - Instalei o k9s (CLI muito bom para ver os pods em execução)
8 - Criei um configmap que expoe uma variavel de ambiente PORT 4000
    8.1 Rodei o comando  kubectl apply -f api-desafio-configmap.yaml para aplicar o configmap (Antes da criação do pod, foi preciso deletar o pod)
9 - Recriei o POD e a Service.


Atualização dia 3
10 - Deixei de usar o arquivo pod.yaml e criei um arquivo deployment.yaml
    10.1 - Configurei o número de replicas para 3.
    10.2 - Utilizei a configmap criada.
11 - Adicionei ao manifesto deployment.yaml as probes, que são rotas de verificação de status de saude do app.
    11.1 - Atualizei a API para ter rotas de probes, apenas retornando status 200 e uma mensagem "ok"

    