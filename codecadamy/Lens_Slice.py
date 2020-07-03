# codecademy using only lists to set up a dictionary problem.

toppings = ['pepperoni', 'pineapple', 'cheese',
            'sausage', 'olives', 'anchovies', 'mushrooms']
prices = ['2', '6', '1', '3', '2', '7', '2']

num_pizza = len(toppings)
print("We sell {0} different kinds of pizza!".format(num_pizza))

pizzas = list(zip(prices, toppings))
pizzas.sort()
cheapest_pizza = pizzas[0]
priciest_pizza = pizzas[-1]
three_cheapest = pizzas[0:3]
num_two_dollar_slices = prices.count("2")
print(priciest_pizza)
print(three_cheapest)
print(num_two_dollar_slices)
print(cheapest_pizza)
print(pizzas)
