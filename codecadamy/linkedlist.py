class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next_node = next_node

    # you can just use node.data but this one uses another call

    def get_data(self):
        return self.data

    # same ^

    def get_next(self):
        return self.next_node


class LinkedList(object):
    def __init__(self, head=None, tail=None):
        self.head = head
        self.tail = tail

    def insert_head(self, data):
        # makes new node for you
        new_node = Node(data)

        # sets the new node to point at the head, and then sets the new node to become the head
        new_node.next_node = self.head
        self.head = new_node

    def delete_node(self, data):
        # checks the case where the head is the data you want to delete
        if self.head.data == data:
            self.head = self.head.next_node
            return self.head

        previous = None
        cur = self.head

        # traverses through the list and checks to see if data is equal to the value you want to delete.
        # does this by storing previous node and then skipping to the next node if data is found.
        while cur is not None:
            previous = cur
            cur = cur.next_node
            if cur.data == data:
                previous.next_node = cur.next_node
                return self.head
        return "No Node Found."

    def insert_node(self, data, after):
