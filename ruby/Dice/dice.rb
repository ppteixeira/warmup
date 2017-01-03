# https://gist.github.com/HMAN1911/6c193c5c761e762d5d23a760654dbf94

require 'pry'


class Dice
  def roll(turns = 1)
    @rolled_all = []
    rolled_turn = turns.times.map{ 1 + Random.rand(6)}
    @rolled_all = @rolled_all << rolled_turn
    self
  end
  def sum
    sum_all = 0
    @rolled_all[0].each do |i|
      sum_all = sum_all + i
    end
    @rolled_all << sum_all
    self
  end
  def output
    @rolled_all
  end
end

Dice = Dice.new
binding.pry

# class Dice
#   def roll(turns = 1)
#     @rolled_all = []
#     rolled_turn = turns.times.map{ 1 + Random.rand(6)}
#     @rolled_all = @rolled_all + rolled_turn
#   end
# end
