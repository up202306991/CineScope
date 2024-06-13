const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const searchTerm = searchInput.value;

  // Lógica para realizar a pesquisa com o termo searchTerm
  // (Você precisará implementar essa parte de acordo com a sua estrutura de dados e como você deseja exibir os resultados)

  console.log('Termo de pesquisa:', searchTerm); 
});
