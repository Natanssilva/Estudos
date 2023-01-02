# Estudos sobre Javascript

## 🚀 Tecnologias estudadas e abordadas neste repositório:
- [JAVASCRIPT]
- [REACT]

## 📝 Sobre

- Repositório criado com finalidade didática, onde contém arquivos com explicações de sintaxe sobre a linguagem Javascript. Posteriormente conceitos de React JS também estarão aqui no repositório!
- Este repositporio também serve para praticar e estudar sobre versionamento com GIT

## Um pouco sobre GIT:

-Branch: é basicamente uma ramificação do projeto. Como se fossem linhas cronológicas mas NÃO necessariamente precisa continuar na mesma linha cronológica o projeto inteiro.

-Commit: é como se você estivesse falando para o GIT que é uma nova alteração/modificação do projeto. Como se estivesse salvando uma nova versão do projeto, por isso é interessante colocar nome nos commits.

-Merge: Junção da branch "alternativa" com a principal. Por exemplo, digamos que você criou uma branch (ramificação) fora da sua linha cronológica principal, ao utilizar o merge irá unir a ramificação com a linha principal do projeto ou até mesmo usar o Merge para unir uma ramificação com outra ramificação sem ser que sejam a linha prinicipal. Muito útil para alterar o mesmo arquivo que outra pessoa e ambas alterações serem salvas.

-Remote: faz com que o repositório da máquina vá para a plataforma que você queira hospedar, no caso atual, o Github. Por isso ao usar remote deve referenciar o link do repositório para assim, fazer essa conexão.

-Push: utilizado para colocar o commit que foi feito na máquina no remote, ou seja, no Github e assim irá alterar no site.

-Pull: utilizado para puxar oque está la no repositório do Github para sua máquina, exatamente ao contrário do Push.

# 📝 Comandos GIT para criar um novo repositório na linha de comando:
    - echo "# nome-rep" >> README.md
    - git init
    - git add README.md  (opcional)
    - git commit -m "first commit"
    - git branch -M main
    - git remote add origin 'URLNomeRepositório.git' https://github.com/x/y.git
    - git push -u origin main

## 📝 Comandos GIT no terminal para fazer os commits:
    - git add . 
    - git commit -m "nome do commit"
    - git branch -M main / se estiver na main
    - git push -u origin main
## 📝 Caso houver erros como:
    - error: failed to push some refs to 'URL'
    
            COMANDOS PARA RESOLVER:

    - git remote rm origin
    - git pull --rebase origin main // caso esteja na main
    - git push -u origin main // processo normal para finalizar

# 📝 O que é React JS e qual problema ele resolve?
- React JS é uma biblioeteca criada pelo Facebook para criar interfaces de usuários, ou seja, telas de usuários.
        
    -A biblioteca é baseada em "Componentes", no qual podem ser explicados brevementes como cada elemento de um site, por exemplo um Header, onde terá alguns       botões de menu. Mas não se esqueça que dentro de um componente pode haver outro componente.
    
# Para entender melhor, entenda um pouco mais sobre aplicações web:
- As aplicações web são divididas em 2 partes: "Front-End e Back-End"

        -"Back-End": Server Side(lado do servidor), trabalha com tecnologias como PHP, NodeJS, C# e Python.
        
        -"Front-End": Client Side(lado do cliente), é a parte mais visual do sistema/aplicação, por exemplo de um site. Originalmente trabalha com tecnologias como HTML,CSS e Javascript como base.

    -Dito isso, o ReactJS atua no Front-End, aqui cito algumas funcionalidades e problemas que ele resolve:
    
        -Maior poder de desenvolvimento que o JS puro apenas;
        -Manipula DOM;
        -É utilizado para construção de projetos SPA´s.


- O que são SPA´s ?
        
    -Tradicionalmente, em uma aplicação web renderizada pelo servidor, nós possivelmente teríamos um modelo MVC, e cada View deste modelo seria responsável por criar uma tela. Um exemplo clássico de uma aplicação web. Uma SPA é uma forma diferente de trabalhar com uma aplicação.

    -Com essa tecnologia, temos apenas uma página principal e todas as outras serão escritas e modificadas pelo JavaScript.
            
     -De acordo com essa abordagem: O Back-End ao invés de retornar o próprio HTML formatado, retorna os dados no formato JSON. Essas são as nossas                  famosas API's. E assim, o Back-End fica totalmente separado do Front-End. 

# Como criar um projeto em React?

        -Baixar NodeJS, junto ao NPM (Node package Manager), gerenciador de pacotes.
        -Pode criar a partir do CMD dentro da pasta de preferência.
        -Pode criar pelo terminal do editor de código(IDE) dentro da pasta de preferência.

    -COMANDO:

        -npx create-react-app my-app
        -cd my-app
        -npm start    (para criar um servidor local no navegador)

 # Entendendo props e componentes em ReactJS

    -Componentes são como funções Javascript. Aceitam entradas arbitrárias chamadas "props" e retornam elementos React que descrevem oque deve aparecer na tela.
    -Componentes mais usados:
        -Componentes de classe (class component)
        -componente funcional sem estado(state)








