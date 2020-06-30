hairstyles = ["bouffant", "pixie", "dreadlocks",
              "crew", "bowl", "bob", "mohawk", "flattop"]
prices = [30, 25, 40, 20, 20, 35, 50, 35]
last_week = [2, 3, 5, 8, 4, 4, 6, 2]

total_price = 0

for i in prices:
    total_price += i
print(total_price)

new_prices = [i - 5 for i in prices]
print(new_prices)

average_price = total_price / len(prices)
print("Average Haircut Price: {0}".format(average_price))

total_revenue = 0
for i in range(len(last_week)):
    total_revenue += last_week[i]*prices[i]

print("Total Revenue: {0}".format(total_revenue))

average_daily_revenue = total_revenue / 7
print(average_daily_revenue)

cuts_under_30 = [i for i in new_prices if i < 30]
print(cuts_under_30)
