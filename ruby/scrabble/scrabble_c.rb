require "pry"

class Scrabble

  def initialize(splitphrase)

    @cleanscore = []
    splitphrase.split("").each do |letter|
      letterpoint = letterscore(letter)
      @cleanscore << letterpoint
    end

    # APPLY DOUBLE POINTS TO THIRD LETTER
    @cleanscore[2] = @cleanscore[2] * 2
    # APPLY TRIPLE POINTS TO LAST LETTER
    @cleanscore[-1] = @cleanscore[-1] * 3
    @totalscore = @cleanscore.inject(0, :+)
    #doublewordscore
    @doublescore = @totalscore  * 2
    #triplewordscore
    @triplescore = @totalscore * 3

    #RESULTS
    p "Third letter gets double pts and the last letter gets triple pts so your total score is #{@totalscore}"
    p "With a double word score you will get #{@doublescore}"
    p "With a double word score you will get #{@triplescore}"
  end

  def self.score phrase

    @splitphrase = phrase.upcase
    Scrabble.new(@splitphrase)

  end

  def letterscore letter

    scoring = {"1" => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
               "2" => ["D","G"],
               "3" => ["B","C","M","P"],
               "4" => ["F","H","V","W","Y"],
               "5" => ["K"],
               "8" => ["J", "X"],
               "10" => ["Q", "Z"]
                }
    #go through each point's array
    #take point
    #convert to integer
    scoring.each do |key, array|
      if array.include?(letter)
        return key.to_i
      end
    end

  end

end


binding.pry
