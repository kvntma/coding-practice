'''
You're given a list of unique letters pointing to other letters using the ">" symbol. Return the word that is created. All letters are guaranteed to be unique.
Examples:
input = ["L>I", "I>S", "S>T"] output = "LIST"
input = ["L>M", "P>A", "A>L"] output = "PALM"

'''


class node:
    def __init__(self, data=None):
        self.data = data
        self.next = None


class linked_list:
    def __init__(self:
        self.head = node()
