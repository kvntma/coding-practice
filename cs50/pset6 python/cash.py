def return_coins(change):
    quarters = change//25
    dimes = (change % 25) // 10
    nickels = ((change % 25) % 10) / 5
    pennies = (((change % 25) % 10) % 5)
    return int(quarters + dimes + nickels + pennies)


def get_change():
    error = "Oops! That was not a valid amount of change try again.."
    while True:
        try:
            change = float(input("Please enter amount of change:"))
            if change >= 0:
                change = change * 100
                break
            else:
                print(error)
        except ValueError:
            # catches all errors
            print("Oops! That was not a valid number try again..")
    return return_coins(change)


print(get_change())
