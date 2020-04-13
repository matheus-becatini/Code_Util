from datetime import date

DIAS = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-Feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
]

d=26
m=8
a=2019

data = date(year=a, month=m, day=d)
print(data)

indice_da_semana = data.weekday()
print(indice_da_semana)

# dia_da_semana = DIAS[indice_da_semana]
# print(dia_da_semana)

numero_do_dia_da_semana = data.isoweekday()
print(numero_do_dia_da_semana)