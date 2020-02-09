from collections import Counter

sentence = input("Enter text here: ")
new_sentence = sentence.split(" ")


def sentence_counter():
    # adds the number of punctuations containing !, ? and . to the punctuation dictionary
    # and returns the sum of value as total number of sentences
    punctuation = {"!": 0, "?": 0, ".": 0}
    for char in sentence:
        if char in punctuation:
            punctuation[char] += +1
    return sum(punctuation.values())


def words_counter():
    # using the split function called beforehand, joins all the alphebetical letters seperated by a space into words
    words = {}
    for key in new_sentence:
        key = "".join([c for c in key if c.isalpha()])
        if key in words:
            words[key] += 1
        else:
            words[key] = 1
    return sum(words.values())


def letter_counter():
    # uses Counter function to count the number of alphabetical characters in the sentence and returns the value.
    count_characters = Counter(
        char for char in sentence.lower() if char.isalpha())
    return sum(count_characters.values())


def coleman_liau_index():
    # coleman liau index to calcaulate grade level
    return round(0.0588 * (letter_counter()/words_counter()*100) - 0.296 * (sentence_counter()/words_counter())*100 - 15.8)


def grade():
    # returning grade level
    if coleman_liau_index() > 16:
        return "Grade 16+"
    elif coleman_liau_index() < 1:
        return "Before Grade 1"
    else:
        return "Grade " + str(coleman_liau_index())


print(grade())
