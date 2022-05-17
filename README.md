# DESAFIO WEBJUMP

- Esse desafio foi de criar uma aplicação em PHP para realizar o CRUD nas tabelas product e category
- As tecnologias utilizadas foram:
- PHP 7.3
- MYSQL 8.0
- Composer para baixar as dependencias e realizar o autoload dos arquivos.


# FORMA DE RODAR O PROJETO:

- O projeto pode ser rodado em localhost realizando o clone deste repositorio.
- Assim será possivel rodar todo o projeto.
- Já a parte de update  eu não consegui fazer via interface, mas caso queira realizar testes com os metodos updatee vou explicar no passo a passo abaixo.

# FORMA DE RODAR O PROJETO VIA POSTMAN:

- Utilizando o POSTMAN, é possivel realizar todos os metodos da aplicação com as url:

# CREATE PRODUCT

- Basta acessar a url http://localhost/insertProduct
- Passar os parametros via POST: name, sku, price, description, qts, category
- Tera um resultado na tela informando se o produto foi cadastrado ou não.

# CREATE CATEGORY

- Basta acessar a url http://localhost/insertCategories
- Passar os parametros via POST: name, code
- Tera um resultado na tela informando se a categoria foi cadastrada ou não.

# READ PRODUCT 

- Basta acessar a url http://localhost/readprod via get 
- Aparecerá um json com os produtos cadastrados


# READ CATEGORY 

- Basta acessar a url http://localhost/readcat via get 
- Aparecerá um json com as categorias cadastradas

# UPDATE PRODUCT 

- Basta acessar a url http://localhost/updateproduct
- Passar os parametros via POST: id(Do produto que deseja atualizar) e os campos name, sku, price, description, qts, category
- Tera um resultado na tela informando se o produto foi atualizado ou não.

# UPDATE CATEGORY 

- Basta acessar a url http://localhost/updatecategory
- Passar os parametros via POST: id(Da categoria que deseja atualizar) e os campos name, code.
- Tera um resultado na tela informando se a categoria foi atualizada ou não.

# DELETE PRODUCT 

- Basta acessar a url http://localhost/proddelete
- Passar os parametro via POST: id(Da produto que deseja excluir).
- Tera um resultado na tela informando se a categoria foi excluido ou não.

# DELETE CATEGORY 

- Basta acessar a url http://localhost/catdelete
- Passar os parametro via POST: id(Da categoria que deseja excluir).
- Tera um resultado na tela informando se a categoria foi excluida ou não.