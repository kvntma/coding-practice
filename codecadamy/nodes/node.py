class Node:
    def __init__(self, value, link_node=None):
        self.value = value
        self.link_node = link_node

    def set_link_node(self, link_node):
        self.link_node = link_node

    def get_link_node(self):
        return self.link_node

    def get_value(self):
        return self.value


# Add your code below:
yacko = Node("likes to yak")
wacko = Node("has a penchant for hoarding snacks")
dot = Node("enjoys spending time in movie lots")

yacko.set_link_node(dot)
dot.set_link_node(wacko)

dots_data = yacko.get_link_node().get_value()
wackos_data = dot.get_link_node().get_value()
print(dots_data)
print(wackos_data)


# Create your LinkedList class below:

class LinkedList:
    def __init__(self, value=None):
        self.head_node = Node(value)

    def get_head_node(self):
        return self.head_node

    def stringify_list(self):  # returns list of node values
        string_list = ""
        current_node = self.get_head_node()
        while current_node:
            if current_node.get_value() != None:
                string_list += str(current_node.get_value()) + "\n"
            current_node = current_node.get_next_node()
        return string_list

        # remove_node method below:

    def remove_node(self, value_to_remove):
        current_node = self.get_head_node()  # first node
        # if first node value is to be deleted, set next node to new head.
        if current_node.get_value() == value_to_remove:
            self.head_node = current_node.get_next_node()
        else:
            while current_node:
                # set a new variable, next node to be the next node, keeps current node the same.
                next_node = current_node.get_next_node()
                # checks if the next node has variable.
                if next_node.get_value() == value_to_remove:
                    # if it has the variable, then the current node will be switched to the next, next node.
                    current_node.set_next_node(next_node.get_next_node())
                    current_node = None  # break out of loop
                else:
                    # the current node will now switch to the nexy variable and repeat.
                    current_node = next_node

# A linked list only keeps track of the first node in the list. To traverse the list, it needs a method that loops through each node to find the following node.

# It’s necessary to set the new head node’s next_node property equal to the current list’s head node.
# Otherwise, you’ll lose the connection to the current head node and the rest of the linked list.
