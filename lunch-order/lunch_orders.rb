require 'pry'
class Orders
  def initialize(name)
    @name = name
    @orders = []
  end

  def add_item(item)
    @order << item
  end

  def show_order
    return @order
  end

  def show_customer
    return @name
  end
end

class

end
customer = ''
order_number = 1
loop do
  system('clear')
  puts 'Would you like to start ordering? ( Y / N )'
  start_order = gets.chomp
  break if start_order == 'N' || start_order == 'n'
  if start_order == 'Y'
    puts "\n What is your name?"
    customer = gets.chomp
    order1 = Orders.new(customer)

    loop do
      puts "Please describe the item to be added to your order."
      item = gets.chomp
      order1.add_item(item)
      puts 'Anything else? ( Y / N )'
      more_items = gets.chomp
      break if more_items == 'n' || start_order == 'N'
    end
    puts "#{order1.show_customer} asked a #{order1.show_order}"
  end
end
binding.pry
