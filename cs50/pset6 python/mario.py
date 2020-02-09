def main():
    while True:
        try:
            # get user input
            get_int = int(input("Please enter an integer between 1 and 8: "))
            if get_int >= 0 and get_int <= 8:  # proceeds if under 9
                break
        except ValueError:
            # catches all errors
            print("Oops! That was not a valid number try again..")

    counter = 0
    counter_spaces = get_int

    for _ in range(get_int):
        counter += 1
        counter_spaces = get_int - counter
        print(counter_spaces*" " + "#" * counter + "  " +
              "#" * counter)  # repeats loop x amount of times


if __name__ == '__main__':
    main()
