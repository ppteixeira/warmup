require 'pry'


def get_square(array)
  newArray = []
  array.each do |num|
    var = Math.sqrt(num)

    if var % 1 == 0

      newArray << num
    end
  end

  return newArray.uniq.sort
end
test = [16 ,4, 1, 16, 1, 10, 35, 22]
result = get_square(test)
binding.pry
