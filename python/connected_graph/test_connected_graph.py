import unittest

from .connected_graph import Node

class TestConnectedGraph(unittest.TestCase):

    def test_acyclic_graph(self):
        """Example graph from https://upload.wikimedia.org/wikipedia/commons/0/03/Directed_acyclic_graph_2.svg"""

        n9 = Node(9)
        n10 = Node(10)
        n8 = Node(8, [n9])
        n3 = Node(3, [n8, n10])
        n2 = Node(2)
        n11 = Node(11, [n2, n9, n10])
        n5 = Node(5, [n11])

        self.assertTrue(n3.connected_to(n9))
        self.assertTrue(n11.connected_to(n9))
        self.assertTrue(n3.connected_to(n9))
        self.assertTrue(n11.connected_to(n9))
        self.assertTrue(n5.connected_to(n9))
        self.assertFalse(n9.connected_to(n5))
        self.assertFalse(n9.connected_to(n11))
        self.assertFalse(n3.connected_to(n11))

    def test_connected_to_self(self):
        n1 = Node(1)
        self.assertTrue(n1.connected_to(n1))
