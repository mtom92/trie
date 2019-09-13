class TrieNode{
    constructor(){
        this.isEnd = false
        this.freq = 0
        this.children = {}
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        if( word.length === 0 ) return 	// forbid empty string
        let letter;
        let curNode = this.root

        for( let i = 0; i < word.length; i++ ){
            letter = word[i]
            if( !curNode.children.hasOwnProperty(letter) ){
                curNode.children[letter] = new TrieNode()
            }
            curNode = curNode.children[letter]
        }
        curNode.isEnd = true
        curNode.freq = curNode.freq + 1
    }

    getNodeForPrefix(str){
        let letter, curNode = this.root
        for( let i = 0; i < str.length; i++ ){
            letter = str[i]
            if( !curNode.children.hasOwnProperty(letter) )
                return null
            curNode = curNode.children[letter]
        }
        return curNode
    }

    isWord(word){
        if( this.getNodeForPrefix(word) === null ) return false
        return this.getNodeForPrefix(word).isEnd
    }

    getWordFreq(word){
        if( this.getNodeForPrefix(word) === null ) return false
        return this.getNodeForPrefix(word).freq
    }
}


/* -------------------- Testing --------------------*/

let ace = "ace"
let at = "at"
let cat = "cat"
let cab = "cab"
let of = "of"

let t = new Trie()
t.insert(ace)
console.log(t.isWord(ace))	  // true

t.insert(ace)
console.log(t.isWord(ace))     // true
console.log(t.getWordFreq(ace))// 2

t.insert(at)
console.log(t.isWord(at))      // true
console.log(t.getWordFreq(at)) // 1

t.insert(cat)
t.insert(cat)
console.log(t.isWord(cat))     // true
console.log(t.getWordFreq(cat))// 2
t.insert(cat)
console.log(t.getWordFreq(cat))// 3

t.insert(cab)
console.log(t.isWord(cab))     // true
console.log(t.getWordFreq(cab))// 1

t.insert(of)
console.log(t.isWord(of))     // true
console.log(t.getWordFreq(of))// 1

// check the internal representation of the Trie
console.log(t.root)
