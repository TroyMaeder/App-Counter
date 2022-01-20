import unittest

from .nice_strings import SantaString

class TestEnigma(unittest.TestCase):

    def test_nice(self):
        nice = [
            "ugknbfddgicrmopn",
            "ugknbfaagcrmpn",
        ]

        for s in nice:
            self.assertTrue(SantaString(s).is_nice())

    def test_naughty(self):
        naughty = [
            "jchzalrnumimnmhp",
            "haegwjzuvuyypxyu",
            "dvszwmarrgswjxmb"
        ]

        for s in naughty:
            self.assertTrue(SantaString(s).is_naughty())
