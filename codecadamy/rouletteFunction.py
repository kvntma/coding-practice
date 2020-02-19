import random


def betRoulette():

    print("Welcome to the Roulette Table!")
    print("     | 0  |    |")
    print("| 1  |//2/|  3 |     1st Dozen:   1 - 12")
    print("|//4/|  5 |//6/|     Even Numbers       ")
    print("| 7  |//8/|  9 |     Low Numbers: 1 - 18")
    print("|/10/|/11/| 12 |")
    print("|/13/| 14 |/15/|     Black = |//X//|")
    print("| 16 |/17/| 18 |     2nd Dozen:  13 - 24")
    print("| 19 |/20/| 21 |     Red =   |  X  | ")
    print("|/22/| 23 |/24/|")
    print("| 25 |/26/| 27 |     3rd Dozen:  25 - 36")
    print("|/28/|/29/| 30 |     Odd Numbers")
    print("|/31/| 32 |/33/|     High Numbers: 19-36")
    print("| 34 |/35/| 36 |")
    print("________________")
    print("| C1 | C2 | C3 |")

    roulette_numbers = range(37)

    num = random.choice(roulette_numbers)
    odd_bet = [x for x in roulette_numbers if x % 2 != 0]
    even_bet = [x for x in roulette_numbers if x % 2 == 0]
    high_bet = [x for x in roulette_numbers if x > 18]
    low_bet = [x for x in roulette_numbers if x < 19]
    column1 = list(roulette_numbers[1:36:3])
    column2 = list(roulette_numbers[2:36:3])
    column3 = list(roulette_numbers[3:37:3])
    dozens1 = [x for x in roulette_numbers if x <= 12 and x > 0]
    dozens2 = [x for x in roulette_numbers if x <= 24 and x > 12]
    dozens3 = [x for x in roulette_numbers if x <= 36 and x > 24]
    red_bet = [x for x in roulette_numbers if (((x <= 10) or (x >= 19 and x <= 28)) and x % 2 != 0) or (
        ((x >= 11 and x <= 18) or (x >= 29 and x <= 36)) and x % 2 == 0)]
    black_bet = [x for x in roulette_numbers if x not in red_bet and x != 0]

    roulette_list_of_bets = {"even": even_bet, "2": even_bet, "odd": odd_bet, "3": odd_bet,
                             "red": red_bet, "4": red_bet, "black": black_bet, "5": black_bet, "lows": low_bet, "6": low_bet, "highs": low_bet, "7": high_bet}
    # user_input = input("Bet: ")
    print(dozens1)
    print(dozens2)
    print(dozens3)
    print(num)
    while True:
        prompt_bet_type = input(
            "Please enter your type of bet!\nStraight (35:1), Even (1:1), Odd (1:1), Red (1:1), Black (1:1), Highs(1:1), Lows(1:1), Columns(2:1), Dozens(2:1): ").lower()
        if prompt_bet_type == 'straight' or prompt_bet_type == "1":
            try:
                prompt_straight_bet = int(input(
                    "Please enter a number from 0 to 36: "))
            except ValueError():
                print("Please enter a valid number on the roulette table.")
                continue
            if prompt_straight_bet in roulette_numbers:
                if num == prompt_straight_bet:
                    print("win!")
                    break
                else:
                    print("lose!")
                    break
            elif prompt_straight_bet not in roulette_numbers:
                raise ValueError()
        else:
            try:
                if num in (roulette_list_of_bets.get(prompt_bet_type, "")):
                    print("Yes")
                    break
                else:
                    print("False")
                    break
            except TypeError:
                print("not part of dictionary")
                continue


print(betRoulette())
