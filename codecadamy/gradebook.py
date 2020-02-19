# This is one of the projects at codecadamy. Does not use flow control and hard codes lists, i've added functions and mains to
# create more succinct flow.


def getGradebook():
    last_semester_gradebook = [
        ("politics", 80), ("latin", 96), ("dance", 97), ("architecture", 65)]
    subjects = ['physics', 'calculus', 'poetry', 'history']
    grades = ['98', '97', '85', '88']
    subjects.append("computer science")
    grades.append("100")
    gradebook = list(zip(subjects, grades))
    gradebook.append(("visual arts", 93))
    return gradebook + last_semester_gradebook


def main():
    print(getGradebook())


if __name__ == "__main__":
    main()
