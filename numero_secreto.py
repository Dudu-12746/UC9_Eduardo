import random

numero_secreto = random.randint(1, 5)
#print(numero_secreto)
numero_de_tentativas = 0

print("Bem-vindo ao jogo da adivinhação!")


while True:
    palpite = int(input("\nDigite seu palpite: "))
    print(palpite)
    numero_de_tentativas += 1

    if palpite == numero_secreto:
        print("👋👋👋👋👋👋👋👋👋👋👋👋")
    elif(palpite < numero_secreto):
        print("O número secreto é maior.")
    else:
        print("O número secreto é menor.")