/*

Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:
               b                m
               a                o
            d  (t,end)  (s)
                  (h, end)
                  i

addWord("mountain")
addWord("bad")
addWord("bat")
addWord("bash")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("ba.h") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.

Time = Worst case = (n) length of the word


class Node:
  def __init__(self):
    isWord: False
    children: {}


root    b {a {d, t, s{h {i}}}}
        m {o {n...}}

https://leetcode.com/problems/add-and-search-word-data-structure-design/solution/

*/

function Hashtable() {
  this.dictionary = {};
}

Hashtable.prototype.addWord = function (word) {
  this.dictionary[word] = true;
  return console.log("word added");
};

Hashtable.prototype.search = function (word) {
  return this.dictionary[word];
};

let Hash = new Hashtable();
console.log(Hash.addWord("dog"));
console.log(Hash.search("dog"));
