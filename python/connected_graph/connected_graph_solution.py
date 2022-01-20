from math import inf

class Node(object):

    def __init__(self, value, edges=None):
        self.value = value
        #What is the purpose of this construct?
        self.edges = edges or []

    def connected_to(self, target):
        #What are the downsides of this depth-first solution?
        if self == target:
            return True
        else:
            #Why do we use 'any'?
            return any(edge.connected_to(target) for edge in self.edges)

    def connected_to_cyclic(self, target, visited=None):
        #Why do we use a set here?
        visited = set(visited or [])
        if self in visited:
            return False
        elif self == target:
            return True
        else:
            visited.add(self)
            return any(edge.connected_to_cyclic(target, visited) for edge in self.edges)

    def distance_to(self, target, visited=None, travelled=0):
        visited = set(visited or [])
        if self in visited:
            return inf
        elif self == target:
            return travelled
        else:
            visited.add(self)
            travelled += 1
            if len(self.edges):
                return min(edge.distance_to(target, visited, travelled) for edge in self.edges)
            return inf

    #What capabilites will adding the following methods give instances of this class?
    def __eq__(self, other):
        return self.value == other.value

    def __hash__(self):
        return hash(self.value)