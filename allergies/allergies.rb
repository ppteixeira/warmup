require 'pry'
class Allergies

  def initialize (val)
    @scores = [
      :eggs => 1,
      :peanuts => 2,
      :shellfish => 4,
      :strawberries => 8,
      :tomatoes => 16,
      :chocolate => 32,
      :pollen => 64,
      :cats => 128
    ]
    @score = val
  end

  def list
    binding.pry
    @score
  end

  def allergic_to(item)

  end

end

pedro = Allergies.new(36)
binding.pry
