import math
import functools

class Enigma(object):

    def __init__(self, char_map):
        self.char_map = char_map

    def decipher(self, message):
        """Decipher the given *message* with this Enigma's *char_map*.
        """
        #Decipher the next char in the message and get the rest of the message remaining.
        next_char,rest_of_message = self._decipher_next_char(message)
        #If any of the message is left to decipher, return the next_char prepended to the rest of the message, deciphered. 
        if rest_of_message:
            return next_char + self.decipher(rest_of_message)
        #Otherwise next_char is the full decipherment of the given message so return it.
        return next_char

    def _decipher_next_char(self, message):
        """Find the next match in the message, decipher it to give the next char,
        and return next_char,rest_of_message
        """
        #First we need to stringify each int in the message.
        #This is because we either will return the first int of this sequence as the next_char, or we will concatenate it with subsequent ints for decoding. E.g. if the message starts [2,3..] then our first decipher may be 23 --> 'x'.
        str_message = [str(x) for x in message]
        #Split the message into the first character, and the rest
        #If we find to matches, this will be the next_char we return.
        next_char,rest_of_message = str_message[0],str_message[1:]

        for i in range(len(message)):
            #Check if the message up to this point, concatenated and cast to an int, is in the char map.
            to_check = int(''.join(str_message[:i+1]))
            if to_check in self.char_map:
                #If it is, we have a new longest match, so update next_char to the value of this chunk
                next_char = self.char_map[to_check]
                #And update the rest_of_message to the everything after the match.
                rest_of_message = message[i+1:]
        #Now that we have checked the whole message, next_char will be set to the decipherment of the longest match we found, and rest_of_message will be everything after that match
        return next_char,rest_of_message

    def decipher_bonus(self, message):
        """Decipher the given *message* with this Enigma's *char_map*.
        """
        #Decipher the next char in the message and get the rest of the message remaining.
        next_char,rest_of_message = self._decipher_next_char_bonus(message)
        #If any of the message is left to decipher, return the next_char prepended to the rest of the message, deciphered. 
        if rest_of_message:
            return next_char + self.decipher_bonus(rest_of_message)
        #Otherwise next_char is the full decipherment of the given message so return it.
        return next_char

    def _decipher_next_char_bonus(self, message):
        """Similar to above, but defines a pure-math integer concatenation function,
        so that casting to a string only happens when we return a non-matching first integer of the message
        as the next_char.

        It does run slower though - reducing with intcat is quite expensive, lots of calls to floor and log.
        In the normal solution, once all the ints are cast to strings,
        we can take advantage of the very fast string join operation.
        """

        next_char,rest_of_message = str(message[0]),message[1:]
        for i in range(len(message)):
            to_check = functools.reduce(intcat, message[:i+1])
            if to_check in self.char_map:
                next_char = self.char_map[to_check]
                rest_of_message = message[i+1:]
        return next_char,rest_of_message
        
def intcat(a, b):
    """E.g.: 10,1 --> 101; 20,20 --> 2020"""
    return a*(10**numdigits(b)) + b

def numdigits(a):
    """Return the number of digits in the positive integer a"""
    if a == 0:
       return 1
    return math.floor(math.log(a, 10)) + 1