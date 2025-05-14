Como Rodar os Projetos

Clone o repositório:

git clone https://github.com/seu-usuario/checkers-board.git
cd checkers-board

Instale as dependências:

npm install

Execute o projeto:

npm start

O projeto será iniciado e poderá ser acessado no navegador em http://localhost:3000/.

Principais Pontos da Estilização

Tabuleiro: O tabuleiro é estilizado utilizando CSS modular (CheckersBoard.module.css), garantindo isolamento de estilos.

Cores das casas: As casas do tabuleiro alternam entre claro (.light) e escuro (.dark) para criar o padrão de damas.

Peças: As peças são estilizadas com .piece, e suas cores são determinadas por .black e .white, posicionadas dentro das casas escuras.

Responsividade: A estilização foi feita para garantir que o tabuleiro se ajuste corretamente em diferentes tamanhos de tela.