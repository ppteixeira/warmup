require 'pry'



def can_make_word(word)
  blocks =  [['B','O'],
            ['X','K'],
            ['D','Q'],
            ['C','P'],
            ['N','A'],
            ['G','T'],
            ['R','E'],
            ['T','G'],
            ['Q','D'],
            ['F','S'],
            ['J','W'],
            ['H','U'],
            ['V','I'],
            ['A','N'],
            ['E','R'],
            ['F','S'],
            ['L','Y'],
            ['P','C'],
            ['Z','M'],]
  letter = word.split('')

  letter.each do |l|
    found = false
    blocks.each do |block|
      if l == block[0] || l == block[1]
        found = true

        @index = blocks.index(block)
        break
      else
        found = false
      end
    end
    blocks.delete_at(@index)

    if found == false
      return false
    end

  end

  return true

end

# can_make_word("A")
#
# can_make_word("BARK")
#
# can_make_word("BOOK")
#
# can_make_word("TREAT")
#
# can_make_word("COMMON")
#
# can_make_word("SQUAD")
#
# can_make_word("CONFUSE")
#
# can_make_word("BOUGHT")

binding.pry
