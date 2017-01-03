require 'pry'

# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

class Scrabble

  def self.score(word)
    given_word = word.upcase!
    given_word = word.split('')
    @total_score = 0
    points = {1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
              2 => ['D', 'G'],
              3 => ['B', 'C', 'M', 'P'],
              4 => ['F' ,'H', 'V', 'W', 'Y'],
              5 => ['K'],
              8 => ['J', 'X'],
              10 => ['Q', 'Z']}
    given_word.each do |i|
      points.each {|val , let|
        if let.include? i
          @total_score = @total_score + val
        end
      }

    end
    return @total_score
  end

end
entry = ''
while entry != "exit"
  system('clear')
  puts 'Type the word get the score:'
  entry = gets.chomp
  if entry == 'exit'
    next
  else

    puts "score:" + Scrabble.score("#{entry}").to_s

    gets.chomp
  end
end
