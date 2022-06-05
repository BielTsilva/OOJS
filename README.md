# OOJS
Orientação a objetos 

 Atividade: Conta Bancária 

  Nessa atividade vamos testar os conceitos de orientação a objetos simulando a criação de diversos
tipos de contas bancárias e operações disponíveis em cada uma.

 - crie a classe _contaBancaria_, que possui os parâmetros _agencia_, _numero_, _tipo_ e _saldo_.
 - dentro de _contaBancaria_, construa o getter e o setter de saldo.
 - dentro de _contaBancaria_, crie os métodos _sacar_ e _depositar_.
 - crie uma classe-filha chamada _contaCorrente_ que herda todos esses parâmetros e ainda possua o parâmetro _cartaoCredito_.
 - ainda em _contaCorrente_, construa o getter e o setter de _cartaoCredito_.
 - ainda em _contaCorrente_, faça com que o tipo seja _'conta corrente'_ por padrão.
 - crie uma classe-filha chamada _contaPoupanca_ que herda todos os parâmetros de _contaBancaria_
 - crie uma classe-filha chamada _contaUniversitaria_ que herda todos os parâmetros de _contaBancaria_.
 - faça com que o método _saque_ de _contaUniversitaria_ apenas seja capaz de sacar valores menores que 500 reais.
