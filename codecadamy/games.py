import random
import time

# Game of chance functions here


class Card:
    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit

    def __repr__(self):
        return "%s of %s" % (self.rank, self.suit)


def isNumber(user_input):

    for i in range(len(user_input)):
        if user_input[i].isdigit() != True:
            return False

    return True


def checkBalance(money):
    print("Fetching account info..")
    time.sleep(1.00)
    print("You have ${} in your balance!".format(money))
    time.sleep(1.00)
    return "Returning to main menu."


def winStatement(money, bet_result):
    return "You won! ${0} added to your balance. You now have ${1}.".format(bet_result, money), money


def loseStatement(money, bet_amount):
    return "You lost! ${0} deducted from your balance. You now have ${1}.".format(bet_amount, money), money


def getBetAmount(money, again=None):
    while True and again is None:
        try:
            bet_amount = int(input(
                "You have ${0}.\nPlease enter the amount you would like to bet: ".format(money)))
        except ValueError:
            print("This is not a valid number, try again.")
            continue

        if bet_amount <= money and bet_amount > 0:
            return bet_amount

        elif bet_amount > money:
            print("You can't bet what you don't have.")

        else:
            print("Please enter a bet above $0.")
    while True:
        try:
            again = int(again)
        except ValueError:
            print("Please enter an integer: ")
            return getBetAmount(money)
        if again <= money and again > 0:
            return int(again)
        elif again > money:
            print("You can't bet what you don't have.")
            return getBetAmount(money)
        else:
            print("Please enter a bet above $0.")
            return getBetAmount(money)


def betCoinFlip(money):
    bet_amount = getBetAmount(money)
    bet_result = bet_amount
    flip_result = random.randint(1, 2)

    if flip_result == 1:
        flip_result = ["heads", "h", "1"]
    else:
        flip_result = ["tails", "t", "2"]
    while True:
        player_call = input("Please call heads or tails: ").lower()
        if player_call in ("heads", "tails", "h", "t"):
            break
        print("Enter heads(h) or tails(t): ")
    print("Flipping coin..")
    time.sleep(0.5)
    print(".............ding")
    time.sleep(1)
    print("The coin landed on.. \n{0}".format(flip_result[0].upper()))
    time.sleep(1.333)
    if player_call in flip_result:
        money += bet_result
        return winStatement(money, bet_result)
    money -= bet_amount
    return loseStatement(money, bet_amount)


def betChoHan(money):
    bet_amount = getBetAmount(money)
    bet_result = bet_amount
    roll_dice_result1, roll_dice_result2, roll_dice_final = random.randint(
        1, 6), random.randint(1, 6), ""
    if (roll_dice_result1 + roll_dice_result2) % 2 == 0:
        roll_dice_final = ["even", "2", "e"]
    else:
        roll_dice_final = ["odd", "1", "o"]
    while True:
        player_call = input("Please call odd or even: ").lower()
        if player_call in ("even", "odd", "2", "1", "o", "e"):
            break
        print("Enter even or odd: ")
    print("Rolling dice..")
    time.sleep(1)
    print("ゴロゴロ" + "clack" + "rattle" + "clack")
    time.sleep(1)
    print("The two dice landed on a {0} & a {1} resulting in ...".format(
        roll_dice_result1, roll_dice_result2))
    time.sleep(1)
    print("\n" + roll_dice_final[0].upper() + "!")
    time.sleep(1.333)

    if player_call in roll_dice_final:
        money += bet_result
        return winStatement(money, bet_result)
    money -= bet_amount
    return loseStatement(money, bet_amount)


