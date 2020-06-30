letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
           "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1,
          3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]

letters += [letter.lower() for letter in letters]
points *= 2

letters_to_points = {key: value for key, value in zip(letters, points)}
letters_to_points[" "] = 0

players = ["player1", "wordNerd", "Lexi Con", "Prof Reader"]
words_of_players = [["BLUE, TENNIS, EXIT"], ["EARTH, EYES, MACHINE"], [
    "ERASER, BELLY, HUSKY"], ["ZAP, COMA, PERIOD"]]
words_of_players_listed = [word.split(
    ", ") for sublist in words_of_players for word in sublist]
player_to_words = dict(zip(players, words_of_players_listed))
# players_to_score = dict.fromkeys(player_to_words, 0)


def score_word(user_input):
    scrabble_points = 0
    for sublist in user_input:
        for word in sublist:
            for letter in word:
                scrabble_points += letters_to_points.get(letter, 0)
    return scrabble_points


def update_total():
    for key, value in player_to_words.items():
        player_to_words[key] = score_word(value)
    return player_to_words


def play_word(name, word):
    player_to_words[name].append(word)
    return update_total()


def main():
    print(play_word('player1', "ALEXA"))
    # can't update again because I'm simutaneously updating the dictionary with score rather than making new one.


if __name__ == '__main__':
    main()
