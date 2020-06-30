from nile import get_distance, format_price, SHIPPING_PRICES
from test import test_function


def calculate_shipping_cost(from_coords, to_coords, shipping_type='Overnight'):
    #from_lat, from_long = from_coords
    #to_lat, to_long = to_coords
    #get_distance(from_lat, from_long, to_lat, to_long)
    distance = get_distance(*from_coords, *to_coords)
    shipping_rates = SHIPPING_PRICES[shipping_type]
    price = distance * shipping_rates
    return format_price(price)

# Define calculate_driver_cost() here


def calculate_driver_cost(distance, *drivers):
    cheapest_driver = None
    for driver in drivers:
        driver_time = driver.speed * distance
        driver_salary = driver_time * driver.salary
        if cheapest_driver is None or cheapest_driver_price > driver_salary:
            cheapest_driver = driver
            cheapest_driver_price = driver_salary

    return cheapest_driver_price, cheapest_driver


def calculate_money_made(**trips):
    total_money_made = 0
    print(trips)
    for trip_id, trip in trips.items():
        trip_revenue = (trip.cost - trip.driver.cost)
        total_money_made += trip_revenue
    return total_money_made


def main():
    test_function(calculate_shipping_cost)
    test_function(calculate_driver_cost)
    test_function(calculate_money_made)


if __name__ == '__main__':
    main()
