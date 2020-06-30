from stack import Stack

print("\nLet's play Towers of Hanoi!!")

# Create the Stacks - Global Scope, can be changed to reduce pollution if needed.

left_stack, middle_stack, right_stack = Stack(
    "Left"), Stack("Middle"), Stack("Right")
stacks = [left_stack, middle_stack, right_stack]

# Set up the Game


def initializeDisk(num_disks):
    for disk in range(num_disks, 0, -1):
        left_stack.push(disk)
    return left_stack

# Get User Input


def userInput(num_disks):
    if num_disks < 3:
        return errorValue()
    return 0


def getInput():
    choices = [stack.get_name()[0].lower() for stack in stacks]
    while True:
        for i in range(len(stacks)):
            name = stacks[i].get_name()
            letter = choices[i]
            print("Enter {0} for {1}".format(letter.upper(), name))
        user_input = input("").lower()
        if user_input in choices:
            for i in range(len(stacks)):
                if user_input == choices[i]:
                    return stacks[i]

# Play the Game


def playGame(stacks, num_disks):
    num_users_moves = 0

    def showStacks(stacks):
        print("\n\n...Current Stacks...")
        for stack in stacks:
            stack.print_items()
        return stacks

    while right_stack.get_size() != num_disks:
        print("Moves so far: {0}".format(num_users_moves))
        showStacks(stacks)
        while True:
            print("\nWhich stack do you want to move from?\n")
            from_stack = getInput()

            if from_stack.get_size() == 0:

                print("\nInvalid Move.. Please enter a valid move.")
                showStacks(stacks)
                continue

            print("\nWhich stack do you want to move to?\n")
            to_stack = getInput()
            if to_stack.get_size() == 0 or from_stack.peek() < to_stack.peek():
                disk = from_stack.pop()
                to_stack.push(disk)
                num_users_moves += 1
                break
            else:
                print("\nInvalid Move.. please enter a valid move.")
                showStacks(stacks)
    return num_users_moves

# Helper Functions


def errorValue():
    print("Enter a number greater than or equal to 3.\n")
    return 1


# main calls

def main():
    while True:
        try:
            num_disks = int(
                input("\nHow many disks do you want to play with?\n"))
        except ValueError:
            errorValue()
            continue
        if userInput(num_disks) == 1:
            continue
        num_optimal_moves = (2 ** num_disks) - 1
        initializeDisk(num_disks)
        print("By the way, the fastest you can solve this problem is in {0} moves.".format(
            num_optimal_moves))
        num_user_moves = playGame(stacks, num_disks)
        print("\nCongratulations! You completed the game in {0} amount of moves and the optimal amount is {1}.".format(
            num_user_moves, num_optimal_moves))
        break


if __name__ == '__main__':
    main()
