
def say(number)
  case number
    when 0
      return "zero"
    when 1..9
      return one_to_nine(number)
    when 10
      return "ten"
    when 11..19
      return eleven_to_nineteen(number)
    when 20 , 30 , 40, 50, 60, 70, 80
      return full_num(number)
    when 21..29
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
    when 31..39
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
    when 41..49
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
    when 51..59
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
    when 61..69
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
    when 71..79
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
    when 81..89
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
    when 91..99
      return "#{full_num(number)}-#{one_to_nine(number.to_s.split('').last.to_i)}"
  end
end


def full_num(number)
  case number
    when 20..29
      return "twenty"
    when 30..39
      return "thirty"
    when 40..49
      return "fourty"
    when 50..59
      return "fifty"
    when 60..69
      return "sixty"
    when 70..79
      return "seventy"
    when 80..89
      return "eighty"
    when 90..99
      return "ninety"
  end
end
#------------------------------ 1 - 9 ---------------------

def one_to_nine(num)
  case num
    when 1
      return "one"
    when 2
      return "two"
    when 3
      return "three"
    when 4
      return "four"
    when 5
      return "five"
    when 6
      return "six"
    when 7
      return "seven"
    when 8
      return "eight"
    when 9
      return "nine"
  end
end
#---------------------------11 - 19 ---------------------------
def eleven_to_nineteen(num)
  case num
    when 11
      return "eleven"
    when 12
      return "twelve"
    when 13
      return "thirteen"
    when 14
      return "fourteen"
    when 15
      return "fifteen"
    when 16
      return "sixteen"
    when 17
      return "seventeen"
    when 18
      return "eighteen"
    when 19
      return "nineteen"
  end
end

entry = -1
result = ''
while entry != 'exit'
  puts 'Enter number:'
  entry = gets.chomp
  if entry == 'exit'
    next
  elsif entry.to_i < 0 || entry.to_i > 99
    puts 'Number out of range. Type a number from 0 to 99'
    next
  else
    result = say(entry.to_i)
    puts result
  end
end
