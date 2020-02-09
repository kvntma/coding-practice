def calculateGradeLevel(avgNumLetters, avgNumSentences):
    gradeLevel = 0.0588 * avgNumLetters - 0.296 * avgNumSentences - 15.8
    if gradeLevel >= 16:
        gradeLevel = 'Grade 16+'
    elif gradeLevel < 1:
        gradeLevel = 'Before Grade 1'
    else:
        gradeLevel = 'Grade ' + str(round(gradeLevel))
    return gradeLevel


def getTextGradeLevel(text):
    PUNCTUATION_CHARACTERS = ['.', '!', '?']
    wordCount = 0
    letterCount = 0
    sentenceCount = 0
    lastLetter = ''
    for letter in text:
        if letter.isalpha():
            letterCount += 1
        elif letter == " " and lastLetter not in PUNCTUATION_CHARACTERS:
            wordCount += 1
        elif letter in PUNCTUATION_CHARACTERS:
            wordCount += 1
            sentenceCount += 1
        else:
            continue
        lastLetter = letter

    avgNumLetters = (letterCount / wordCount) * 100  # ZeroErrorDivision
    avgNumSentences = (sentenceCount / wordCount) * 100  # ZeroErrorDivision
    return calculateGradeLevel(avgNumLetters, avgNumSentences)


text = input()
print(getTextGradeLevel(text))
