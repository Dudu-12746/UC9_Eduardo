# CRIAÇÃO DAS FUNÇÕES

def calcular_faturamento_liquido(vendas_brutas, taxa_imposto, custos_operacionais):
    # Calcula o imposto sobre as vendas
    valor_imposto = vendas_brutas * taxa_imposto
    # Calcula o faturamento líquido deduzindo impostos e custos
    faturamento_liquido = vendas_brutas - valor_imposto - custos_operacionais
    return faturamento_liquido

def verificar_bonus(faturamento, meta):
    # Verifica se o faturamento atingiu a meta para liberar o bônus
    if faturamento >= meta:
        print("Meta atingida! Bônus liberado.")
    else:
        print("Meta não atingida.")

# PROGRAMA PRINCIPAL
vendas_loja =  45000 # Valor das vendas brutas
imposto =    0.10# 10%
custos =     10500# Custos operacionais
meta_ano =    -3000# Meta estipulada
print("Iniciando análise financeira...")

faturamento_final = calcular_faturamento_liquido(vendas_loja, imposto, custos)
print(f"Faturamento Líquido Calculado: R$ {faturamento_final}")

verificar_bonus(faturamento_final, meta_ano)

