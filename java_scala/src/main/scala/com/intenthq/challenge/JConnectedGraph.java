package com.intenthq.challenge;

import java.util.Collections;
import java.util.List;

public class JConnectedGraph {
  // Find if two nodes in a directed graph are connected.
  // Based on http://www.codewars.com/kata/53897d3187c26d42ac00040d
  // For example:
  // a -+-> b -> c -> e
  //    |
  //    +-> d
  // run(a, a) == true
  // run(a, b) == true
  // run(a, c) == true
  // run(b, d) == false
  public static boolean run(JNode source, JNode target) {
    throw new RuntimeException("Not implemented");
  }

  public static class JNode {
    public final int value;
    public final List<JNode> edges;
    public JNode(final int value, final List<JNode> edges) {
      this.value = value;
      this.edges = edges;
    }
    public JNode(final int value) {
      this.value = value;
      this.edges = Collections.emptyList();
    }
  }

}
