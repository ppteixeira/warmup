require 'pry'

 # 0xA0 "Atta"
 # 0xB0 "Bibbity"
 # 0xC0 "City"
 # 0xD0 "Dickety"
 # 0xE0 "Ebbity"
 # 0xF0 "Fleventy"
 # 0xA000 "Atta-bitey"
 # 0xB000 "Bibbity-bitey"
 # 0xC000 "City-bitey"
 # 0xD000 "Dickety-bitey"
 # 0xE000 "Ebbity-bitey"
 # 0xF000 "Fleventy-bitey"
#
# hex =[
#   "A" => "Atta",
#   "B" => "Bibbity" ,
#   "C" => "City" ,
#   "D" => "Dickety" ,
#   "E" => "Ebbity" ,
#   "F" => "Fleventy",
#   "1" => "One",
#   "2" => "Two",
#   "3" => "Three",
#   "4" => "Four",
#   "5" => "Five",
#   "6" => "Six",
#   "7" => "Seven",
#   "8" => "Eight",
#   "9" => "Nine"
# ]
system('clear')
value = ''
while value != 'exit'
  puts "\nEnter Hex value:"
  value = gets.chomp
  value = value.split('')
  if value == 'exit'
    next
  end
  if value[0] == '0' && value[1] == 'x'
    count = 0
    setence = []
    value.drop(2).each do |i|
      if count == 0
        case i
          when "A"
            setence << "Atta"
            count = count + 1
          when "B"
            setence << "Bibbity"
            count = count + 1
          when "C"
            setence << "City"
            count = count + 1
          when "D"
            setence << "Dickety"
            count = count + 1
          when "E"
            setence << "Ebbity"
            count = count + 1
          when "F"
            setence << "Fleventy"
            count = count + 1
          when '0'
            setence << "-bitey "
            count = count + 1
          when "1"
            setence << "One"
            count = count + 1
          when "2"
            setence << "Two"
            count = count + 1
          when "3"
            setence << "Three"
            count = count + 1
          when "4"
            setence << "Four"
            count = count + 1
          when "5"
            setence << "Five"
            count = count + 1
          when "6"
            setence << "Six"
            count = count + 1
          when "7"
            setence << "Seven"
            count = count + 1
          when "8"
            setence << "Eight"
            count = count + 1
          when "9"
            setence << "Nine"
            count = count + 1
        end


      elsif count == 1
        case i
          when "A"
            setence << "-Aee "
            count = 0
          when "B"
            setence << "-Bee "
            count = 0
          when "C"
            setence << "-Cee "
            count = 0
          when "D"
            setence << "-Dee "
            count = 0
          when "E"
            setence << "-Eee "
            count = 0
          when "F"
            setence << "-Fee "
            count = 0
          when '0'
            setence << "-bitey "
            count = 0
          when "1"
            setence << "-One "
            count = 0
          when "2"
            setence << "-Two "
            count = 0
          when "3"
            setence << "-Three "
            count = 0
          when "4"
            setence << "-Four "
            count = 0
          when "5"
            setence << "-Five "
            count = 0
          when "6"
            setence << "-Six "
            count = 0
          when "7"
            setence << "-Seven "
            count = 0
          when "8"
            setence << "-Eight "
            count = 0
          when "9"
            setence << "-Nine "
            count = 0
        end

      end

    end
  else
    puts "Value invalid!"
  end

  setence = setence.join
  puts setence
end

puts "--------------- end of execution ----------"
