package com.intenthq.challenge

import java.util

import org.specs2.mutable.Specification

class JNiceStringsSpec extends Specification {

  section("java")
  section("nice")
  "SNiceStrings" should {
    "ugknbfddgicrmopn is nice" in {
      JNiceStrings.nice(util.Arrays.asList("ugknbfddgicrmopn")) must_== 1
    }
    "aaa is nice" in {
      JNiceStrings.nice(util.Arrays.asList("aaa")) must_== 1
    }
    "jchzalrnumimnmhp is naughty" in {
      JNiceStrings.nice(util.Arrays.asList("jchzalrnumimnmhp")) must_== 0
    }
    "haegwjzuvuyypxyu is naughty" in {
      JNiceStrings.nice(util.Arrays.asList("haegwjzuvuyypxyu")) must_== 0
    }
    "dvszwmarrgswjxmb is naughty" in {
      JNiceStrings.nice(util.Arrays.asList("dvszwmarrgswjxmb")) must_== 0
    }
  }
  section("nice")
  section("java")
}