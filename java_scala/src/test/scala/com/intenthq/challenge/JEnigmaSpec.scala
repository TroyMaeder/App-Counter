package com.intenthq.challenge

import java.util

import org.specs2.mutable.Specification

class JEnigmaSpec extends Specification {

  section("java")
  section("enigma")
  "JEnigmaSpec" should {
    val map:util.Map[Integer, Character] = new util.HashMap()
    map.put(23, 'N'); map.put(234, ' '); map.put(89, 'H'); map.put(78, 'Q'); map.put(37, 'A')
    val decipher = JEnigma.decipher(map)

    "(2,3) is 'N'" in {
      decipher.deciphe(util.Arrays.asList(2,3)) must_== "N"
    }
    "(2,3,8,9) is 'NH'" in {
      decipher.deciphe(util.Arrays.asList(2,3,8,9)) must_== "NH"
    }

    "(1,2,3) is '1N'" in {
      decipher.deciphe(util.Arrays.asList(1,2,3)) must_== "1N"
    }

    "(2,3,4) is ' '" in {
      decipher.deciphe(util.Arrays.asList(2,3,4)) must_== " "
    }

    "(1,2,3,7,3,2,3,7,2,3,4,8,9,7,8) is '1N73N7 HQ'" in {
      decipher.deciphe(util.Arrays.asList(1,2,3,7,3,2,3,7,2,3,4,8,9,7,8)) must_== "1N73N7 HQ"
    }
  }
  section("enigma")
  section("java")
}