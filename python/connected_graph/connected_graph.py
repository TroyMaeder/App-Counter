class Node(object):

    """Find if two nodes in a directed graph are connected.
    Based on http://www.codewars.com/kata/53897d3187c26d42ac00040d
    For example:
    a -+-> b -> c -> e
       |
       +-> d
    a.connected_to(a) == true
    a.connected_to(b) == true
    a.connected_to(c) == true
    b.connected_to(d) == false"""

    def __init__(self, value, edges=None):
        self.value = value
        #What is the purpose of this construct?
        self.edges = edges or []

    def connected_to(self, target):
        raise ValueError("Not implemented")

    def __eq__(self, other):
        return self.value == other.value