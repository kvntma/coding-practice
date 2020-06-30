from node import Node


class Stack:
    def __init__(self, limit=1000):
        self.top_item = None
        self.size = 0
        self.limit = limit

    def push(self, value):
        if self.has_space():
            item = Node(value)
            item.set_link_node(self.top_item)
            self.top_item = item
            self.size += 1
            print("Adding {} to the pizza stack!".format(value))
        else:
            print("No room for {}!".format(value))

    def pop(self):
        if not self.is_empty():
            item_to_remove = self.top_item
            self.top_item = item_to_remove.get_next_node()
            self.size -= 1
            print("Delivering " + item_to_remove.get_value())
            return item_to_remove.get_value()
        print("All out of pizza.")

    def peek(self):
        if not self.is_empty():
            return self.top_item.get_value()
        print("Nothing to see here!")

    def has_space(self):
        return self.limit > self.size

    def is_empty(self):
        return self.size == 0


# Defining an empty pizza stack
pizza_stack = Stack(6)
# Adding pizzas as they are ready until we have
pizza_stack.push("pizza #1")
pizza_stack.push("pizza #2")
pizza_stack.push("pizza #3")
pizza_stack.push("pizza #4")
pizza_stack.push("pizza #5")
pizza_stack.push("pizza #6")

# Uncomment the push() statement below:
pizza_stack.push("pizza #7")

# Delivering pizzas from the top of the stack down
print("The first pizza to deliver is " + pizza_stack.peek())
pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()

# Uncomment the pop() statement below:
pizza_stack.pop()


'''
class Stack:
    def __init__(self, limit=1000):
        self.top_item = None
        self.size = 0
        self.limit = limit

    def push(self, value):
        if self.has_space():
            item = Node(value)
            item.set_link_node(self.top_item)
            self.top_item = item
        # Increment stack size by 1 here:
            self.size += 1
        else:
            print("All out of space!")

    def pop(self):
        if self.is_empty():
            item_to_remove = self.top_item
            self.top_item = item_to_remove.get_next_node()
            self.size -= 1
            return item_to_remove.get_value()
        else:
            print("This stack is totally empty.")

    def peek(self):
        if self.is_empty():
            return self.top_item.get_value()
        else:
            print("Nothing to see here!")

    # Define has_space() and is_empty() below:
    def has_space(self):
        if self.limit > self.size:
            return True

    def is_empty(self):
        if self.size == 0:
            return True
'''

# You can traverse a linked list through its nodes, but stacks can only view and make changes to the top node in the stack

# When you instantiate a stack, the size is 0, there is no top_item yet (so we set it to None),
# and we give limit the passed in or default integer value to help us limit the size of our stack to prevent stack overflow.

# To prevent stack overflow, it is necessary to limit the number of nodes that are added to the stack.
