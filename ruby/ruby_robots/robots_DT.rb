class Robot
  def initialize
      @name = "#{prefix}#{suffix}"
  end
  def name
    @name
  end

  def prefix
    ('AA'..'ZZ').to_a.sample
  end

  def suffix
    Random.rand(100..999)
  end

  def reset
    @name = "#{prefix}#{suffix}"
  end

  def instruction_count

  end
end
