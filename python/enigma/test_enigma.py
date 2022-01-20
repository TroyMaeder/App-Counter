import unittest
import time

from .enigma import Enigma

class TestEnigma(unittest.TestCase):

    def test(self):
        char_map = {
            23: 'N',
            234: ' ',
            89: 'H',
            78: 'Q',
            37: 'A'
        }

        enigma = Enigma(char_map)

        self.assertEqual(enigma.decipher([2,3]), 'N')
        self.assertEqual(enigma.decipher([2,3,8,9]), 'NH')
        self.assertEqual(enigma.decipher([1,2,3]), '1N')
        self.assertEqual(enigma.decipher([2,3,4]), ' ')
        self.assertEqual(enigma.decipher([1,2,3,7,3,2,3,7,2,3,4,8,9,7,8]), '1N73N7 HQ')

