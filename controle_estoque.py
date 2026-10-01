# CONTROLE DE ESTOQUE

def atualizar_estoque(estoque, vendas):
    # O estoque diminui conforme ocorrem vendas
    estoque_atual = estoque - vendas
    return estoque_atual

def verificar_reposicao(estoque, estoque_minimo):
    if estoque < estoque_minimo:
        print("Atenção! É necessário repor o estoque.")
    else:
        print("Estoque suficiente.")

# PROGRAMA PRINCIPAL

produto = input("Digite o nome do produto: ")
estoque_inicial = int(input("Digite o estoque inicial: "))
vendas = int(input("Digite a quantidade de vendas: "))
estoque_minimo = int(input("Digite o estoque mínimo: "))

print("\n--- RESUMO DO ESTOQUE ---")
print(f"Produto: {produto}")
print(f"Estoque inicial: {estoque_inicial}")
estoque_final = atualizar_estoque(estoque_inicial, vendas)
print(f"Estoque final: {estoque_final}")
verificar_reposicao(estoque_final, estoque_minimo)


