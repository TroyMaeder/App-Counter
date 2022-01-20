package com.intenthq.challenge

import java.util
import java.util.Collections

import com.intenthq.challenge.JConnectedGraph.JNode
import org.specs2.mutable.Specification

class JConnectedGraphSpec extends Specification {

  section("java")
  section("graph")
  "JConnectedGraph" should {
    "work with an acyclic graph" >> {
      //Graph: http://upload.wikimedia.org/wikipedia/commons/0/03/Directed_acyclic_graph_2.svg
      val dest = new JNode(9)
      val n10 = new JNode(10)
      val n8 = new JNode(8, Collections.singletonList(dest))
      val start = new JNode(3, util.Arrays.asList(n8, n10))
      val start2 = new JNode(11, util.Arrays.asList(new JNode(2), dest, n10))
      val start3 = new JNode(5, Collections.singletonList(start2))
      JConnectedGraph.run(start, dest) must_== true
      JConnectedGraph.run(start2, dest) must_== true
      JConnectedGraph.run(start, dest) must_== true
      JConnectedGraph.run(start2, dest) must_== true
      JConnectedGraph.run(start3, dest) must_== true
      JConnectedGraph.run(dest, start3) must_== false
      JConnectedGraph.run(dest, start2) must_== false
      JConnectedGraph.run(start,start2) must_==  false
    }
    "a node is connected to itself" >> {
      val start = new JNode(1)
      JConnectedGraph.run(start, start) must_== true
    }
  }
  section("graph")
  section("java")
}
