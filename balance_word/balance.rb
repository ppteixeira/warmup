require 'pry'
values = {
            'a' => 1,
            'b' => 2,
            'c' => 3,
            'd' => 4,
            'e' => 5,
            'f' => 6,
            'g' => 7,
            'h' => 8,
            'i' => 9,
            'j' => 10,
            'k' => 11,
            'l' => 12,
            'm' => 13,
            'n' => 14,
            'o' => 15,
            'p' => 16,
            'q' => 17,
            'r' => 18,
            's' => 19,
            't' => 20,
            'u' => 21,
            'v' => 22,
            'w' => 23,
            'x' => 24,
            'y' => 25,
            'z' => 26
          }
word = 'stead'

word = word.split('')
sumLetters = 0
word.each do |letter|
  sumLetters = sumLetters + values[letter]
end
breakpoint = sumLetters / 2
#-------------------------------------------

lettersBeforeBreak = []
sumBeforeBreak = 0

breakLetter = []
valueBreakLetter = 0

sumAfterBreak = 0
lettersAfterBreak = []

word.each do |letter|
    if sumBeforeBreak + values[letter] < breakpoint
      sumBeforeBreak = sumBeforeBreak + values[letter]
      lettersBeforeBreak << letter
    else sumBeforeBreak + values[letter] == breakpoint || sumBeforeBreak + values[letter] > breakpoint
      binding.pry
      if valueBreakLetter != 0
        breakLetter = letter
        valueBreakLetter = values[letter]
       break
      end
      lettersAfterBreak << letter
      sumAfterBreak = sumAfterBreak + values[letter]
    end
end


puts "lettersBeforeBreak = #{lettersBeforeBreak}"
puts "sumBeforeBreak = #{sumBeforeBreak}"

puts "breakLetter = #{breakLetter}"
puts "valueBreakLetter = #{valueBreakLetter}"

puts "sumAfterBreak = #{sumAfterBreak}"
puts "lettersAfterBreak = #{lettersAfterBreak}"
