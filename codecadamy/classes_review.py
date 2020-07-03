class Student:
    def __init__(self, name, year):
        self.name = name
        self.year = year
        self.grades = []
        self.attendence = {}

    def add_grade(self, grade):
        if type(grade) == Grade:
            self.grades.append(grade)

    def get_averages(self):
        return (sum(self.grades) / len(self.grades))


class Grade:
    minimum_passing = 65

    def __init__(self, score):
        self.score = score

    def is_passing(self):
        if self.score >= self.minimum_passing:
            return "Pass"
        return "Fail"


roger = Student("Roger van der Weyden", 10)
sandro = Student("Sandro Botticelli", 12)
pieter = Student("Pieter Bruegel the Elder", 8)

new_Grade1 = Grade(100)
pieter.add_grade(new_Grade1)

print(new_Grade1.is_passing())