def betPickACard(money):
    bet_amount = getBetAmount(money)
    bet_result = bet_amount
    leave_table = "You have left the table! Thanks for playing Pick A Card!"
    ranks = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
             '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14}
    suits = ("Spades", "Hearts", "Clubs", "Diamonds")
    card_deck = [Card(rank, suit) for rank in ranks for suit in suits]
    random.shuffle(card_deck)

    while True:
        play_again = "\n" + "If you would like to play again with the same bet amount (${0}) enter any key or enter new amount to bet. Enter 'q' to leave the table:".format(
            bet_amount)
        if money < abs(bet_amount):
            print(
                "You don't have enough in your balance to bet this amount. Enter a new amount or 'q' to leave.")
            bet_amount = getBetAmount(money)
            bet_result = bet_amount
        try:
            player_card = card_deck.pop()
            dealer_card = card_deck.pop()
            time.sleep(1)
            print("Dealer has a {0}".format(dealer_card))
            time.sleep(1)
            print("You were dealt a {0}.".format(player_card))
            print("There are {0} cards left in the deck.".format(
                len(card_deck)))
        except IndexError:
            card_deck = [Card(rank, suit) for rank in ranks for suit in suits]
            random.shuffle(card_deck)
            print("Out of cards.. shuffling new deck.")
            continue
        time.sleep(1.333)
        # equals
        if ranks[player_card.rank] == ranks[dealer_card.rank]:
            play_or_leave_draw = input(
                "It's a draw! Your bet of ${0} remains. Enter any key to play again or 'q' to leave the table with your money: ".format(bet_amount))
            if play_or_leave_draw == 'q':
                return leave_table, money
            elif isNumber(play_or_leave_draw) is True:
                bet_amount = getBetAmount(money, play_or_leave_draw)
                bet_result = bet_amount

        # win

        if ranks[player_card.rank] > ranks[dealer_card.rank]:
            money += bet_result
            statement, _ = winStatement(money, bet_result)
            print(statement)

            play_or_leave_again = input(play_again)
            if play_or_leave_again == 'q':
                return leave_table, money
            elif isNumber(play_or_leave_again) is True:
                bet_amount = getBetAmount(money, play_or_leave_again)
                bet_result = bet_amount
        # lose
        if ranks[player_card.rank] < ranks[dealer_card.rank]:
            money -= bet_result
            statement, _ = loseStatement(money, bet_result)
            print(statement)

            if money <= 0:
                return "You have nothing to bet with!", money
            play_or_leave_again = input(play_again)
            if play_or_leave_again == 'q':
                return leave_table, money
            elif isNumber(play_or_leave_again) is True:
                bet_amount = getBetAmount(money, play_or_leave_again)
                bet_result = bet_amount
        bet_result = bet_amount


def rouletteDrop(num):
    print("Dropping ball.. カタカタカタカタカタカタカタカタ")
    time.sleep(0.5)
    print("The roulette was spun and the ball landed on..")
    time.sleep(0.5)
    print(str(num) + "!")
    time.sleep(1.33)
    return num


def rouletteDozensOrColumns(bet_list_1, bet_list_2, bet_list_3, column_or_dozen, num, bet_result, money):
    prompt_choice_bet = input("Please enter which {0} you'd like to bet on. \n1st [1], 2nd[2] or 3rd[3]: ".format(
        column_or_dozen))
    if prompt_choice_bet == '1' and num in bet_list_1:
        rouletteDrop(num)
        money += (bet_result*2)
        return winStatement(money, bet_result)
    if prompt_choice_bet == '2' and num in bet_list_2:
        rouletteDrop(num)
        money += (bet_result*2)
        return winStatement(money, bet_result*2)
    if prompt_choice_bet == '3' and num in bet_list_3:
        rouletteDrop(num)
        money += (bet_result*2)
        return winStatement(money, bet_result*2)
    if prompt_choice_bet == '1' or prompt_choice_bet == '2' or prompt_choice_bet == '3':
        rouletteDrop(num)
        money -= (bet_result)
        return loseStatement(money, bet_result)
    else:
        print("Not a valid option. Try again")
        return rouletteDozensOrColumns(bet_list_1, bet_list_2, bet_list_3, column_or_dozen, num, bet_result, money)


