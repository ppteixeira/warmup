require 'json'
require 'pry'
text = File.read("manifest_20150602173208.txt")


text = text.split("\n")
text.shift
hash = {}
text.each do |arr|
  new_arr = arr.split(',')
  key = new_arr.first
  sub_hash = {}
  sub_hash[:product] = new_arr[1]
  sub_hash[:unitPrice] = new_arr[2]
  sub_hash[:units] = new_arr[3]
  sub_hash[:totalPrice] = (new_arr[2].to_f * new_arr[3].to_f).round(2)

  if !hash.key? (key.to_sym)
    hash[key.to_sym] = []
  end
  hash[key.to_sym] << sub_hash


end

#   hash[:"#{key}"] << sub_hash


binding.pry
