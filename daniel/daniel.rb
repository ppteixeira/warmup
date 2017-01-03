require 'pry'
system('clear')
talkToDaniel = ''
while talkToDaniel != 'see you' do
  puts "\nTalk to Daniel"
  talkToDaniel = gets.chomp

  if talkToDaniel[0..4]=="Bro, "  # talkToDaniel.star_with? ('Bro, ')
    talkToDaniel.gsub!('a','4')   # talkToDaniel = talkToDaniel.tr('aeio','4310')
    talkToDaniel.gsub!('e','3')   # talkToDaniel = talkToDaniel.tr('AEIO','4310')
    talkToDaniel.gsub!('i','1')
    talkToDaniel.gsub!('o','0')
    puts talkToDaniel
  elsif talkToDaniel == talkToDaniel.upcase
    puts "Woah, chill out!"
  else
    type = talkToDaniel[-1, 1]
    if type == "?"
      puts "Sure."
    elsif type == "." || type == "!"
      puts "Whatever."
    else
      puts "Fine. Be that way!"
    end
  end
end
