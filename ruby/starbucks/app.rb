require "pry"


class Coffee ()
  def initialize (type,sugar,size,customer)
    @type = type
    @sugar = sugar
    @size = size
    @customer = customer.gsub(/^./,Array('A'..'Z').sample)
    @ready_time = Time.now + Random.rand(120..300)
    @collected = false


  end
  def to_s
    "#{@customer}'s #{@type}, #{@size}, #{@sugar}"
  end
  def add_extra

  end
  def ready?
    Time.now >= @ready_time
  end

  def misspel(string)
    charset = Array('A'..'Z')
    string = string.split
    return string.sub(/ˆ./,charset)
  end


end


# puts "------------New Order-------------"
# puts "Enter customer name:"
# customer_name = gets.chomp
# puts "Enter type of coffee:"
# type_coffee = gets.chomp
# puts "Enter size of coffee:"
# size_coffee = gets.chomp
# puts "Enter quantity of sugar"
# qtt_sugar = gets.chomp
# puts "----------------------------------"

c1 = Coffee.new('latte','2 sugars','medium','Darryl')
c2 = Coffee.new('Short Black','1 sugars','small','Darryl')
c3 = Coffee.new('Capuccino','1 sugars','large','Darryl')


binding.pry
