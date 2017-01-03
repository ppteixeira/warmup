require 'pry'
class Robot

  def initialize
    @name = generate_name
    @mac_address =
    @instruction_count = 0
    @creation_date = Time.now
  end

  def reset
    inst_count
    @name = generate_name
  end
  def age
    inst_count
    @creation_date
  end
  def name
    inst_count
    @name
  end
  def instruction_count
    inst_count
    @instruction_count
  end
  def inst_count
    @instruction_count = @instruction_count + 1
  end
  def generate_name
    number = 2
    charset = Array('A'..'Z') + Array('A'..'Z')
    first2 = Array.new(number) { charset.sample }.join
    last3 = Array(100..999).sample.to_s
    return first2+last3

    # first2 = ('AA'..'ZZ').to_a.sample
    # last 2 = Random.rand(100..999).to_s
  end

end

robot1 = Robot.new



binding.pry