def betRoulette(money):
    bet_amount = getBetAmount(money)
    bet_result = bet_amount
    roulette_numbers = list(range(37))
    num = random.choice(roulette_numbers)
    leave_table = "You have left the Roulette Table!"
    print("Welcome to the Roulette Table!")
    time.sleep(1)
    print("     | 0  |    |")
    print("|/1//|  2 |//3/|     1st Dozen:   1 - 12")
    print("|  4 |//5/|  6 |     Even Numbers       ")
    print("|/7//|  8 |//9/|     Low Numbers: 1 - 18")
    print("| 10 | 11 |/12/|")
    print("| 13 |/14/| 15 |     2nd Dozen:  13 - 24")
    print("|/16/| 17 |/18/|     Red =     |//X//|")
    print("|/19/| 20 |/21/|     Black =   |  X  | ")
    print("| 22 |/23/| 24 |")
    print("|/25/| 26 |/27/|     3rd Dozen:  25 - 36")
    print("| 28 | 29 |/30/|     Odd Numbers")
    print("| 31 |/32/| 33 |     High Numbers: 19-36")
    print("|/34/| 35 |/36/|")
    print("________________")
    print("| C1 | C2 | C3 |\n")
    time.sleep(1)
    # list of all possibilities
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
    # flow control

    while True:
        prompt_bet_type = input(
            "Straight[1] (35:1), Even[2] (1:1), Odd[3] (1:1), Red[4] (1:1), Black[5] (1:1),\nLows[6] (1:1), Highs[7] (1:1), Columns[8] (2:1), Dozens[9] (2:1)\nPlease enter your type of bet or enter 'q' to leave: ").lower()
        if prompt_bet_type == 'q' or prompt_bet_type == "leave":
            return leave_table, money
        elif prompt_bet_type == 'straight' or prompt_bet_type == "1":
            prompt_straight_bet = input(
                "Please enter a number that is on the roulette board: ")
            if isNumber(prompt_straight_bet) is False:
                time.sleep(1)
                print(
                    "This wasn't even a number..")
            if prompt_straight_bet in roulette_numbers and num == prompt_straight_bet:
                rouletteDrop(num)
                money += (bet_result*35)
                print("YOU HIT THE JACKPOT!!")
                return winStatement(money, bet_result)
            if prompt_straight_bet in roulette_numbers:
                rouletteDrop(num)
                money -= (bet_result)
                return loseStatement(money, bet_result)
            time.sleep(1)
            print(
                "You did not enter a number that was on the board, returning to betting options.")
        elif prompt_bet_type == 'columns' or prompt_bet_type == "8":
            return (rouletteDozensOrColumns(
                column1, column2, column3, "column", num, bet_result, money))

        elif prompt_bet_type == 'dozens' or prompt_bet_type == "9":
            return(rouletteDozensOrColumns(
                dozens1, dozens2, dozens3, "dozens", num, bet_result, money))

     #  if prompt_bet_type == 'dozens' or prompt_bet_type == "9":
        else:
            try:
                if num in (roulette_list_of_bets.get(prompt_bet_type, "")):
                    rouletteDrop(num)
                    money += (bet_result)
                    return winStatement(money, bet_result)
                else:
                    rouletteDrop(num)
                    money -= (bet_result)
                    return loseStatement(money, bet_result)
            except TypeError:
                print("Not one of the options, please try again.")
                continue

# Call game of chance functions here


def main():
    inputs_for_coinflip = {"cf", "coin",
                           "coinflip", "flip a coin", "flip", "1"}
    inputs_for_chohan = {"ch", "even or odd", "dice",
                         "roll dice", "chohan", "cho-han", "cho", "han", "even", "odd", "2"}
    inputs_for_pickACard = {"pick", "pickacard",
                            "pick a card", "p", "card", "war", "3"}
    inputs_for_roulette = {"roulette", "r",
                           "red", "black", "numbers", "spin", "4"}
    money = 100
    while True:
        get_user_input = input("\n" +
                               "Please enter a game you would like to play - Coinflip, Cho-Han, Pick a Card, Roulette\nAlternatively, type 'exit' to end the program or 'check' to see your balance: ").lower()

        if get_user_input == "exit" or get_user_input == "end":
            print("\n""See you again soon!")
            break

        elif get_user_input == "check":
            statement = checkBalance(money)
            print(statement)
            time.sleep(0.5)

        elif get_user_input in inputs_for_coinflip:
            statement, money = betCoinFlip(money)
            print(statement)

        elif get_user_input in inputs_for_chohan:
            statement, money = betChoHan(money)
            print(statement)

        elif get_user_input in inputs_for_pickACard:
            statement, money = betPickACard(money)
            print(statement)

        elif get_user_input in inputs_for_roulette:
            statement, money = betRoulette(money)
            print(statement)

        if money <= 0:
            print("\n""You're out of money! Game Over.")
            input("Press any key to close the game..")
            break


if __name__ == "__main__":
    main()
