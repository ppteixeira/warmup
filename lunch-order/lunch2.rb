class Order
  def initialize (name, price)
    @name = name
    @price = price
  end

end

pie = Order.new('pie', 12)
puts pie.get_name




orders = {}
puts "enter name"
name = gets.chomp

puts 'enter order item'
order = gets.chomp

new_order = Order.new(name,order)
orders[name] = [newOrder]
