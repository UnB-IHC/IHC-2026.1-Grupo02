## Pré-Requisitos

Antes de começar, você precisará ter instalado em sua máquina:
1. **Python 3** 
2. **PIP** 

```bash
    python3 --version
    python3 -m pip --version
```

Caso algum deles nao estiver instalado, intale ante de continuar.

## Passo a Passo para Instalação

Abra o terminal do seu computador na pasta raiz do projeto e siga as etapas abaixo:

### 1. Criar um Ambiente Virtual (Recomendado)
Para isolar as dependências do projeto e evitar conflitos no seu sistema, crie e ative um ambiente virtual (`venv`):

* **No macOS/Linux:**
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```
* **No windows**
  ```bash
  python -m venv venv
  venv\Scripts\activate
  ```

### 2. Instalar o MkDocs e o Tema Material
Com o ambiente virtual ativo, instale o framework principal e o tema visual rodando o seguinte comando:

  ```bash
  pip install mkdocs mkdocs-material
  ```

## Como Rodar Localmente
Depois de instalar os pacotes, você pode levantar o servidor de desenvolvimento local para visualizar o site e testar as interações em tempo real.

### 1. Iniciar o Servidor
Na raiz do projeto, execute:

  ```bash
  mkdocs serve
  ```

### 2. Acessar no Navegador
O terminal exibirá algumas mensagens informando que o site foi compilado com sucesso. Abra o seu navegador e acesse o endereço:

```bash
  http://127.0.0.1:8000/
  ```